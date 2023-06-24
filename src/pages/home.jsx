// import { useState } from "react"

import Header from "../components/header";

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="tw-h-screen tw-bg-[#071a55] tw-w-full">
        <Header />
      </div>
    </div>
  );
};
 
export default Home;
