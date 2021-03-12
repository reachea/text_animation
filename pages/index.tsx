import React, { useState, useEffect } from "react";

import style from "./home.module.scss";

const App = () => {
  let start = false;
  let first = 1500;
  let interval;
  const subText = "America";
  const [animateText, setAnimateText] = useState("Cambodia");

  const runInterval = (time) => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    interval = setInterval(() => {
      start
        ? setAnimateText((animateText) => {
            let result_text = subText.slice(0, animateText.length + 1);

            return result_text;
          })
        : setAnimateText((animateText) => {
            if (animateText.length === 0) {
              start = true;
            }

            let result_text = animateText.slice(0, animateText.length - 1);

            return result_text;
          });

      runInterval(200);
    }, time);
  };

  useEffect(() => {
    setAnimateText("Cambodia");

    runInterval(first + 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.__home_container}>
      <div className="container full-div center">
        <p className={style.__text_animate}>Hello World</p>
        <p className={style.__text_animate}>
          This is {animateText}
          <span style={{ color: "yellowgreen" }}>|</span>
        </p>
      </div>
    </div>
  );
};

export default App;
