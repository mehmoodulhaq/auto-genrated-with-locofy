import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component5.module.css";
const FrameComponent5: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/career-details");
  }, [router]);

  return (
    <div className={styles.careerInner}>
      <div className={styles.frameParent}>
        <FrameComponent4
          rectangle2475="/rectangle-24756@2x.png"
          placeholder="/placeholder34.svg"
          onButtonClick={onButtonClick}
        />
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24751@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Full Time</div>
                <div className={styles.supervisor}>Supervisor</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder35.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder36.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24752@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Part Time</div>
                <div className={styles.supervisor}>Receptionist</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder35.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder34.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24753@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Full Time / Part Time</div>
                <div className={styles.supervisor}>Tech Operator</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder34.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
