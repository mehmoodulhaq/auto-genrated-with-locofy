import type { NextPage } from "next";
import styles from "./call-to-action.module.css";

type CallToActionType = {
  placeholder?: string;
  placeholder1?: string;
};

const CallToAction: NextPage<CallToActionType> = ({
  placeholder,
  placeholder1,
}) => {
  return (
    <div className={styles.callToAction}>
      <div className={styles.content}>
        <div className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
            <div className={styles.card}>
              <div className={styles.paragraphContainer}>
                <div className={styles.headline}>
                  <p className={styles.welcomeToYour}>
                    Welcome to your room sharing platform that
                  </p>
                  <p className={styles.welcomeToYour}>
                    which will rock your room stays truly at all.
                  </p>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.welcomeToYour}>
                    Let us help you take you from zero to serious business and
                    beyond.
                  </p>
                  <p className={styles.welcomeToYour}>
                    {" "}
                    Our no-strings attached free trial lets you test our product
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hintTextParent}>
            <div className={styles.hintText}>Subscribe to our newsletter</div>
            <div className={styles.input}>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Enter your email"
              />
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder}
                />
                <div className={styles.text}>Submit</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
