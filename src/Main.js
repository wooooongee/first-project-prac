import { useState,useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  let [right, setRight] = useState(false);
  let navigate = useNavigate();

  return (
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
        <button className="btn" onClick={()=>{
          navigate('/vision')
        }}>버튼</button>
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
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default Main;
