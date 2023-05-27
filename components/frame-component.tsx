import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./frame-component.module.css";

type FrameComponentType = {
  /** Style props */
  propDisplay?: Property.Display;
  propWidth?: Property.Width;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  propDisplay,
  propWidth,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.careerDetailsInner} style={frameDiv2Style}>
      <div className={styles.typesAndFiltersWrapper} style={frameDiv3Style}>
        <div className={styles.typesAndFilters}>
          <div className={styles.headlineParent}>
            <b className={styles.headline}>
              <p className={styles.buildYour}>Build Your</p>
              <p className={styles.buildYour}>Solid Career</p>
            </b>
            <div className={styles.inThisStep}>
              In this step, we'll ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
