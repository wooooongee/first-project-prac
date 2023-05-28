import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import Swipe from "./pages/Swiper";
function Main() {
  let [right, setRight] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <div className="main">
        <ReactPlayer
          url={process.env.PUBLIC_URL + "/forest.mp4"}
          width="100%"
          height="vh"
          playing={true}
          muted={true}
          loop={true}
        />
        <div className="vision-box">
          <h1>OUR VISION</h1>
          <p>
            우리는 모든 사람에게 건강하고 아름다운 식물을 제공하여 삶의 질을
            향상시키고자 합니다.
          </p>
          <button
            className="btn"
            onClick={() => {
              navigate("/vision");
            }}
          >
            버튼
          </button>
        </div>
        <div className="new">
          <h1>이번주 새로운 식물소식</h1>
          <p>새로들어온 식물</p>
        </div>
        <button
          className="btn"
          onClick={() => {
            setRight(false);
          }}
        >
          &lt;
        </button>
        <button
          className="btn"
          onClick={() => {
            setRight(true);
          }}
        >
          &gt;
        </button>
        <div className="overflow">
          <div className={right ? "new-plant right" : "new-plant"}>
            <div className="plant">
              <div className="img">
                <img src="/plant1.jpg" alt="" />
              </div>
              <p>나무</p>
              <button className="btn">버튼</button>
            </div>
            <div className="plant">
              <div className="img">
                <img src="/plant3.jpg" alt="" />
              </div>
              <p>나무</p>
              <button className="btn">버튼</button>
            </div>
            <div className="plant">
              <div className="img">
                <img src="/plant2.jpg" alt="" />
              </div>
              <p>나무</p>
              <button className="btn">버튼</button>
            </div>
            <div className="plant">
              <div className="img">
                <img src="/plant4.jpg" alt="" />
              </div>
              <p>나무</p>
              <button className="btn">버튼</button>
            </div>
            <div className="plant">
              <div className="img">
                <img src="/plant1.jpg" alt="" />
              </div>
              <p>나무</p>
              <button className="btn">버튼</button>
            </div>
          </div>
          <Swipe />
        </div>
        <div>
          <h1>Trending Now</h1>
          <div className="trending">
            <div className="trending-box">
              <img src="/plant1.jpg" alt="" />
              <div className="trending-content">
                <p>나무임</p>
                <button className="btn white">구매</button>
              </div>
            </div>
            <div className="trending-box">
              <img src="/plant3.jpg" alt="" />
              <div className="trending-content">
                <p>나무임</p>
                <button className="btn white">구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-flex">
          <div>
            <li>New</li>
            <li>Member</li>
            <li>Location</li>
            <li>Gernal</li>
          </div>
          <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
          <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </div>
          <div className="icon">
            아이콘 4개 정렬
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
