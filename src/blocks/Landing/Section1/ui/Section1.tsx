import React, { useEffect, useRef } from "react";

import cls from "./Section1.module.scss";

import { classNames, Mods } from "shared/lib/classNames/classNames";
import kfsBg from "shared/assets/bg/hood2.jpg";
import pigga1 from "shared/assets/bg/pigga1.png";
import pigga2 from "shared/assets/bg/pigga2.png";
import { FaXTwitter } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { getPageLoaderData } from "features/PageLoader";

interface Section1Props {
  className?: string;
}

const Section1 = ({ className }: Section1Props) => {
  const duration = 0.2;
  const loadingLogo = useSelector(getPageLoaderData).isLoading;

  const NavbarAnimationVarinats: Variants = {
    start: { translateY: 20, opacity: 0 },
    end: {
      translateY: 0,
      opacity: 1,
      transition: {
        ease: [0.835, 0.085, 0.055, 0.032],
        duration: duration,
      },
    },
  };
  const animavar2: Variants = {
    start: { rotateX: -90, opacity: 0 },
    end: {
      rotateX: 0,
      opacity: 1,
      transition: {
        ease: [0.835, 0.085, 0.055, 0.032],
        duration: duration,
      },
    },
  };
  return (
    <div className={classNames(cls.Section1, {}, [])}>
      <img src={kfsBg} alt="piggaBg" className={cls.Bg} />
      <div className={cls.Section1__content}>
        <div className={cls.btns}>
          <motion.a
            variants={NavbarAnimationVarinats}
            initial={"start"}
            animate={loadingLogo ? "start" : "end"}
            href=""
            target="_blank"
            className={cls.Button}
          >
            WHITEPAPPER
          </motion.a>
          <motion.img
            variants={animavar2}
            initial={"start"}
            animate={loadingLogo ? "start" : "end"}
            src={pigga1}
            alt="pigga1"
            className={cls.pigga1}
          />

          <motion.a
            variants={NavbarAnimationVarinats}
            initial={"start"}
            animate={loadingLogo ? "start" : "end"}
            href=""
            target="_blank"
            className={cls.Button}
          >
            BUY $PIGGA
          </motion.a>
        </div>
        <div className={cls.piga_text}>
          <img src={pigga2} alt="pigga2" className={cls.pigga2} />
          <img src={pigga2} alt="pigga2" className={cls.pigga3} />
          <div className={cls.Section1__content__piga}>
            <p>
              THE<span>.</span>HOOD
            </p>
            <div className={cls.links}>
              <motion.a
                variants={animavar2}
                initial={"start"}
                animate={loadingLogo ? "start" : "end"}
                href="#dkdk"
                target="_blank"
              >
                <FaXTwitter />
              </motion.a>
            </div>
            {/* <p>THE HOOD</p> */}
          </div>
          <img src={pigga2} alt="pigga2" className={cls.pigga2} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
