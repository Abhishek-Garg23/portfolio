import React, { useContext } from "react";
import "./Works.css";
import Ans from "../../img/ansCommerce.png";
import Asmay from "../../img/asmay.png";
import Vasitum from "../../img/vasitum2.png";
import G10x from "../../img/g10x.png";
import Lyzer from "../../img/lyzer.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Companies</span>
          <span>
            To obtain professional and financial heights both for the organization and 
            <br/> self through my skills and knowledge and learn from present as well as establishments
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Asmay} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Lyzer} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Vasitum} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Ans} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={G10x} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
