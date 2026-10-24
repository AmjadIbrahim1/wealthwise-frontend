// API client for the WealthWise Supabase Edge Function backend.
// Mimics the axios contract used across components: resolves to { data }
// and throws errors with .response.data so existing call sites keep working.
import { supabase } from './supabase';
import Cookies from 'js-cookie';

const FUNCTIONS_URL = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/api`;
const ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

async function getToken() {
  try {
    const { data } = await supabase.auth.getSession();
    if (data.session?.access_token) return data.session.access_token;
  } catch (e) {
    // fall through to cookie / anon key
  }
  return Cookies.get('sessionToken') || ANON_KEY;
}

export async function api(endpoint, { method = 'POST', body, params } = {}) {
  const url = new URL(`${FUNCTIONS_URL}?endpoint=${encodeURIComponent(endpoint)}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) url.searchParams.set(key, value);
    });
  }

  const headers = { Authorization: `Bearer ${await getToken()}` };
  let payload;

  if (body instanceof FormData) {
    payload = body; // browser sets the multipart boundary
  } else if (body !== undefined && method !== 'GET') {
    headers['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }

  const res = await fetch(url.toString(), { method, headers, body: payload });

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    data = {};
  }

  if (!res.ok) {
    const error = new Error(data?.message || `Request failed (${res.status})`);
    error.response = { data, status: res.status };
    throw error;
  }

  return { data };
}

export default api;
