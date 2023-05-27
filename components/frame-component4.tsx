import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./frame-component4.module.css";

type FrameComponent4Type = {
  rectangle2475?: string;
  placeholder?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propBackgroundColor?: Property.BackgroundColor;

  /** Action props */
  onButtonClick?: () => void;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  rectangle2475,
  placeholder,
  propWidth,
  propWidth1,
  propWidth2,
  propBackgroundColor,
  onButtonClick,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.rectangleParent} style={frameDivStyle}>
      <img
        className={styles.frameChild}
        alt=""
        src={rectangle2475}
        style={rectangleIconStyle}
      />
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.frameGroup}>
          <div className={styles.fullTimePartTimeParent}>
            <div className={styles.fullTime}>Full Time / Part Time</div>
            <div className={styles.travelGuide}>Travel Guide</div>
          </div>
          <div className={styles.butHappyTo}>
            But happy to move in with more than that, I’m super easy going and
            tidy.
          </div>
        </div>
        <button
          className={styles.button}
          onClick={onButtonClick}
          style={buttonStyle}
        >
          <img className={styles.placeholderIcon} alt="" src={placeholder} />
          <div className={styles.text}>Apply Now</div>
          <img
            className={styles.placeholderIcon}
            alt=""
            src="/placeholder34.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent4;
