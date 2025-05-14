import React, { useEffect, useRef } from "react";

import cls from "./Section1.module.scss";

import Participants from "./Participants/Participants";
import Buttons from "./Buttons/Buttons";
import Timings from "./Timings/Timings";
import Section1Title from "./Section1Title/Section1Title";

import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getPageLoaderData } from "features/PageLoader";
import kfsBg from "shared/assets/bg/kfcback.jpg";
import pigga1 from "shared/assets/bg/pigga1.png";
import pigga2 from "shared/assets/bg/pigga2.png";
import { canvasNodes } from "shared/lib/CanvasBlob/CanvasBlob";

interface Section1Props {
  className?: string;
}

const Section1 = ({ className }: Section1Props) => {
  return (
    <div className={classNames(cls.Section1, {}, [])}>
      <img src={kfsBg} alt="piggaBg" className={cls.Bg} />
      <div className={cls.Section1__content}>
        <div className={cls.btns}>
          <a className={cls.Button}>WHITEPAPPER</a>
          <img src={pigga1} alt="pigga1" className={cls.pigga1} />

          <a className={cls.Button}>BUY $PIGGA</a>
        </div>
        <div className={cls.piga_text}>
          <img src={pigga2} alt="pigga2" className={cls.pigga2} />
          <img src={pigga2} alt="pigga2" className={cls.pigga3} />
          <div className={cls.Section1__content__piga}>
            <p>
              THE<span>.</span>HOOD
            </p>
            {/* <p>THE HOOD</p> */}
          </div>
          <img src={pigga2} alt="pigga2" className={cls.pigga2} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
