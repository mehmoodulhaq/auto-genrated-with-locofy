import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

type FrameComponent2Type = {
  rectangle2475?: string;
  fullTime?: string;
  supervisor?: string;
  placeholder?: string;
  placeholder1?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  rectangle2475,
  fullTime,
  supervisor,
  placeholder,
  placeholder1,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src={rectangle2475} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.fullTimeParent}>
            <div className={styles.fullTime}>{fullTime}</div>
            <div className={styles.supervisor}>{supervisor}</div>
          </div>
          <div className={styles.butHappyTo}>
            But happy to move in with more than that, I’m super easy going and
            tidy.
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.placeholderIcon} alt="" src={placeholder} />
          <div className={styles.text}>Apply Now</div>
          <img className={styles.placeholderIcon} alt="" src={placeholder1} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
