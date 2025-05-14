import React from "react";
import cls from "./PageLoader.module.scss";

import LogoPic from "shared/assets/icons/LogoAnimation.svg";

import { motion } from "framer-motion";

import { classNames, Mods } from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cls.PageLoader}>
      <span className={cls.Loader}></span>
    </div>
  );
};

export default PageLoader;
