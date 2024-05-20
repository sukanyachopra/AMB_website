import Slide from "../components/div/Slide";
import SlideLeft from "../components/div/SlideLeft";
import image1 from "../components/div/images/slide-1.jpg";
import image2 from "../components/div/images/slide-2.jpg";
import image3 from "../components/div/images/slide-3.jpg";
import image4 from "../components/div/images/slide-4.jpg";
import image5 from "../components/div/images/slide-5.jpg";
import image6 from "../components/div/images/slide-6.jpg";
import image7 from "../components/div/images/slide-7.jpg";
import { motion } from "framer-motion";
const Program = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Slide image={image1} />
      <SlideLeft image={image2} para="All Districts Affected" />
      <div className="slideL" style={{ backgroundImage: `url(${image3})` }} />
      <SlideLeft image={image4} para="All at Risks to Anemia" />
      <SlideLeft
        image={image5}
        para="514 districts Anemia ≥ 40% among children 6-59 months"
      />
      <SlideLeft
        image={image6}
        para="139 districts Anemia ≥ 40% among women of reproductive age"
      />
      <div className="slideL" style={{ backgroundImage: `url(${image7})` }} />
    </motion.div>
  );
};
export default Program;
