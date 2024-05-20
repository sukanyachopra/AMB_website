import React, { useEffect, useState } from "react";

import "./slider.css";

import s1 from "../../assets/banner/slide-1.jpg";
import s2 from "../../assets/banner/slide-2.jpg";
import s3 from "../../assets/banner/slide-3.jpg";
import s4 from "../../assets/banner/slide-4.jpg";
import s5 from "../../assets/banner/slide-5.jpg";
import s6 from "../../assets/banner/slide-6.jpg";
import s7 from "../../assets/banner/slide-7.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;

      if (deltaY > 0 && currentIndex < 6) {
        // Scroll down
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (deltaY < 0 && currentIndex > 0) {
        // Scroll up
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);

  const ProgressBar = ({ percent }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(percent);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }, [percent]);

    return (
      <span
        className="tb-progress-bar-bg"
        style={{
          width: `${width}%`,
          backgroundColor: "#ff2300",
          transition: "width 0.5s ease-in-out",
        }}
      ></span>
    );
  };

  const images = [s1, s2, s3, s4, s5, s6, s7];

  const captions = [
    <div className="image-caption-fp">
      <div className="top-caption-fp">
        <div className="heading-caption-fp">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp">
          National Family Health Survey-5 (2019-21)
        </div>
      </div>
      <hr />
      <div className="module-progressbar">
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">
            Children 6-59 months (67%)
          </div>
          <ProgressBar percent={67} />
        </div>
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">
            Adolescent Girls 15-19 yrs (59%)
          </div>
          <ProgressBar percent={59} />
        </div>
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">
            Adolescent Boys 15-19 yrs (31%)
          </div>
          <ProgressBar percent={31} />
        </div>
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">
            Women of Reproductive Age (57%)
          </div>
          <ProgressBar percent={57} />
        </div>
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">Pregnant Women (52%)</div>
          <ProgressBar percent={52} />
        </div>
        <div className="tb-progress-bar">
          <div className="tb-progress-bar-label">Non-Pregnant Women(57%)</div>
          <ProgressBar percent={57} />
        </div>
      </div>
    </div>,
    <div className="image-caption-fp-other">
      <div className="top-caption-fp-other ">
        <div className="heading-caption-fp-other">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp-other">
          All Districts Affected
        </div>
      </div>
    </div>,

    "",
    <div className="image-caption-fp-other">
      <div className="top-caption-fp-other ">
        <div className="heading-caption-fp-other">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp-other">
          All at Risks to Anemia
        </div>
      </div>
    </div>,
    <div className="image-caption-fp-other">
      <div className="top-caption-fp-other ">
        <div className="heading-caption-fp-other">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp-other">
          514 districts
          <br />
          Anemia ≥ 40% among children 6-59 months
        </div>
      </div>
    </div>,
    <div className="image-caption-fp-other">
      <div className="top-caption-fp-other ">
        <div className="heading-caption-fp-other">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp-other">
          139 districts <br />
          Anemia ≥ 40% among women of reproductive age
        </div>
      </div>
    </div>,
    <div className="image-caption-fp-other">
      <div className="top-caption-fp-other ">
        <div className="heading-caption-fp-other">Anemia Prevalence</div>
        <div className="separator-caption-fp"></div>
        <div className="subheading-caption-fp-other">
          65 districts
          <br />
          Anemia ≥ 40% among pregnant women 15-49 years
        </div>
      </div>
    </div>,
  ];

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: `${(index - currentIndex) * 100}vh`,
            opacity: currentIndex === index ? 1 : 0,
            transition: "ease-in-out 1s",
          }}
        >
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "absolute",
              filter: "brightness(40%)",
              top: `${(index - currentIndex) * 100}vh`,
              opacity: currentIndex === index ? 1 : 0,
              transition: "ease-in-out 1s",
            }}
          />
          {captions[index]}
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: currentIndex === index ? "#ca3f3f" : "#fff",
              margin: "6px 0",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
