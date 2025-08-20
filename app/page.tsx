"use client"
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Hero from "./Home/Hero";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <div className="h-screen w-screen">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}
