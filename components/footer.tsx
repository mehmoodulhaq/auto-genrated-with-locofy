import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./footer.module.css";

type FooterType = {
  placeholder?: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
  placeholder4?: string;
  placeholder5?: string;
  placeholder6?: string;
  placeholder7?: string;
  placeholder8?: string;
  placeholder9?: string;
  placeholder10?: string;
  placeholder11?: string;
  placeholder12?: string;
  placeholder13?: string;
  placeholder14?: string;
  placeholder15?: string;
  placeholder16?: string;
  placeholder17?: string;
  placeholder18?: string;
  placeholder19?: string;
  placeholder20?: string;
  placeholder21?: string;
  placeholder22?: string;
  placeholder23?: string;
  placeholder24?: string;
  placeholder25?: string;
  placeholder26?: string;
  placeholder27?: string;
  placeholder28?: string;
  placeholder29?: string;
  placeholder30?: string;
  placeholder31?: string;
  placeholder32?: string;
  placeholder33?: string;
  placeholder34?: string;
  placeholder35?: string;
  placeholder36?: string;
  placeholder37?: string;
  frame?: string;
  frame1?: string;
  totel?: string;
  socialPlatformsLogo?: string;
  socialPlatformsLogo1?: string;
  socialPlatformsLogo2?: string;

  /** Style props */
  propAlignSelf?: Property.AlignSelf;
  propDisplay?: Property.Display;
  propWidth?: Property.Width;
  propHeight?: Property.Height;
};

const Footer: NextPage<FooterType> = ({
  placeholder,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  placeholder6,
  placeholder7,
  placeholder8,
  placeholder9,
  placeholder10,
  placeholder11,
  placeholder12,
  placeholder13,
  placeholder14,
  placeholder15,
  placeholder16,
  placeholder17,
  placeholder18,
  placeholder19,
  placeholder20,
  placeholder21,
  placeholder22,
  placeholder23,
  placeholder24,
  placeholder25,
  placeholder26,
  placeholder27,
  placeholder28,
  placeholder29,
  placeholder30,
  placeholder31,
  placeholder32,
  placeholder33,
  placeholder34,
  placeholder35,
  placeholder36,
  placeholder37,
  frame,
  frame1,
  totel,
  socialPlatformsLogo,
  socialPlatformsLogo1,
  socialPlatformsLogo2,
  propAlignSelf,
  propDisplay,
  propWidth,
  propHeight,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      display: propDisplay,
      width: propWidth,
      height: propHeight,
    };
  }, [propAlignSelf, propDisplay, propWidth, propHeight]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.links}>
        <div className={styles.table}>
          <div className={styles.verticalContainer}>
            <div className={styles.footerLinks}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder}
              />
              <div className={styles.features}>Products</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder1}
              />
            </div>
            <div className={styles.textInput}>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder2}
                />
                <div className={styles.link}>Features</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder3}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder4}
                />
                <div className={styles.link}>Integrations</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder5}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder6}
                />
                <div className={styles.link}>Enterprise</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder7}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder8}
                />
                <div className={styles.link}>Solutions</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder9}
                />
              </div>
            </div>
          </div>
          <div className={styles.verticalContainer}>
            <div className={styles.footerLinks}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder10}
              />
              <div className={styles.features}>Products</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder11}
              />
            </div>
            <div className={styles.textInput}>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder12}
                />
                <div className={styles.link}>Features</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder13}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder14}
                />
                <div className={styles.link}>Integrations</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder15}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder16}
                />
                <div className={styles.link}>Enterprise</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder17}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder18}
                />
                <div className={styles.link}>Solutions</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder19}
                />
              </div>
            </div>
          </div>
          <div className={styles.verticalContainer}>
            <div className={styles.footerLinks}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder20}
              />
              <div className={styles.features}>Resources</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder21}
              />
            </div>
            <div className={styles.textInput}>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder22}
                />
                <div className={styles.link}>Partners</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder23}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder24}
                />
                <div className={styles.link}>Developers</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder25}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder26}
                />
                <div className={styles.link}>Community</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder27}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder28}
                />
                <div className={styles.link}>Apps</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder29}
                />
              </div>
            </div>
          </div>
          <div className={styles.verticalContainer}>
            <div className={styles.footerLinks}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder30}
              />
              <div className={styles.features}>Company</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder31}
              />
            </div>
            <div className={styles.textInput}>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder32}
                />
                <div className={styles.link}>About Us</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder33}
                />
              </div>
              <div className={styles.footerLinks}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder34}
                />
                <div className={styles.link}>Careers</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src={placeholder35}
                />
              </div>
            </div>
          </div>
          <div className={styles.verticalContainer}>
            <div className={styles.footerLinks}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder36}
              />
              <div className={styles.features}>Mobile app</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src={placeholder37}
              />
            </div>
            <div className={styles.verticalContainer5}>
              <img className={styles.frameIcon} alt="" src={frame} />
              <img className={styles.frameIcon1} alt="" src={frame1} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.companyLogo}>
            <div className={styles.companyLogo1}>
              <img className={styles.unionIcon} alt="" src="/union3.svg" />
              <img className={styles.totelIcon} alt="" src={totel} />
            </div>
          </div>
          <div className={styles.lookscoutAllRights}>
            © 2023 Totel. All Rights Reserved.
          </div>
          <div className={styles.socialIcons}>
            <img
              className={styles.socialPlatformsLogo}
              alt=""
              src="/social-platforms-logo.svg"
            />
            <img
              className={styles.socialPlatformsLogo}
              alt=""
              src={socialPlatformsLogo}
            />
            <img
              className={styles.socialPlatformsLogo}
              alt=""
              src={socialPlatformsLogo1}
            />
            <img
              className={styles.socialPlatformsLogo}
              alt=""
              src={socialPlatformsLogo2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
