import React from "react";
import styles from "./InstitutionalMechanismsContent.module.css";
import { SectionHeadingBox } from "../programme";
const InstitutionalMechanismsContent = () => {
  return (
    <div className={styles["content-section"]}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default InstitutionalMechanismsContent;

const Section1 = () => (
  <section id="link-1">
    <SectionHeadingBox
      locationText="1st Institutional Mechanism out of 6"
      headingText="Intra-Ministerial Coordination"
    />

    <div className={styles["section-content"]}>
      <p>
        At the national level, the existing Rashtriya Kishor Swasthya Karyakram
        (RKSK) National Steering Committee will be expanded to include the
        National Anemia Mukt Bharat Steering Committee.
      </p>
      <p>
        The Steering Committee will have biannual convergent meetings in
        coordination with the respective divisions within MoHFW associated with
        the strategy chaired by the Secretary, Ministry of Health and Family
        Welfare, with invitation to other related Ministries such as Tribal
        Welfare (residential schools), Ministry of Woman and Child Development
        (POSHAN Abhiyaan), Ministry of Rural Development and Panchayati Raj
        (NRLM) and MHRD (Department of School Education and Literacy)and other
        experts as approved by the chair.
      </p>
      <p>
        The composition of the Steering Committee will be:
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Secretary, MoHFW</th>
              <th>Chairperson</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Additional Secretary and Mission Director, MoHFW</td>
              <td>Co-Chair</td>
            </tr>
            <tr>
              <td>Joint Secretary (RMNCH+A) (RCH), MoHFW</td>
              <td>Convener</td>
            </tr>
            <tr>
              <td>DC (CH) (MoHFW)</td>
              <td>Co-Convener</td>
            </tr>
            <tr>
              <td>
                Representative from All India Institute of Medical Sciences
                (AIIMS) (NCEAR-A)
              </td>
              <td>Co-Convener</td>
            </tr>
            <tr>
              <td>
                Secretaries of Line Ministries (MoWCD, MoHRD, MoDWS, MoRD, MoPR
                and MoTA)
              </td>
              <td>Member</td>
            </tr>
            <tr>
              <td>
                Three to four technical experts as agreed by the committee, to
                be called as per the agenda and need of each meeting
              </td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  </section>
);

const Section2 = () => (
  <section id="link-2">
    <SectionHeadingBox
      locationText="2nd Institutional Mechanism out of 6"
      headingText="National Anemia Mukt Bharat Unit"
    />
    <div className={styles["section-content"]}>
      <p>
        A National Unit will be established to support and monitor states for
        strategy implementation. The unit will monitor and anchor the strategy
        under the leadership of Joint Secretary (RMNCH+A) with techno-managerial
        support through a DC (CH) from Reproductive and Child Health (RCH)
        division.
      </p>
      <p>
        The State/UT should establish a state unit and designate a nodal
        officer. The State Unit will ensure accountability and effective
        implementation of the strategy.
      </p>

      <p>
        At the district level, under the supervision of the CMO/CDHO, the
        District Programme Officer under the National Health Mission will be
        in-charge of the day-to-day implementation of this strategy and the
        BMO/BHO will be the nodal officer at the block level.
      </p>
    </div>
  </section>
);

const Section3 = () => (
  <section id="link-3">
    <SectionHeadingBox
      locationText="3rd Institutional Mechanism out of 6"
      headingText="National Centre of Excellence and Advanced Research on Anemia Control (NCEAR-A)"
    />

    <div className={styles["section-content"]}>
      <p>
        All India Institute of Medical Sciences (Centre for Community Medicine),
        New Delhi, will house the NCEAR-A. The Centre will provide the following
        support to MoHFW:
      </p>
      <p>
        <ul>
          <li>
            Provide technical inputs with focus on multi-sectoral approach for
            policy making, programme guidelines and programme implementation for
            anemia control programme in India.
          </li>
          <li>
            Address research needs including operational research for anemia
            control in India.
          </li>
          <li>
            Act as an apex reference laboratory for anemia screening and
            diagnosis at the national level.
          </li>
          <li>
            Facilitate periodic programme review and capacity building of anemia
            control programme personnel and state-level institutes to strengthen
            programme implementation including revising training components for
            service providers and programme managers, teachers, ASHA and ANMs,
            and AWWs respectively with NCERT/DIET, SIHFW, NHSRC, and NIPCCD.
          </li>
          <li>
            Support supply chain monitoring and develop protocols/modules for
            improvement, including technical specifi cations.
          </li>
          <li>
            Support periodic rapid assessments, implementation science research
            and external evaluations related to Anemia Mukt Bharat.
          </li>
        </ul>
      </p>
      <p>
        At the state level, All India Institute of Medical Sciences (Centre for
        Community Medicine/Medical College/Nutrition College), can be designated
        as State Centre for Excellence and Advanced Research for Anemia Control
        (SCEAR-A).
      </p>
      <p>
        SCEAR-A can help in trainings, monitoring and acting as the apex
        reference laboratory for anemia screening and diagnosis at the state
        level.
      </p>
    </div>
  </section>
);

const Section4 = () => (
  <section id="link-4">
    <SectionHeadingBox
      locationText="4th Institutional Mechanism out of 6"
      headingText="Convergence with other Ministries"
    />
    <div className={styles["section-content"]}>
      <p>
        Inter-ministerial convergence under the strategy will be ensured via
        existing convergence platform under the POSHAN Abhiyaan. One of the
        targets under POSHAN Abhiyaan is 'anemia reduction by 3 percent per
        annum'.
      </p>
      <p>
        An Executive Committee under the Chairpersonship of Secretary, MoWCD,
        has been established via Government of India Letter No. NNM/50/2017-WBP8
        dated 3 January 2018, wherein the Secretary, MoHFW, is a member.
        Therefore, all issues related to Anemia Mukt Bharat for which
        inter-ministerial convergence is needed should be discussed during this
        committee meeting.
      </p>
      <p>
        Similarly, State Executive Committee of POSHAN Abhiyaan should be
        Executive Committee of Anemia Mukt Bharat strategy.
      </p>
    </div>
  </section>
);

const Section5 = () => (
  <section id="link-5">
    <SectionHeadingBox
      locationText="5th Institutional Mechanism out of 6"
      headingText="Strengthening Supply Chain and Logistics"
    />
    <div className={styles["section-content"]}>
      <p>
        The strategy plans to build upon the learning of implementing the
        National Iron Plus Initiative and Weekly Iron Folic Supplementation
        programmes and focuses on strengthening the procurement and supply chain
        mechanisms as these are key to effective implementation of these
        programmes. Therefore, special emphasis is suggested for streamlining
        the supply chain mechanisms.
      </p>

      <p>
        To ensure uninterrupted supplies, states may consider:
        <ol type="a">
          <li>Introducing auto-indents at the district level</li>
          <li>
            Provision for multi-year rate contracts (RC) and multi-vendor policy
          </li>
          <li>
            Centralized procurement at the state level instead of district level
            procurement
          </li>
          <li>
            Iron Folic Acid supplements and albendazole tablets included as part
            of the Essential Drug List (EDL).
          </li>
        </ol>
      </p>

      <p>
        The State will strengthen convergence with the Central Drug Warehouses
        and periodic verification and audit of the supply chain at all levels.
        The stock positions of IFA supplements and albendazole tablets will also
        be monitored as part of programme monitoring and therefore states should
        ensure timely programme service delivery and stock position data entry
        into HMIS and Drugs and Vaccines Distribution System (DVDMS)/e-aushadi,
        for monitoring real-time stock availability.
      </p>
      <p>
        The annual requirement for prophylactic Iron Folic Acid supplements and
        albendazole tablets will be estimated as per Annexures 6 and 7.
      </p>
    </div>
  </section>
);

const Section6 = () => (
  <section id="link-6">
    <SectionHeadingBox
      locationText="6th Institutional Mechanism out of 6"
      headingText="Anemia Mukt Bharat Dashboard and Digital Portal - One-Stop Shop on Anemia"
    />
    <div className={styles["section-content"]}>
      <p>
        The Anemia Mukt Bharat portal (www.anemiamuktbharat.info) is a one-stop
        shop of materials developed under the Anemia Mukt Bharat strategy in one
        place, such as communication resource material, survey data, targets,
        state and district-wise denominators, and state and district-wise
        quarterly progress reports.
      </p>
      <p>
        All of these resources can be efficiently utilized by policy makers,
        programme managers and medical corporation/procurement agencies for
        planning, implementing and monitoring the strategy. Its free
        download-able mobile application is also available.
      </p>
    </div>
  </section>
);
