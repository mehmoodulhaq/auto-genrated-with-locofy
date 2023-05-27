import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import styles from "./index.module.css";
const Career: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/career-details");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/career-details");
  }, [router]);

  return (
    <div className={styles.career}>
      <Header
        totel="/totel4.svg"
        placeholder="/placeholder30.svg"
        placeholder1="/placeholder30.svg"
        placeholder2="/placeholder30.svg"
        placeholder3="/placeholder30.svg"
        placeholder4="/placeholder30.svg"
        placeholder5="/placeholder30.svg"
        chevronDown="/chevron-down1.svg"
        placeholder6="/placeholder30.svg"
        placeholder7="/placeholder30.svg"
        placeholder8="/placeholder31.svg"
        placeholder9="/placeholder31.svg"
        statusIcon="/status-icon1.svg"
        arrowRight="/arrow-right1.svg"
        icon="/icon4.svg"
        placeholder10="/placeholder32.svg"
        arrowRight1="/arrow-right1.svg"
        icon1="/icon5.svg"
        placeholder11="/placeholder33.svg"
        arrowRight2="/arrow-right2.svg"
        icon2="/icon6.svg"
        placeholder12="/placeholder32.svg"
        arrowRight3="/arrow-right1.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.companyLogoWrapper}>
          <div className={styles.companyLogo}>
            <img className={styles.unionIcon} alt="" src="/union2.svg" />
            <img className={styles.totelIcon} alt="" src="/totel6.svg" />
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.menuIcon} alt="" src="/menu2.svg" />
        </div>
      </div>
      <div className={styles.messContainer}>
        <div className={styles.buildYourSolidCareerParent}>
          <div className={styles.buildYourSolid}>Build Your Solid Career</div>
          <div className={styles.inThisStep}>
            In this step, we'll ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </div>
        </div>
      </div>
      <FrameComponent propDisplay="none" propWidth="26.25rem" />
      <FrameComponent5 />
      <div className={styles.frameGroup}>
        <FrameComponent4
          rectangle2475="/rectangle-24757@2x.png"
          placeholder="/placeholder4.svg"
          propWidth="20rem"
          propWidth1="20rem"
          propWidth2="20rem"
          propBackgroundColor="#574efa"
          onButtonClick={onButton1Click}
        />
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24758@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Full Time</div>
                <div className={styles.supervisor}>Supervisor</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder38.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder39.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24759@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Part Time</div>
                <div className={styles.supervisor}>Receptionist</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder38.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder39.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-247510@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.fullTimeParent}>
                <div className={styles.fullTime}>Full Time / Part Time</div>
                <div className={styles.supervisor}>Tech Operator</div>
              </div>
              <div className={styles.butHappyTo}>
                But happy to move in with more than that, I’m super easy going
                and tidy.
              </div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder40.svg"
              />
              <div className={styles.text}>Apply Now</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder41.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogPost}>
        <div className={styles.blockHeader}>
          <div className={styles.textContainer}>
            <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
            <div className={styles.headlineSupportingText}>
              <b className={styles.headline}>Why Join Us</b>
              <div className={styles.subtitle}>
                Real adventure and travels encompass engaging in thrilling and
                immersive experiences that take you beyond the ordinary and
                allow you to explore new places, cultures, and activities. Here
                are a few suggestions to embrace real adventure and travels:
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.unionWrapper}>
                <img className={styles.unionIcon1} alt="" src="/union4.svg" />
              </div>
              <b className={styles.goodSalary}>Good Salary</b>
            </div>
            <div className={styles.affordablePriceRefers}>
              Affordable price refers to a cost that is reasonably priced or
              within one's budgetary means. It typically implies a lower price
              compared to other alternatives in the market while still offering
              satisfactory quality or value for money.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.friendlyEnvironmentWrapper}>
                <b className={styles.goodSalary}>Friendly Environment</b>
              </div>
            </div>
            <div className={styles.affordablePriceRefers}>
              Affordable price refers to a cost that is reasonably priced or
              within one's budgetary means. It typically implies a lower price
              compared to other alternatives in the market while still offering
              satisfactory quality or value for money.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.vectorWrapper}>
                <img className={styles.unionIcon2} alt="" src="/union5.svg" />
              </div>
              <div className={styles.friendlyEnvironmentWrapper}>
                <b className={styles.goodSalary}>Career Develop</b>
              </div>
            </div>
            <div className={styles.affordablePriceRefers}>
              Affordable price refers to a cost that is reasonably priced or
              within one's budgetary means. It typically implies a lower price
              compared to other alternatives in the market while still offering
              satisfactory quality or value for money.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.careerInner}>
        <div className={styles.blockHeaderParent}>
          <div className={styles.blockHeader1}>
            <div className={styles.textContainer1}>
              <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
              <div className={styles.headlineSupportingText1}>
                <b className={styles.headline}>Why Join Us</b>
                <div className={styles.subtitle1}>
                  Real adventure and travels encompass engaging in thrilling and
                  immersive experiences that take you beyond the ordinary and
                  allow you to explore new places, cultures, and activities.
                  Here are a few suggestions to embrace real adventure and
                  travels:
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.frameParent13}>
              <div className={styles.frameParent7}>
                <div className={styles.unionWrapper}>
                  <img className={styles.unionIcon1} alt="" src="/union4.svg" />
                </div>
                <b className={styles.goodSalary}>Good Salary</b>
              </div>
              <div className={styles.affordablePriceRefers3}>
                Affordable price refers to a cost that is reasonably priced or
                within one's budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
            <div className={styles.frameParent13}>
              <div className={styles.frameParent7}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className={styles.friendlyEnvironmentWrapper}>
                  <b className={styles.goodSalary}>Friendly Environment</b>
                </div>
              </div>
              <div className={styles.affordablePriceRefers3}>
                Affordable price refers to a cost that is reasonably priced or
                within one's budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
            <div className={styles.frameParent13}>
              <div className={styles.frameParent7}>
                <div className={styles.vectorWrapper}>
                  <img className={styles.unionIcon2} alt="" src="/union7.svg" />
                </div>
                <div className={styles.friendlyEnvironmentWrapper}>
                  <b className={styles.goodSalary}>Career Develop</b>
                </div>
              </div>
              <div className={styles.affordablePriceRefers3}>
                Affordable price refers to a cost that is reasonably priced or
                within one's budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction
        placeholder="/placeholder4.svg"
        placeholder1="/placeholder4.svg"
      />
      <Footer
        placeholder="/placeholder42.svg"
        placeholder1="/placeholder42.svg"
        placeholder2="/placeholder43.svg"
        placeholder3="/placeholder43.svg"
        placeholder4="/placeholder43.svg"
        placeholder5="/placeholder43.svg"
        placeholder6="/placeholder43.svg"
        placeholder7="/placeholder43.svg"
        placeholder8="/placeholder43.svg"
        placeholder9="/placeholder43.svg"
        placeholder10="/placeholder44.svg"
        placeholder11="/placeholder44.svg"
        placeholder12="/placeholder45.svg"
        placeholder13="/placeholder45.svg"
        placeholder14="/placeholder45.svg"
        placeholder15="/placeholder45.svg"
        placeholder16="/placeholder45.svg"
        placeholder17="/placeholder45.svg"
        placeholder18="/placeholder45.svg"
        placeholder19="/placeholder45.svg"
        placeholder20="/placeholder46.svg"
        placeholder21="/placeholder47.svg"
        placeholder22="/placeholder48.svg"
        placeholder23="/placeholder49.svg"
        placeholder24="/placeholder48.svg"
        placeholder25="/placeholder49.svg"
        placeholder26="/placeholder48.svg"
        placeholder27="/placeholder49.svg"
        placeholder28="/placeholder48.svg"
        placeholder29="/placeholder49.svg"
        placeholder30="/placeholder50.svg"
        placeholder31="/placeholder50.svg"
        placeholder32="/placeholder51.svg"
        placeholder33="/placeholder51.svg"
        placeholder34="/placeholder51.svg"
        placeholder35="/placeholder51.svg"
        placeholder36="/placeholder52.svg"
        placeholder37="/placeholder52.svg"
        frame="/frame6.svg"
        frame1="/frame7.svg"
        totel="/totel7.svg"
        socialPlatformsLogo="/social-platforms-logo7.svg"
        socialPlatformsLogo1="/social-platforms-logo8.svg"
        socialPlatformsLogo2="/social-platforms-logo6.svg"
        propAlignSelf="stretch"
        propDisplay="flex"
        propWidth="unset"
        propHeight="unset"
      />
      <div className={styles.careerChild}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent19}>
            <div className={styles.tableWrapper}>
              <div className={styles.table}>
                <div className={styles.verticalContainer}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder61.svg"
                    />
                    <div className={styles.features}>Products</div>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder42.svg"
                    />
                  </div>
                  <div className={styles.textInput}>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Features</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Integrations</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Enterprise</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Solutions</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalContainer2}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder61.svg"
                    />
                    <div className={styles.features}>Products</div>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder42.svg"
                    />
                  </div>
                  <div className={styles.verticalContainer3}>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Features</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Integrations</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Enterprise</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Solutions</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder61.svg"
                    />
                    <div className={styles.features}>Resources</div>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder42.svg"
                    />
                  </div>
                  <div className={styles.textInput}>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Partners</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Developers</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Community</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Apps</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card2}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder61.svg"
                    />
                    <div className={styles.features}>Company</div>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder42.svg"
                    />
                  </div>
                  <div className={styles.textInput}>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>About Us</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                    <div className={styles.footerLinks}>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder62.svg"
                      />
                      <div className={styles.link}>Careers</div>
                      <img
                        className={styles.placeholderIcon6}
                        alt=""
                        src="/placeholder43.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder61.svg"
                    />
                    <div className={styles.features}>Mobile app</div>
                    <img
                      className={styles.placeholderIcon6}
                      alt=""
                      src="/placeholder42.svg"
                    />
                  </div>
                  <div className={styles.verticalContainer5}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame4.svg"
                    />
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.companyLogo1}>
                <div className={styles.companyLogo2}>
                  <img className={styles.unionIcon5} alt="" src="/union3.svg" />
                  <img className={styles.totelIcon} alt="" src="/totel7.svg" />
                </div>
              </div>
              <div className={styles.totelAllRights}>
                © 2023 Totel. All Rights Reserved.
              </div>
              <div className={styles.socialIcons}>
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo1.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo10.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
