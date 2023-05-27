import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./frame-component1.module.css";

type FrameComponent1Type = {
  rectangle2475?: string;

  /** Style props */
  propWidth?: Property.Width;
  propHeight?: Property.Height;
  proficientInDataAnalysisAWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propWidth3?: Property.Width;
  headlineSupportingTextWidth?: Property.Width;
  toAllRecruitmentAgenciesAWidth?: Property.Width;
  propWidth4?: Property.Width;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle2475,
  propWidth,
  propHeight,
  proficientInDataAnalysisAWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  headlineSupportingTextWidth,
  toAllRecruitmentAgenciesAWidth,
  propWidth4,
  propWidth5,
  propWidth6,
}) => {
  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      width: proficientInDataAnalysisAWidth,
    };
  }, [proficientInDataAnalysisAWidth]);

  const rectangleIcon1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const subtitleStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const subtitle1Style: CSS.Properties = useMemo(() => {
    return {
      width: headlineSupportingTextWidth,
    };
  }, [headlineSupportingTextWidth]);

  const subtitle2Style: CSS.Properties = useMemo(() => {
    return {
      width: toAllRecruitmentAgenciesAWidth,
    };
  }, [toAllRecruitmentAgenciesAWidth]);

  const subtitle3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const subtitle4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const subtitle5Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  return (
    <div className={styles.frameWrapper} style={frameDiv4Style}>
      <div className={styles.rectangleParent} style={frameDiv5Style}>
        <img
          className={styles.frameChild}
          alt=""
          src={rectangle2475}
          style={rectangleIcon1Style}
        />
        <div className={styles.frameParent} style={frameDiv6Style}>
          <div className={styles.blockHeaderParent}>
            <div className={styles.blockHeader}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText}>
                  <b className={styles.headline}>Job Description</b>
                </div>
              </div>
            </div>
            <div className={styles.postTravelContainer}>
              <p className={styles.postTravel}>Post : Travel Guide</p>
              <p className={styles.postTravel}>Time : Full Time / Part Time</p>
              <p className={styles.postTravel}>Salary : Negotiable</p>
              <p className={styles.postTravel}>No. Of Vacancy : 8</p>
            </div>
            <div className={styles.subtitle} style={subtitleStyle}>
              <p className={styles.postTravel}>
                Reprehenderit hic bibendum repellendus, repellat auctor! Integer
                temporibus, facilisis iaculis alias senectus, non quam molestiae
                incidunt cubilia, fuga? Quasi natoque dicta a fuga dapibus
                dolore molestie sociis erat, convallis quibusdam possimus semper
                nonummy mattis, quasi.
              </p>
              <p className={styles.postTravel}>
                Autem nec quaerat cubilia magnam eu mauris hic hac nisi eos
                nobis officiis corrupti consequuntur molestie urna volutpat!
                Quos diamlorem convallis vestibulum doloremque iste facilisi.
              </p>
              <p className={styles.postTravel}>
                Autem nec quaerat cubilia magnam eu mauris hic hac nisi eos
                nobis officiis corrupti consequuntur molestie urna volutpat!
                Quos diamlorem convallis vestibulum doloremque iste facilisi
                vallis vestibulum dol.
              </p>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.blockHeader1}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText1}>
                  <div className={styles.headline1}>Get to Know our Team</div>
                </div>
              </div>
            </div>
            <div className={styles.subtitle1} style={subtitle1Style}>
              Total is a travel booking platforms with accommodations at its
              core. As such our Key Account team is a key to our success, we
              work hard to ensure their success. The Key Accounts team invests
              in long-term relationships that spans borders and cultures and
              results in incredible value for Agoda, our partners, and our
              customers. We serve as consultants, offering strategic advice on
              how best to excel on Agoda’s commercial platform. We are direct
              contributors to what makes Agoda a market leader; we understand
              accommodation needs and offer innovative solutions. From Bangkok
              to New York and beyond, the Agoda team has footprints in over 50
              locations around the world. With the help of industry-leading
              technology, we work and collaborate globally to bring together the
              best ideas from diverse perspectives. The Key Accounts team
              invests in long-term relationships that spans borders and cultures
              and results in incredible value for Agoda, our partners, and our
              customers.
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.blockHeader1}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText1}>
                  <div className={styles.headline1}>The Opportunity</div>
                </div>
              </div>
            </div>
            <div
              className={styles.subtitle1}
              style={subtitle2Style}
            >{`This focus area for the Key Accounts organization intends to ensure that the client-facing roles are prepared and confident to engage at any point of interaction. Our team drives content strategy (including content development and L&D requirements for Key Accounts, programmatic interventions and training with the sole objective of affecting pipeline momentum, deal conversions and improving overall growth-generation process.`}</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.blockHeader1}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText1}>
                  <div className={styles.headline1}>
                    In this role, you’ll get to
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.subtitle3} style={subtitle3Style}>
              <ul className={styles.businessDevelopmentTeamCoac}>
                <li className={styles.businessDevelopmentTeam}>
                  Business Development Team Coaching
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Analyze strenghts and training needs of individual
                  contributors, and develop and implement business development
                  training programs to enhance Partner Solutions team
                  performance
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Own onboarding programs and learning content for Key Account
                  Partner Solutions Team
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Colaborate with GTM managers to develop necessary tools,
                  resources, and training to effectively consult partners,
                  including sales collateral, presentations, demos, and training
                  materials.
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Performance Tracking and Optimization: Monitoring and
                  analyzing the performance of the GTM strategy, measuring key
                  performance indicators (KPIs), and making data-driven
                  recommendations to optimize the GTM approach and achieve
                  business objectives.
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Launch Execution: Coordinating and executing product launches,
                  including marketing campaigns, events, and promotions to
                  generate awareness, demand, and participation.
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Standardization of Best Practices
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Standardize, socialize and implement Agoda’s growth-generation
                  process and practices
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Cross-pollinate best practices from top performers across the
                  Partner Services through industry-standard delivery formats
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Continuous Enablement
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Design pilots, programs and collaborate with regional teams
                  for targeted training and interventions
                </li>
                <li>{`Design & monitor metrics around various interventions from the team and leverage them for continuous evolution of the knowledge requirements`}</li>
              </ul>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.blockHeader1}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText1}>
                  <div className={styles.headline1}>
                    What you’ll Need to Succeed
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.subtitle3} style={subtitle4Style}>
              <ul className={styles.businessDevelopmentTeamCoac}>
                <li className={styles.businessDevelopmentTeam}>
                  6+ years of proven experience in impacting
                  enablement/effectiveness/productivity of client-facing roles
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Understand and implement the best practices for effective
                  learning and development outcomes
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Familiarity with e-learning platform, tools, train-the-trainer
                  programs
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Knowledge of account management and business development
                  activities
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Tech-oriented experiment and pilot enablement solutions
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Proficient in data analysis and pursuing fact-based decisions
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Proven experience in project management and effective
                  presentations
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Excellent cross-functional collaboration and communication
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Professional certification (e.g., CPLP, CPTD, APTD), and video
                  editing is a plus
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Experience with Workplace Learning and Bridge tools is an
                  advantage
                </li>
                <li className={styles.businessDevelopmentTeam}>
                  Knowledge of online travel industry / e-commerce business is
                  an advantage
                </li>
                <li>
                  Direct team management experience for 3+ years is an advantage
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.blockHeader1}>
              <div className={styles.textContainer}>
                <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
                <div className={styles.headlineSupportingText1}>
                  <div className={styles.headline1}>
                    Equal Opportunity Employer
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.subtitle1} style={subtitle5Style}>
              <p className={styles.postTravel}>
                At total, we pride ourselves on being a company represented by
                people of all different backgrounds and orientations. We
                prioritize attracting diverse talent and cultivating an
                inclusive environment that encourages collaboration and
                innovation. Employment at Agoda is based solely on a person’s
                merit and qualifications. We are committed to providing equal
                employment opportunity regardless of sex, age, race, color,
                national origin, religion, marital status, pregnancy, sexual
                orientation, gender identity, disability, citizenship, veteran
                or military status, and other legally protected characteristics.
              </p>
              <p className={styles.postTravel}>
                We will keep your application on file so that we can consider
                you for future vacancies and you can always ask to have your
                details removed from the file. For more details please read our
                Privacy Policy.
              </p>
              <p className={styles.postTravel}>
                To all recruitment agencies: Agoda does not accept third party
                resumes. Please do not send resumes to our jobs alias, Agoda
                employees or any other organization location. Agoda is not
                responsible for any fees related to unsolicited resumes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
