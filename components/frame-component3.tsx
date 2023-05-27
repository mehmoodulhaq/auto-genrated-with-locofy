import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./frame-component3.module.css";

type FrameComponent3Type = {
  placeholder?: string;
  placeholder1?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propWidth3?: Property.Width;
  propWidth4?: Property.Width;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
  propWidth7?: Property.Width;
  propWidth8?: Property.Width;
  propWidth9?: Property.Width;
  propWidth10?: Property.Width;
  propWidth11?: Property.Width;
  propWidth12?: Property.Width;
  propWidth13?: Property.Width;
  propWidth14?: Property.Width;
  propWidth15?: Property.Width;
  propWidth16?: Property.Width;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  placeholder,
  placeholder1,
  propWidth,
  propDisplay,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
  propWidth6,
  propWidth7,
  propWidth8,
  propWidth9,
  propWidth10,
  propWidth11,
  propWidth12,
  propWidth13,
  propWidth14,
  propWidth15,
  propWidth16,
}) => {
  const frameDiv7Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const frameDiv8Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const blockHeaderStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const subtitle6Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const frameDiv9Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const frameDiv10Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const frameDiv11Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const inputBoxStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth7,
    };
  }, [propWidth7]);

  const inputBox1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth8,
    };
  }, [propWidth8]);

  const frameDiv12Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  const inputBox2Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth10,
    };
  }, [propWidth10]);

  const inputBox3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth11,
    };
  }, [propWidth11]);

  const frameDiv13Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth12,
    };
  }, [propWidth12]);

  const inputBox4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth13,
    };
  }, [propWidth13]);

  const inputBox5Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth14,
    };
  }, [propWidth14]);

  const frameDiv14Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth15,
    };
  }, [propWidth15]);

  const inputBox6Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth16,
    };
  }, [propWidth16]);

  return (
    <div className={styles.careerDetailsInner} style={frameDiv7Style}>
      <div className={styles.blockHeaderParent} style={frameDiv8Style}>
        <div className={styles.blockHeader} style={blockHeaderStyle}>
          <div className={styles.textContainer}>
            <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
            <div className={styles.headlineSupportingText}>
              <b className={styles.headline}>Apply And Join Our Team</b>
              <div className={styles.subtitle} style={subtitle6Style}>
                Real adventure and travels encompass engaging in thrilling and
                immersive experiences that take you beyond the ordinary and
                allow you to explore new places, cultures, and activities. Here
                are a few suggestions to embrace real adventure and travels:
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent} style={frameDiv9Style}>
          <div className={styles.frameGroup} style={frameDiv10Style}>
            <div className={styles.inputBoxParent} style={frameDiv11Style}>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="First Name"
                style={inputBoxStyle}
              />
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Last Name"
                style={inputBox1Style}
              />
            </div>
            <div className={styles.inputBoxParent} style={frameDiv12Style}>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Email Address"
                style={inputBox2Style}
              />
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Phone Number"
                style={inputBox3Style}
              />
            </div>
            <div className={styles.inputBoxParent} style={frameDiv13Style}>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Your Position"
                style={inputBox4Style}
              />
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Salary Range"
                style={inputBox5Style}
              />
            </div>
            <div className={styles.inputBoxWrapper} style={frameDiv14Style}>
              <div className={styles.inputBox6} style={inputBox6Style}>
                <textarea
                  className={styles.text}
                  placeholder="Your Massage Here"
                />
                <img
                  className={styles.informationIcon}
                  alt=""
                  src="/information.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <img className={styles.placeholderIcon} alt="" src={placeholder} />
            <div className={styles.text1}>Send Application</div>
            <img className={styles.placeholderIcon} alt="" src={placeholder1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
