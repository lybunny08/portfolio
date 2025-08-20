"use client"
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init: () => void;
    };
  }
}
import React, { useEffect } from "react";
import Buttonglow from "../Common/Buttons/Buttonglow";
import LoopTools from "../components/LoopTools";

export default function Hero() {
  useEffect(() => {
    // Vérifie si UnicornStudio n’est pas déjà chargé
    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (!window.UnicornStudio?.isInitialized) {
          window.UnicornStudio?.init();
          window.UnicornStudio!.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    } else {
      // Si déjà chargé, on initialise quand même
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }, []);

  return (
    <section className="flex flex-col h-screen w-full relative overflow-hidden justify-end px-[15px] md:px-[30px] pb-[24px]">
      {/* Container Unicorn Studio */}
      <div
        data-us-project="InQbBVHxhtjcrOdgFAT5"
        className="absolute inset-0 w-screen h-screen"
      ></div>

      {/* Overlay noir uniquement mobile */}
      <div className="absolute inset-0 bg-black/40 md:hidden z-5"></div>

      <div className="relative z-10 flex flex-col gap-[16px] text-white">
        <h1 className="text-[20px] md:text-[28px] leading-[29px] text-[#cacaca] font-bold md:max-w-[450px] [text-indent:3.5rem]">
          I design&build websites, and digital experiences{" "}
          <span className="text-[#cacaca]/60">
            with precision, elegance and purpose.
          </span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-[16px] md:gap-0 md:items-end">
          <LoopTools />
          <Buttonglow />
        </div>
      </div>
    </section>
  );
}
