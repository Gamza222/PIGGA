import React from "react";
import cls from "./LandingPage.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Section1 } from "blocks/Landing/Section1";

interface LandingPageProps {
  className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return (
    <div className={classNames(cls.LandingPage, {}, [])}>
      <Section1 />
    </div>
  );
};

export default LandingPage;
