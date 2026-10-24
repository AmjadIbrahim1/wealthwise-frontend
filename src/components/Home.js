import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./navbar.js";
import { useNavigate } from "react-router-dom";

function extractVideoId(url) {
  const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|(?:https?:\/\/(?:www\.)?youtu\.be\/))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    console.error("No match found for URL:", url);
    return null;
  }
}

function formatDuration(duration) {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  const match = duration.match(regex);

  if (!match) return "Invalid duration format (صيغة مدة غير صحيحة)";

  const minutes = match[2] ? match[2] : "0";
  const seconds = match[3] ? match[3] : "0";

  return `${minutes}:${seconds.padStart(2, "0")}`;
}

function formatViews(views) {
  const numericViews = Number(views);
  if (isNaN(numericViews) || numericViews < 0) {
    return "Invalid view count (عدد مشاهدات غير صحيح)";
  }
  if (numericViews >= 1e6) {
    return (numericViews / 1e6).toFixed(1).replace(/\.0$/, "") + "M views (مليون مشاهدة)";
  } else if (numericViews >= 1e3) {
    return (numericViews / 1e3).toFixed(1).replace(/\.0$/, "") + "K views (ألف مشاهدة)";
  } else {
    return numericViews + " views (مشاهدة)";
  }
}

async function fetchYouTubeVideoDetails(link) {
  const API_KEY = "AIzaSyC-y_81kkguQwtMrMBTYs-hDFmx3C_my0w";
  const videoId = extractVideoId(link);
  if (!videoId) {
    console.log("Invalid YouTube link!");
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items.length > 0) {
      const video = data.items[0];

      const videoDetails = {
        name: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
        duration: formatDuration(video.contentDetails.duration),
        views: formatViews(video.statistics.viewCount),
        videoUrl: `https://youtu.be/${videoId}`,
      };
      return videoDetails;
    } else {
      console.log("Video not found!");
    }
  } catch (error) {
    console.error("Error fetching video details:", error);
  }
}

// فيديوهات عربية مصرية للتوعية المالية (Arabic Egyptian financial awareness videos)
const videoLinks = [
  "https://www.youtube.com/watch?v=KBa2Oeg7PNI",
  "https://www.youtube.com/watch?v=F0iZJmkUugw",
  "https://www.youtube.com/watch?v=NkXRF7VZuJU",
  "https://www.youtube.com/watch?v=esELlZdie6k",
  "https://www.youtube.com/watch?v=O2vFMxoAQ2c",
  "https://www.youtube.com/watch?v=Cz4u3bTSL8w",
  "https://www.youtube.com/watch?v=CyY88hTJ_JI",
];

