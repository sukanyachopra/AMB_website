import React from "react";
import styles from "./InterventionsContent.module.css";
import { SectionHeadingBox } from "../programme";
const InterventionsContent = () => {
  return (
    <div className={styles["content-section"]}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div className={styles["bottom-links-container"]}>
        <p>
          <ul>
            <li>
              Pradhan Mantri Surakshit Matritva Abhiyan -{" "}
              <a href="https://pmsma.nhp.gov.in">https://pmsma.nhp.gov.in</a>
            </li>
            <li>
              National Guidelines on Prevention and Control of
              Haemoglobinopathies (2016) -{" "}
              <a href="http://nhm.gov.in/images/pdf/programmes/RBSK/Resource_Documents/Guidelines_on_Hemoglobinopathies_in%20India.pdf">
                http://nhm.gov.in/images/pdf/programmes/RBSK/Resource_Documents/Guidelines_on_Hemoglobinopathies_in%20India.pdf
              </a>
            </li>
            <li>
              National Guidelines on Fluorosis Management (2014) -{" "}
              <a href="https://MoHFW.gov.in/sites/default/files/569857456332145987456.pdf">
                https://MoHFW.gov.in/sites/default/files/569857456332145987456.pdf
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

const Section1 = () => (
  <section id="link-1">
    <SectionHeadingBox
      className="section-heading"
      locationText="1st Institutional Mechanism out of 6"
      headingText="Prophylactic Iron and Folic Acid supplementation"
    />

    <div className={styles["section-content"]}>
      <p>
        A key intervention is to give IFA to children, adolescents and women of
        reproductive age and pregnant women irrespective of anemia, under Anemia
        Mukt Bharat.
      </p>
      <p>
        The below table delineates the dose and regime of Iron Folic Acid
        supplementation to be followed.
      </p>
      <p>
        <div className={styles["content-highlight-text"]}>
          Prophylactic dose and regime for Iron Folic Acid supplementation
        </div>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Age group</th>
              <th>Dose and regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Children 6-59 months of age</th>
              <td>
                Bi-weekly 1ml Iron and Folic Acid syrup. Each ml Iron and Folic
                Acid syrup containing 20 mg elemental Iron + 100 mcg of Folic
                Acid. Bottle (50ml) to have an 'auto-dispenser' and information
                leaflet as per MoHFW guidelines in the mono-carton
              </td>
            </tr>
            <tr>
              <th scope="row">Children 5-9 years of age</th>
              <td>
                Weekly, 1 Iron and Folic Acid tablet. Each tablet containing 45
                mg elemental Iron + 400 mcg Folic Acid, sugar-coated,
                pink-colour.
              </td>
            </tr>
            <tr>
              <th scope="row">
                School-going Adolescent Girls and Boys, 10-19 years of age
                Out-of-school Adolescent Girls, 10-19 years of age
              </th>
              <td>
                Women of Reproductive Age (non-pregnant, non-lactating) 20-49
                years (Under Mission Parivar Vikas)
              </td>
            </tr>
            <tr>
              <th scope="row">
                Women of Reproductive Age (non-pregnant, non-lactating) 20-49
                years
              </th>
              <td>
                Weekly, 1 Iron and Folic Acid tablet. Each tablet containing 60
                mg elemental Iron + 500 mcg Folic Acid, sugar-coated and
                red-colour.
              </td>
            </tr>
            <tr>
              <th scope="row">
                Pregnant Women and Lactating Mothers (of 0-6 months child)
              </th>
              <td>
                Daily, 1 Iron and Folic Acid tablet starting from the fourth
                month of pregnancy (that is from the second trimester),
                continued throughout pregnancy (minimum 180 days during
                pregnancy) and to be continued for 180 days, post-partum Each
                tablet containing 60 mg elemental Iron + 500 mcg Folic Acid,
                sugar-coated and red-colour.
              </td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <h6>Note 1:</h6>
        Prophylaxis with iron should be withheld in case of acute illness
        (fever, diarrhoea, pneumonia, etc.), and in a known case of thalassemia
        major/history of repeated blood transfusion. In case of SAM children,
        IFA supplementation should be continued as per SAM management protocol.
      </p>
      <p>
        <h6>Note 2:</h6>
        All women in the reproductive age group in the pre-conception period and
        up to the first trimester of the pregnancy are advised to have 400 mcg
        of Folic Acid tablets, daily, to reduce the incidence of neural tube
        defects in the foetus.
      </p>
    </div>
  </section>
);
const Section2 = () => (
  <section id="link-2">
    <SectionHeadingBox
      className="section-heading"
      locationText="2nd Institutional Mechanism out of 6"
      headingText="Deworming"
    />
    <div className={styles["section-content"]}>
      <p>
        Bi-annual mass deworming for children in the age groups between 1-19
        years is carried out on designated dates - 10th February and 10th August
        every year under National Deworming Day (NDD) programme. The Anemia Mukt
        Bharat, also integrates deworming of women of reproductive age and for
        pregnant women as part of the NDD strategy.
      </p>
      <p>
        The below table reiterates the deworming dose and regime to be followed
        <div className={styles["content-highlight-text"]}>
          Dose and regime for deworming
        </div>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Age group</th>
              <th>Deworming</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Children 6-59 months of age</th>
              <td>
                Biannual dose of 400 mg Albendazole (½ tablet to children 12-24
                months and 1 tablet to children 24-59 months).
              </td>
            </tr>
            <tr>
              <th scope="row">Children 5-9 years of age</th>
              <td>Biannual dose of 400 mg Albendazole (1 tablet).</td>
            </tr>
            <tr>
              <th scope="row">
                School-going Adolescent Girls and Boys, 10-19 years of age
                Out-of-school Adolescent Girls, 10-19 years of age
              </th>
              <td>Biannual dose of 400 mg Albendazole (1 tablet).</td>
            </tr>
            <tr>
              <th scope="row">
                Women of Reproductive Age (non-pregnant, non-lactating) 20-49
                years
              </th>
              <td>Biannual dose of 400 mg Albendazole (1 tablet).</td>
            </tr>
            <tr>
              <th scope="row">
                Pregnant Women and Lactating Mothers (0-6 months)
              </th>
              <td>
                One dose of 400 mg Albendazole (1 tablet), after the first
                trimester, preferably during the second trimester.
              </td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  </section>
);
const Section3 = () => (
  <section id="link-3">
    <SectionHeadingBox
      className="section-heading"
      locationText="3rd Institutional Mechanism out of 6"
      headingText="Intensified year-round Behaviour Change Communication Campaign (Solid Body, Smart Mind) including ensuring delayed cord clamping in newborns"
    />
    <div className={styles["section-content"]}>
      <p>
        There is sufficient evidence that repeated engagement using consistent
        key messaging is required for any behaviour to change, or to initiate
        new behaviour so that it becomes a practice. The various behaviour
        change communication activities of the strategy will address four key
        behaviours:
      </p>
      <p>
        <ol>
          <li>Compliance to Iron Folic Acid supplements and deworming</li>
          <li>
            Appropriate Infant and Young Child Feeding (IYCF) with emphasis on
            adequate and age-appropriate complementary foods for children 6
            months and above
          </li>
          <li>
            Increase intake of iron-rich, protein-rich and vitamin C-rich foods
            through dietary diversification/quantity/frequency and food
            fortification
          </li>
          <li>
            Promoting practice of delayed cord clamping (by atleast 3 minutes or
            until cord pulsations cease) in all health facility deliveries
            followed by early initiation of breastfeeding within 1 hour of birth
          </li>
          Various activities prepared for behaviour change include sensitization
          meetings for the media, school teachers and administration, faith
          leaders, panchayat leaders, Village Health Sanitation and Nutrition
          Committee (VHSNC), etc.
        </ol>
      </p>

      <p>
        Year-round broadcast of messages for 'Anemia Mukt Bharat' should be
        carried out through mass media and social media (Whatsapp and Twitter).
      </p>
      <p>
        For community- and school-level communication, morning assemblies at
        schools will be utilized to discuss 'nutrition and anemia'. Youth
        festivals organized at school platform will also be utilized to generate
        discussions and dialogue on anemia and nutrition. Monthly meeting of
        ASHA and mothers' group will also be held at the existing platforms such
        as monthly Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) sites,
        monthly meetings as planned under Mother's Absolute Affection (MAA)
        programme, weekly Self Help Groups (SHGs) meeting under the State Rural
        Livelihood Mission (Maitri Baithaks), etc.
      </p>
      <p>
        Special press advertisements on occasions such as National Nutrition
        Week, National Deworming Day, Women's Day, World's Breastfeeding Week,
        and World Health Day including engagements with celebrities (local,
        national and international) will be used to amplify the communication
        strategy.
      </p>
      <p>
        A comprehensive communication package for the strategy is available for
        use by the States which may be adapted as per requirement. These can be
        downloaded from the Anemia Mukt Bharat portal: www.anemiamuktbharat.info
      </p>
      <p>
        States can develop appropriate behaviour change communication plans
        through a range of communication channels such as using mass media
        through mobile phones, out-bound calls or text messages and interactive
        voice response system (IVRS), etc. as a need-based communication
        strategy.
      </p>
      <p>
        Promotion and monitoring of delayed clamping of the umbilical cord for
        at least 3 minutes (or until cord pulsations cease) for newborns across
        all health facilities will be carried out for improving the infant's
        iron reserves up to 6 months after birth. Simultaneously, all birth
        attendants should make an effort to ensure early initiation of
        breastfeeding within 1 hour of birth.
      </p>
    </div>
  </section>
);
const Section4 = () => (
  <section id="link-4">
    <SectionHeadingBox
      className="section-heading"
      locationText="4th Institutional Mechanism out of 6"
      headingText="Testing of anemia using digital methods and point of care treatment"
    />
    <div className={styles["section-content"]}>
      <p>
        Screening and testing of anemia is important in all age groups so that
        appropriate treatment may be initiated as per the haemoglobin level of
        the individual. The current method of haemoglobin estimation in the
        field uses SAHLI's method, which needs to be replaced with newer
        advanced technologies for the available haemoglobin estimation.
      </p>
      <p>
        <div className={styles["content-highlight-text"]}>
          Therapeutic Management of Anemia
        </div>
        <div className={styles["content-highlight-text"]}>
          ANEMIA MANAGEMENT PROTOCOL FOR CHILDREN
        </div>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Target group A</th>
              <th>Children 6-59 months</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Who will screen and place of screening</th>
              <td>
                ANM: VHND/sub-centre/session site RSBK team: AWC/school Medical
                Officer: health facility
              </td>
            </tr>
            <tr>
              <th scope="row">Periodicity</th>
              <td>
                <ul>
                  <li>RBSK/ANM: as per scheduled microplan</li>
                  <li>MO: opportunistic</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is 7-10.9 g/dl (mild and moderate anemia)
              </th>
            </tr>
            <tr>
              <th scope="row">
                First level of treatment (at all levels of care)
              </th>
              <td>
                3 mg of iron/kg/day for 2 months
                <ul>
                  <li>
                    For children 6-12 months (6-10.9 kg): 1 ml IFA syrup, once a
                    day
                  </li>
                  <li>
                    For children 1-3 years (11-14.9 kg): 1.5 ml IFA syrup, once
                    a day
                  </li>
                  <li>
                    For children 3-5 years (15-19.9 kg): 2 ml IFA syrup, once a
                    day
                  </li>
                </ul>
                Line listing for all anemic children to be maintained by the
                ANM/ ASHA/ AWW
              </td>
            </tr>
            <tr>
              <th scope="row">Follow-up</th>
              <td>
                <ul>
                  <li>Every month by ANM at VHND</li>
                  <li>
                    Hb estimation after 2 months for completing 2 months of
                    treatment to document Hb {">="} 11g/dl
                  </li>
                  <li>
                    Monitoring by ASHA for compliance of IFA syrup every 14 days
                    for a period of 2 months
                  </li>
                </ul>
                If haemoglobin levels have improved to normal level, discontinue
                the treatment, but continue with the prophylactic IFA dose
              </td>
            </tr>

            <tr>
              <th scope="row">
                If no improvement after first level of treatment
              </th>
              <td>
                In case the child has not responded to the treatment of anemia
                with daily dose of iron for 2 months, refer the child to the
                FRU/DH medical offi cer/paediatrician/physician for further
                investigation
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is {"<"}7 g/dl (severe anemia)
              </th>
            </tr>

            <tr>
              <th scope="row">Treatment</th>
              <td>
                <ul>
                  <li>
                    Refer urgently to District Hospital/First Referral Unit
                  </li>
                  <li>
                    Management of severe anemia in children of 6-59 months is to
                    be done by the medical offi cer at the First Referral
                    Unit/District Hospital based on investigation
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Target group B</th>
              <td>Children 5-9 years</td>
            </tr>

            <tr>
              <th scope="row">Who will screen and place of screening</th>
              <td>
                RSBK teams will screen in-school and out-of-school children for
                anemia. All children with clinical signs and symptoms of anemia
                will be referred to SC/PHC for Hb estimation and further
                management
              </td>
            </tr>

            <tr>
              <th scope="row">Periodicity</th>
              <td>
                <ul>
                  <li>Once a year</li>
                  <li>
                    Opportunistic screening, e.g., routine Hb assessment of sick
                    children presented to health facility
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is 8-11.4 g/dl (mild and moderate anemia)
              </th>
            </tr>
            <tr>
              <th>First level of treatment (at all levels of care)</th>
              <td>
                3 mg of iron/kg/day for 2 months Line listing of all anemic
                cases to be maintained in the school register for Iron Folic
                Acid supplementation and given to the ANM/LHV/Multiple Purpose
                Health Worker for designated area
              </td>
            </tr>
            <tr>
              <th scope="row"> Follow-up</th>
              <td>
                <ul>
                  <li>
                    Class teacher/ Nodal teacher at school to orient parents
                    during Parent Teacher Meeting (PTM) for compliance of
                    treatment
                  </li>
                  <li>
                    Parents to ensure follow-up of child after 30 days and 60
                    days at nearest SC/health facility
                  </li>
                  <li>
                    Follow-up by ANM/LHV/MPW of designated area, as feasible.
                  </li>
                  <li>
                    Hb estimation after completing 2 months of treatment to
                    document Hb{">="}11.5 g/dl
                  </li>
                  <li>
                    If haemoglobin levels have improved to normal level,
                    discontinue the treatment, but continue with the
                    prophylactic IFA dose
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">
                If no improvement after first level of treatment
              </th>
              <td>
                In case the child has not responded to the treatment of anemia
                with daily dose of iron for 2 months, refer the child to the
                FRU/DH medical offi cer/paediatrician/physician for further
                investigation
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is {"<"}8 g/dl (severe anemia)
              </th>
            </tr>
            <tr>
              <th scope="row">Treatment</th>
              <td>
                <ul>
                  <li>
                    Refer urgently to District Hospital/First Referral Unit
                  </li>
                  <li>
                    Management of severe anemia in children of 5-9 years is to
                    be done by the medical offi cer at the First Referral
                    Unit/District Hospital based on investigation
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        The strategy thus proposes the use of digital haemoglobinometers for
        haemoglobin level estimations (specifi cations at Annexure 4) in two
        benefi ciaries groups namely;
      </p>
      <p>
        <ol type="a">
          <li>
            adolescent girls and boys 10-19 years, in government and
            government-aided schools
          </li>
          <li>
            pregnant women registered for antenatal check-ups. This may be
            extended to all age groups later.
          </li>
        </ol>
      </p>
      <p>
        In-school adolescents will be screened by the Rashtriya Bal Swasthya
        Karyakram (RBSK) mobile teams using digital haemoglobinometers.
      </p>
      <p>
        Schools should plan to sensitize the students and parents during Parent
        Teacher Meetings, about the planned health check-up by the RBSK teams,
        test and treat strategy for anemia and importance of diagnosis and
        control of anemia in adolescents for improvement in health and overall
        performance at schools. If needed, private schools should opt for
        informed consent of parents for Hb testing of adolescents.
      </p>
      <p>
        After the visit of RBSK team and screening of adolescents, a line list
        of identifi ed anemic adolescents prepared by RBSK teams will be shared
        with Nodal teacher/class teacher, so that the school can inform the
        parents as well as the nearby Sub-Centre/Primary Health Centre/Health
        and Wellness Centre for treatment, followup and dietary counselling.
        Parents should be counselled on the importance of compliance to
        treatment and regular followup along and adhere to the dosage regime, as
        well as Dos and Don’ts as advised by the medical offi cer/nurse/ANM.
      </p>
      <p>
        Testing of anemia in pregnant women will be done using digital
        haemoglobinometers at all ANC contact points. At all high case load
        facilities at the block level and above, haemoglobin level estimation
        will be done using Semi-Auto Analyzers.
      </p>

      <p>
        <div className={styles["content-highlight-text"]}>
          ANEMIA MANAGEMENT PROTOCOL FOR ADOLESCENTS
        </div>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Target Group</th>
              <th>
                All school-going adolescents 10-19 years in
                government/government-aided schools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Who will screen and place of screening</th>
              <td>In school premises by RSBK team</td>
            </tr>
            <tr>
              <th>Periodicity</th>
              <td>Annually</td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                Mild and Moderate Anemia (Hb cut-off as per Table 1)
              </th>
            </tr>
            <tr>
              <th scope="row">
                First level of treatment (at all levels of care)
              </th>
              <td>
                Two IFA tablets (each with 60 mg elemental iron and 500 mcg
                folic acid), once daily, for 3 months, orally after meals.
              </td>
            </tr>
            <tr>
              <th scope="row">Follow-up</th>
              <td>
                <ul>
                  <li>
                    Line listing of all anemic cases to be maintained in the
                    school register for Iron Folic Acid supplementation and
                    given to the ANM/LHV/MPHW of designated area
                  </li>
                  <li>
                    Follow-up by ANM/LHV/MPHW of designated area, as feasible
                    for the state
                  </li>
                  <li>
                    Parents to ensure follow-up of adolescent after 45 days to
                    90 days at the nearest sub-centre/ health facility
                  </li>
                  <li>
                    If haemoglobin levels have improved to normal level,
                    discontinue the treatment, but continue with the
                    prophylactic IFA dose
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">
                If no improvement after first level of treatment
              </th>
              <td>
                If no improvement after three months of treatment (i.e., still
                in mild/moderate category), ANM/MO of nearest facility to refer
                adolescent to First Referral Unit (FRU)/District Hospital (DH)
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is {"<"}8 g/dl (severe anemia)
              </th>
            </tr>

            <tr>
              <th scope="row">First dose of treatment</th>
              <td>
                Management of severe anemia in adolescents 10-19 years is to be
                done by the medical offi cer at FRU/DH based on investigation
                and subsequent diagnosis
              </td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <div className={styles["content-highlight-text"]}>
          ANEMIA MANAGEMENT PROTOCOL FOR PREGNANT WOMEN
        </div>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Target Group</th>
              <th>Pregnant women registered for antenatal care</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Who will screen and place of screening</th>
              <td>
                Health service provider at any ANC contact, including Pradhan
                Mantri Surakshit Matritva Abhiyan (PMSMA)5
              </td>
            </tr>

            <tr>
              <th scope="row">Periodicity</th>
              <td>At every ANC contact</td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is 10-10.9 g/dl (mild anemia)
              </th>
            </tr>

            <tr>
              <th scope="row">
                First level of treatment (at all levels of care)
              </th>
              <td>
                <ul>
                  <li>
                    Two tablets of Iron and Folic Acid tablet (60 mg elemental
                    Iron and 500 mcg Folic Acid) daily, orally given by the
                    health provider during the ANC contact
                  </li>
                  <li>
                    Parental iron (IV Iron Sucrose or Ferric Carboxy Maltose
                    (FCM) may be considered as the fi rst line of management in
                    pregnant women who are detected to be anemic late in
                    pregnancy or in whom compliance is likely to be low (high
                    chance of lost to follow-up)
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Follow-up</th>
              <td>
                <ul>
                  <li>
                    Every 2 months for compliance of treatment by health
                    provider during the contact
                  </li>
                  <li>
                    If haemoglobin levels have come up to normal level,
                    discontinue the treatment and continue with the prophylactic
                    IFA dose
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">
                If no improvement after first level of treatment
              </th>
              <td>
                <ul>
                  <li>
                    If no improvement in haemoglobin ({"<"}1 g/dl increase)
                    after one month of treatment, refer to First Referral Unit
                    (FRU)/District Hospital (DH) by health provider
                  </li>
                  <li>
                    The case to be referred to FRU/DH for further investigations
                    for cause of anemia and may be managed with IV Iron
                    Sucrose/FCM
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is 7-9.9 g/dl (moderate anemia)
              </th>
            </tr>
            <tr>
              <th scope="row">
                First level of treatment (at all levels of care)
              </th>
              <td>
                Two tablets of Iron and Folic Acid tablet (60 mg elemental Iron
                and 500 mcg Folic Acid) daily, orally given by the health
                provider during the ANC contact
                <ul>
                  <li>
                    Parental iron (IV Iron Sucrose or FCM) may be considered as
                    the fi rst line of management in pregnant women who are
                    detected to be anemic late in pregnancy or in whom
                    compliance is likely to be low (high chance of lost to
                    follow-up)
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Follow-up</th>
              <td>
                <ul>
                  <li>
                    Every 2 months for compliance of treatment by health
                    provider at regular ANC clinics/PMSMA/VHND platform.
                  </li>
                  <li>
                    The contact is to be utilized by the health provider to also
                    conduct haemoglobin estimation of the anemic cases every
                    month. If haemoglobin levels have come up to normal level,
                    discontinue the treatment and continue with the prophylactic
                    IFA dose.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">
                If no improvement after first level of treatment
              </th>
              <td>
                If no improvement in haemoglobin ({"<"}1 g/dl increase) after
                two month of treatment, refer to First Referral Unit
                (FRU)/District Hospital (DH) by health provider
                <br />
                The case to be referred to FRU/DH for further investigations for
                cause of anemia and may be managed with IV Iron Sucrose/FCM
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={2}>
                If Haemoglobin is 5.0-6.9 g/dl (severe anemia)
              </th>
            </tr>
            <tr>
              <th scope="row">First level of treatment</th>
              <td>
                Management of severe anemia in pregnant women will be done by
                the medical offi cer at PHC/CHC/FRU/DH
                <br />
                The treatment will be done using IV Iron Sucrose/Ferric Carboxy
                Maltose (FCM) by the medical officer
                <br />
                *Immediate hospitalization recommended in the third trimester of
                pregnancy at a health facility where round-the-clock specialist
                care is available
              </td>
            </tr>
            <tr>
              <th scope="row">Follow-up after first level of treatment</th>
              <td>
                After the fi rst level of treatment, monthly or as prescribed by
                the medical officer
              </td>
            </tr>
            <tr>
              <th scope="row">Treatment protocol if no improvement</th>
              <td>As prescribed by the medical officer</td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <h5>Note</h5>
        For severely anemic pregnant women with haemoglobin less than 5 g/dl,
        immediate hospitalization irrespective of period of gestation where
        round-the-clock specialist care is available. This is to be done till
        normal level of haemoglobin is achieved.
      </p>
      <p>
        Management protocol for severe anemia mentioned in Tables 6-8 is
        contraindicated for patients with thalassemia major and sickle cell
        disease. Treatment of anemia through folic acid is recommended in
        thalassemia major cases.
      </p>
    </div>
  </section>
);
const Section5 = () => (
  <section id="link-5">
    <SectionHeadingBox
      className="section-heading"
      locationText="5th Institutional Mechanism out of 6"
      headingText="Mandatory provision of Iron and Folic Acid fortified foods in government-funded health programmes"
    />
    <div className={styles["section-content"]}>
      <p>
        The Government of India has mandated the use of fortified salt, wheat fl
        our and oil in foods served under Integrated Child Development Services
        (ICDS) and Mid-day Meal (MDM) schemes to address micronutrient
        deficiencies. In addition, all health facility-based programmes where
        food is being provided are mandated to provide fortifi ed wheat, rice
        (with iron, folic acid and vitamin B12), and double fortifi ed salt
        (with iodine and iron), and oil (with vitamin A and D) as per standards
        for fortification of staple foods (salt, wheat, rice, milk and oil)
        prescribed and notifi ed by the Food Safety and Standard Authority of
        India (FSSAI, 2016).
      </p>
    </div>
  </section>
);
const Section6 = () => (
  <section id="link-6">
    <SectionHeadingBox
      className="section-heading"
      locationText="6th Institutional Mechanism out of 6"
      headingText="Addressing non-nutritional causes of anemia in endemic pockets, with special focus on malaria, haemoglobinopathies and fluorosis"
    />

    <div className={styles["section-content"]}>
      <p>
        The strategy attempts to intensify awareness and integrate screening and
        treatment for following non-nutritional causes of anemia with special
        focus on malaria, haemoglobinopathies and fluorosis.
      </p>

      <h5>MALARIA:</h5>
      <p>
        As the country is committed towards malaria elimination by 2030, States
        have identifi ed high malaria-endemic districts/ blocks/sub-centres and
        villages for intensification of malaria prevention and control
        activities.
      </p>
      <p>
        The prevention and control strategy for nutritional anemia is to be
        integrated with active and passive case detection and management
        protocols as per the guidelines of National Vector Borne Disease Control
        Program (NVBDCP), MoHFW, GoI. The testing of malaria and anemia will be
        integrated in the identified malaria endemic regions, e.g., the
        beneficiaries who report recent fever and being screened for anemia will
        also be tested for malaria as per NVBDCP guidelines, to ascertain the
        co- occurrence of malaria. Similarly, patients who are being tested for
        malaria will also be tested for anemia in these endemic regions with
        increase in outreach under NVBDCP programme.
      </p>
      <p>
        Fixed days for screening of anemia at Pradhan Mantri Surakshit Matritva
        Abhiyan (PMSMA) sites and annually by Rashtriya Bal Swasthya Karyakram
        teams in schools will be utilized to provide screening for malaria as
        per NVBDCP, MoHFW guidelines. The treatment protocol for management of
        anemia in malaria-endemic regions will be the same as given in Tables 6
        and 7 for children and adolescents. For treating malaria in pregnant
        women, the protocol issued by NVBDCP will be followed including
        Artemisinin Combination Therapy (ACT) for treatment of P. falciparum
        malaria as per drug policy of NVBDCP for treatment of malaria.
      </p>
      <p>
        Indoor Residual Spray (IRS) before and after the monsoon season will be
        carried out with the appropriate insecticides in school premises and
        residential areas as per the malaria burden as decided by NVBDCP. To
        prevent malaria, NVBDCP has provided Long Lasting Insecticide Nets
        (LLINs) in all high endemic areas. Anaemia Mukt Bharat will play a key
        role for utilization of these LLINs by all target groups especially
        pregnant mothers and under-five children by promoting IEC/BCC.
      </p>
      <h5>HAEMOGLOBINOPATHIES:</h5>
      <p>
        An integrated strategy for comprehensive prevention, screening and
        management of haemoglobinopathies should be provided at the existing
        service delivery platforms. Pre-marital and pre-conception screening and
        counselling services for informing the community about appropriate
        preventive options will be provided in the endemic districts of the
        country. Existing platforms such as AWCs, SCs and Health and Wellness
        Centres and events such as VHNDs, Nutrition week, Breastfeeding week,
        Women's Day, World Thalassemia Day, etc. will be utilized to generate
        discussions and dialogue on nonnutritional causes of anemia in the
        endemic districts.
      </p>
      <p>
        Activities such as quizzes and assisted educative talks (with
        distribution of informative booklets) can be done during Adolescent
        Health Days to engage adolescents. Screening for haemoglobinopathies
        should be integrated with ANC services during the first trimester of
        pregnancy in the endemic districts. Women identified with severe anemia
        should be referred to higher centres for further investigations and if
        found positive, the husband is to be screened for carrier status. If the
        couple is found positive, they are to be referred to a higher centre for
        prenatal diagnosis before twenty weeks of pregnancy.
      </p>
      <p>
        Appropriate treatment should be provided as per the National Guidelines
        on Prevention and Control of Haemoglobinopathies (2016).6 The treatment
        of anemia using parental iron administration is contraindicated in
        sickle cell disease patients.
      </p>

      <h5>FLUOROSIS:</h5>
      <p>
        High fluoride concentration in food and water leads to destruction of
        gastrointestinal mucosa, thus reducing the nutrient absorption,
        including iron and folic acid. The National Programme for Prevention and
        Control of Fluorosis (NPPCF)7 is coordinating action on the fluorosis
        issue across the country. The programme recognizes the linkages of
        fluoride, anemia and malnutrition, and recommends a combined approach of
        safe drinking water and nutritional therapy to treat the people affected
        with problems of anemia due to fluorosis.
      </p>
      <p>
        Addressing anemia due to fluorosis will need sustained communication,
        behaviour change and a combined approach of safe drinking water along
        with nutritional improvements. This can be achieved through the existing
        implementation framework of the NPPCF under NHM and through convergence
        with other departments such as the PHE at the district level.
      </p>

      <p>
        The 3 key interventions are:
        <ol>
          <li>
            <h6>Identification of fluoride-affected habitations:</h6>
            States should identify the habitations with high anemia and
            fluorosis prevalence. List of fluorosis-endemic districts/blocks of
            the country as available with the NPPCF Division, MoHFW is at
            Annexure 5. States should converge with the PHED departments to
            produce local mapping of high fluoride-affected habitations through
            this process for planning purpose.
          </li>
          <li>
            <h6>Activities for anemia control due to fluorosis:</h6>
            The recommended activities for anemia prevention and control due to
            fluorosis is to be taken up in these habitations through counselling
            services in the community, such as use of safe drinking water, focus
            on diet corrections (Calcium, Magnesium, Vitamin C) by dietary
            diversity, etc. These counselling process to be made systemic within
            the district level by establishing local protocols for anemia and
            fluorosis control. Counselling services should also include periodic
            check-up of haemoglobin in affected habitations and seek appropriate
            treatment for the same. Subsequently, IFA supplementation is to be
            initiated after correction of anemia status through these fluorosis
            control activities.
          </li>
          <li>
            <h6>Capacity building:</h6>
            Within fluoride-affected blocks, training of all public health
            staff, such as MO in PHC/CHC, field workers (ASHA, ANM and AWW) and
            others should be conducted on aspects of communication and behaviour
            change of anemia and fluoride control, with the broad message of
            “Accha Paani, Takatvar Paani” signifying health and nutritional
            improvements through water.
          </li>
        </ol>
      </p>
    </div>
  </section>
);

export default InterventionsContent;
