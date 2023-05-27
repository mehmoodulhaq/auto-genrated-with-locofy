import type { NextPage } from "next";
import styles from "./header.module.css";

type HeaderType = {
  totel?: string;
  placeholder?: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
  placeholder4?: string;
  placeholder5?: string;
  chevronDown?: string;
  placeholder6?: string;
  placeholder7?: string;
  placeholder8?: string;
  placeholder9?: string;
  statusIcon?: string;
  arrowRight?: string;
  icon?: string;
  placeholder10?: string;
  arrowRight1?: string;
  icon1?: string;
  placeholder11?: string;
  arrowRight2?: string;
  icon2?: string;
  placeholder12?: string;
  arrowRight3?: string;
};

const Header: NextPage<HeaderType> = ({
  totel,
  placeholder,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  chevronDown,
  placeholder6,
  placeholder7,
  placeholder8,
  placeholder9,
  statusIcon,
  arrowRight,
  icon,
  placeholder10,
  arrowRight1,
  icon1,
  placeholder11,
  arrowRight2,
  icon2,
  placeholder12,
  arrowRight3,
}) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.textInputContainer}>
          <div className={styles.companyLogo}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
            <img className={styles.totelIcon} alt="" src={totel} />
          </div>
          <div className={styles.textInput}>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder}
              />
              <div className={styles.text}>Room Stays</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder1}
              />
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder2}
              />
              <div className={styles.text}>Looking for Partner</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder3}
              />
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder4}
              />
              <div className={styles.text}>Company</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder5}
              />
              <img
                className={styles.chevronDownIcon}
                alt=""
                src={chevronDown}
              />
            </div>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder6}
              />
              <div className={styles.text}>Help</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder7}
              />
            </div>
          </div>
        </div>
        <div className={styles.button4}>
          <div className={styles.button5}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src={placeholder8}
            />
            <div className={styles.text4}>Manage Listings</div>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src={placeholder9}
            />
          </div>
          <div className={styles.avatar}>
            <img className={styles.statusIcon} alt="" src={statusIcon} />
          </div>
        </div>
      </div>
      <div className={styles.headerDropdownList}>
        <div className={styles.horizontalContainer}>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Academy</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button6}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src={arrowRight} />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src={icon} />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Resources</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button6}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src={placeholder10}
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src={arrowRight1} />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src={icon1} />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Guides</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button6}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src={placeholder11}
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src={arrowRight2} />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src={icon2} />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Design</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button6}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src={placeholder12}
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src={arrowRight3} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <div className={styles.button10}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder4.svg"
            />
            <div className={styles.text4}>Contact Us</div>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder4.svg"
            />
          </div>
          <div className={styles.button10}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder4.svg"
            />
            <div className={styles.text4}>Info</div>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