const Home = ({ mail }) => {
  const [egxData, setEgxData] = useState([]);

  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const details = await Promise.all(
          videoLinks.map((link) => fetchYouTubeVideoDetails(link))
        );
        setVideoDetails(details.filter((detail) => detail !== null));
      } catch (error) {
        console.error("Failed to fetch video details", error);
      }
    };

    fetchVideos();
  }, []);

  const fetchData = async () => {
    // بيانات البورصة المصرية EGX (Egyptian Exchange - EGX data)
    setEgxData([
      { symbol: "COMI", name: "CIB (بنك مصر الدولي)", ltp: 96.5, prev_price: 95.1 },
      { symbol: "ABUK", name: "Abu Dhabi Islamic (أبو ظبي الإسلامي)", ltp: 38.2, prev_price: 38.9 },
      { symbol: "ETEL", name: "Telecom Egypt (تيلي كوم مصر)", ltp: 62.4, prev_price: 61.0 },
      { symbol: "TMGH", name: "Talaat Moustafa (طلعت مصطفى)", ltp: 92.7, prev_price: 93.5 },
      { symbol: "SWDY", name: "Southwest Development (السويدى للتنمية)", ltp: 55.3, prev_price: 54.6 },
      { symbol: "EAST", name: "Eastern Company (الشرقية للدخان)", ltp: 24.8, prev_price: 24.1 },
      { symbol: "MFPC", name: "Minapharm (مينا فارم)", ltp: 30.6, prev_price: 31.2 },
      { symbol: "HRHO", name: "Hermes (هيرميس)", ltp: 68.9, prev_price: 67.4 },
      { symbol: "ORWE", name: "Oriental Weavers (ال oriental للنسيج)", ltp: 15.2, prev_price: 14.9 },
      { symbol: "FWRY", name: "Farawy Futures (فراوي)", ltp: 4.35, prev_price: 4.28 },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const StocksData = () => {
    const [activeButton, setActiveButton] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
      if (activeButton === "Expense Tracker (متتبع المصروفات)") {
        navigate("/expensedate");
      } else if (activeButton === "Personalized Mutual Funds (صناديق استثمار مخصصة)") {
        navigate("/personal-MF");
      } else if (activeButton === "Personalized FD (ودائع ثابتة مخصصة)") {
        navigate("/fd-recommendations");
      }
    }, [activeButton, navigate]);

    const personalizeButtons = [
      {
        name: "Personalized Stocks (أسهم مخصصة)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1116.5 16h-11z" />
          </svg>
        ),
      },
      {
        name: "Personalized FD (ودائع ثابتة مخصصة)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm4-1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Personalized Mutual Funds (صناديق استثمار مخصصة)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        ),
      },
      {
        name: "Expense Tracker (متتبع المصروفات)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
          </svg>
        ),
      },
    ];    const investments = [
      {
        type: "Stocks (أسهم)",
        items: [
          {
            name: "CIB (بنك مصر الدولي)",
            code: "COMI",
            price: 96.5,
            icon: "ج.م",
            link: "https://www.investing.com/egypt/",
            image: "comi",
          },
        ],
      },
      {
        type: "Fixed Deposits (ودائع ثابتة)",
        items: [
          {
            name: "National Bank of Egypt (البنك الأهلي المصري)",
            code: "NBE FD",
            return: 16.5,
            icon: "ج.م",
            link: "https://www.nbe.com.eg/",
            image: "nbe",
          },
          {
            name: "Banque Misr (بنك مصر)",
            code: "BM FD",
            return: 16.75,
            icon: "ج.م",
            link: "https://www.bankmisr.com/",
            image: "bm",
          },
          {
            name: "CIB (بنك مصر الدولي)",
            code: "CIB FD",
            return: 15.5,
            icon: "ج.م",
            link: "https://www.cibeg.com/",
            image: "cib",
          },
          {
            name: "QNB Alahli (قطر الوطني الأهلي)",
            code: "QNB FD",
            return: 15.25,
            icon: "ج.م",
            link: "https://www.qnb.com.eg/",
            image: "qnb",
          },
          {
            name: "Faisal Islamic Bank (بنك فيصل الإسلامي)",
            code: "FIB FD",
            return: 17.0,
            icon: "ج.م",
            link: "https://www.faisalbank.com.eg/",
            image: "fib",
          },
          {
            name: "Housing & Development Bank (بنك الإسكان والتنمية)",
            code: "HDB FD",
            return: 17.5,
            icon: "ج.م",
            link: "https://www.hdb.com.eg/",
            image: "hdb",
          },
        ],
      },
      {
        type: "Mutual Funds (صناديق استثمار)",
        items: [
          {
            name: "CI Capital Money Market (سي كابيتال للنقود)",
            code: "Money Market",
            return: 17.8,
            icon: "ج.م",
            link: "https://www.cicapital.com/",
            image: "cic",
          },
          {
            name: "EFG Hermes Money Market (إي إف جي هيرميس للنقود)",
            code: "Money Market",
            return: 17.2,
            icon: "ج.م",
            link: "https://www.efg-hermes.com/",
            image: "efg",
          },
          {
            name: "CI Capital Equity (سي كابيتال للأسهم)",
            code: "Equity",
            return: 24.5,
            icon: "ج.م",
            link: "https://www.cicapital.com/",
            image: "ciceq",
          },
          {
            name: "AAA Investment (إيه إيه إيه للاستثمار)",
            code: "Balanced",
            return: 21.3,
            icon: "ج.م",
            link: "https://www.aaa.com.eg/",
            image: "aaa",
          },
          {
            name: "Beltone Financial (بلتون المالية)",
            code: "Equity",
            return: 22.1,
            icon: "ج.م",
            link: "https://www.beltone.com/",
            image: "blt",
          },
          {
            name: "Al Ahly Fund (صندوق الأهلي للاستثمار)",
            code: "Mixed",
            return: 19.4,
            icon: "ج.م",
            link: "https://www.nbe.com.eg/",
            image: "ahly",
          },
          {
            name: "CIB Asset Management (إدارة أصول بنك مصر الدولي)",
            code: "Fixed Income",
            return: 18.6,
            icon: "ج.م",
            link: "https://www.cibeg.com/",
            image: "cibam",
          },
        ],
      },
      {
        type: "Investment Videos (فيديوهات استثمار)",
        items: [
          {
            id: 0,
            details: "https://www.youtube.com/watch?v=KBa2Oeg7PNI",
          },
          {
            id: 1,
            details: "https://www.youtube.com/watch?v=F0iZJmkUugw",
          },
          {
            id: 2,
            details: "https://www.youtube.com/watch?v=NkXRF7VZuJU",
          },
          {
            id: 3,
            details: "https://www.youtube.com/watch?v=esELlZdie6k",
          },
          {
            id: 4,
            details: "https://www.youtube.com/watch?v=O2vFMxoAQ2c",
          },
          {
            id: 5,
            details: "https://www.youtube.com/watch?v=Cz4u3bTSL8w",
          },
          {
            id: 6,
            details: "https://www.youtube.com/watch?v=CyY88hTJ_JI",
          },
        ],
      },
    ];

    return (
      <div
        className="inset-0 bg-gradient-to-br from-blue-1500/90 to-purple-1500/90 text-white p-4 overflow-hidden w-full "
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          className="grid grid-cols-2 gap-4 mb-6 pb-2 overflow-hidden"
          style={{ marginTop: "90px", marginBottom: "40px" }}
        >
          {personalizeButtons.map((button) => (
            <button
              key={button.name}
              onClick={() => setActiveButton(button.name)}
              className={`
                    flex items-center space-x-2 px-4 py-2 
                    transform transition-all duration-300
                    
                    ${
                      activeButton === button.name
                        ? "bg-gradient-to-br from-blue-900/50 to-purple-900/90  text-white scale-105 shadow-lg"
                        : "bg-gradient-to-br from-blue-900/90 to-purple-900/50 text-gray-300 hover:bg-gray-700"
                    }
                `}
              style={{ margin: "10px", height: "90px", borderRadius: "15px" }}
            >
              <span className="flex items-center justify-center text-sm font-medium mx-auto">
                {button.icon}&nbsp;&nbsp;{button.name}
              </span>
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          Top Investments & Learning (أفضل الاستثمارات والتعلّم)
        </h2>

        {investments.map((category, categoryIndex) => (
          <div
            key={category.type}
            className="mb-6"
            style={{ userSelect: "none" }}
          >
            <style>
              {`
                  ::-webkit-scrollbar {
                    width: 2px;
                    height: 2px;
                  }
                  ::-webkit-scrollbar:horizontal {
                    width: 2px;
                    height: 2px;
                  }
                  
                  ::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom right, rgba(51, 153, 51, 0.9), rgba(247, 223, 30, 0.9)); /* Gradient from green to gold */
                    border-radius: 3px;
                  }
            
                  ::-webkit-scrollbar-thumb:hover {
                    background-color: #666; 
                  }
            
                  ::-webkit-scrollbar-track {
                    background-color: linear-gradient(to bottom right, rgba(51, 153, 51, 0.9), rgba(247, 223, 30, 0.9)); /* Gradient from green to gold */
                    border-radius: 3px;
                  }
                `}
            </style>
            <h3 className="text-lg font-semibold mb-3 text-bg-gradient-to-br from-blue-900/90 to-purple-900/50">
              {category.type}
            </h3>

            <div
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide whitespace-nowrap scroll-smooth overflow-hidden"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {category.items.map((investment, index) => {
                const bgIntensity = Math.max(700 - index * 50, 800);
                const initial = (investment.name || "?").trim().charAt(0);

                return category.type === "Investment Videos (فيديوهات استثمار)" &&
                  videoDetails &&
                  videoDetails[investment.id] ? (
                  <div
                    key={videoDetails[investment.id].name}
                    className={`flex-shrink-0 w-64 bg-gradient-to-br from-blue-900/90 to-purple-900/90-${bgIntensity} rounded-lg p-4 
                          transform transition-all duration-300 
                          hover:scale-105 hover:shadow-lg
                          scroll-snap-align: start;`}
                  >
                    <div className="relative mb-3">
                      <img
                        src={videoDetails[investment.id].thumbnail}
                        alt={videoDetails[investment.id].name}
                        onClick={() =>
                          window.open(
                            videoDetails[investment.id].videoUrl,
                            "_blank"
                          )
                        }
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 rounded">
                        {videoDetails[investment.id].duration}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg line-clamp-2">
                        {videoDetails[investment.id].name}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {videoDetails[investment.id].views}
                      </p>
                    </div>
                  </div>
                ) : category.type === "Mutual Funds (صناديق استثمار)" ? (
                  <div
                    key={investment.code || investment.name}
                    className={`flex-shrink-0 w-64 bg-gradient-to-br from-blue-1500/90 to-purple-1500/90${bgIntensity} rounded-lg p-4 
                        transform transition-all duration-300 
                        hover:scale-105 hover:shadow-lg
                        scroll-snap-align: start;`}
                    onClick={() => window.open(investment.link, "_blank")}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">{investment.name}</h4>
                        <div className="flex space-x-2">
                          <p className="text-sm text-gray-400">
                            {investment.code}
                          </p>
                          <p className="text-sm text-gray-400">
                            ( {investment.return}% )
                          </p>
                        </div>
                      </div>                       {" "}
                      <div className="w-11 h-11 rounded-full bg-secondary text-primary-dark font-bold flex items-center justify-center text-xl">
                        {initial}
                      </div>
                    </div>
                  </div>
                ) : category.type === "Fixed Deposits (ودائع ثابتة)" ? (
                  <div
                    key={investment.code || investment.name}
                    className={`flex-shrink-0 w-64 bg-gradient-to-br from-blue-1500/90 to-purple-1500/90${bgIntensity} rounded-lg p-4 
                        transform transition-all duration-300 
                        hover:scale-105 hover:shadow-lg
                        scroll-snap-align: start;`}
                    onClick={() => window.open(investment.link, "_blank")}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">{investment.name}</h4>
                        <div className="flex space-x-2">
                          <p className="text-sm text-gray-400">
                            {investment.code}
                          </p>
                          <p className="text-sm text-gray-400">
                            ( {investment.return}% )
                          </p>
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xl">
                        {initial}
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
              {category.type === "Stocks (أسهم)" &&
                egxData.map((stock, index) => {
                  const bgIntensity = Math.max(700 - index * 50, 800);
  
                  return (
                    <div
                      key={stock.symbol}
                      className={`flex-shrink-0 w-64 bg-gradient-to-br from-blue-1500/90 to-purple-1500/90${bgIntensity} rounded-lg p-4 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-lg
                    scroll-snap-align: start;`}
                      style={{ scrollSnapAlign: "start" }}
                      onClick={() => window.open(stock.link || "https://www.egx.com.eg/", "_blank")}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <h4 className="font-bold text-lg leading-tight">
                            {stock.symbol}
                          </h4>
                          <div className="flex space-x-2">
                            <p className="text-sm text-gray-400">
                              ج.م {stock.ltp}
                            </p>
                            <p className="text-sm text-gray-400">
                              ( +{(stock.ltp - stock.prev_price).toFixed(2)} )
                            </p>
                          </div>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-secondary text-primary-dark font-bold flex items-center justify-center text-xl">
                          {stock.symbol.charAt(0)}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className=" bg-gradient-to-br from-blue-900/50 to-purple-900/50 ">
        <Navbar mail={mail} />

        <StocksData />
      </div>
    </motion.div>
  );
};

export default Home;
