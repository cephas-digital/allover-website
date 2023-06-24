// import { useState } from "react"

import Header from "../components/header";
import Left from "../assets/left.svg";
import People from "../assets/peoples.svg";
import Rating from "react-rating";
import Heroimg from "../assets/heroimg.png";
import Graphics from "../assets/graphics.png";
import Web from "../assets/web.png";
import Marketing from "../assets/marketing.png";
import Data from "../assets/data.png";
import Front from "../assets/frontend.png";
import Mobile from "../assets/mobile.png";
import Dashboard from "../assets/dashboard.svg";
import Duration from "../assets/duration.svg";
// import { Rating } from "react-simple-star-rating";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurCourses />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="tw-h-full tw-bg-[#071a55] tw-w-full">
        <Header />
        <div className="tw-flex tw-gap-6 tw-mt-6 container">
          <div className="tw-my-8 tw-w-[40%]">
            <h1 className="tw-text-white tw-text-5xl tw-font-bold segoe tw-leading-[63px]">
              Expand Your <br /> Horizons And <br />
              Transform Your <br /> ICT Skills
            </h1>
            <div className="tw-mt-8 tw-flex tw-gap-5">
              <div className="tw-bg-[#fcdf0f] segoe tw-h-12 tw-w-44 tw-pl-4 tw-pr-1 tw-text-[#1b1b1b] tw-justify-between tw-items-center tw-text-lg tw-font-normal tw-rounded-full tw-flex">
                <p className="tw-text-base tw-text-[#1b1b1b] segoe tw-font-normal tw-whitespace-nowrap">
                  Explore Courses
                </p>
                <img src={Left} alt="" className="tw-h-8" />
              </div>
              <div className="">
                <img src={People} alt="" className="" />
              </div>
            </div>
            <p className="tw-text-sm tw-font-normal tw-text-white segoe tw-pt-8">
              Learning Redefined: Expert Instruction, Endless Possibilities,
              Unlock the <br /> Power of Knowledge with Our E-Learning Platform.
            </p>
            <div className="tw-mt-10 tw-flex tw-gap-6 tw-items-center">
              <p className="tw-text-xs tw-font-normal tw-text-white segoe tw-underline">
                Overall Ratings:
              </p>
              <div>
                <Rating initialRating={5} />
              </div>
            </div>
          </div>
          <div className="tw-my-4 tw-w-[60%]">
            <img src={Heroimg} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
const OurCourses = () => {
  const CoursesArr = [
    {
      image: Graphics,
      title: "Graphics/UIUX Design",
      price: "150,000",
      aspect: "Design",
      duration: "3 months",
    },
    {
      image: Web,
      title: "Web Development (Back end)",
      price: "150,000",
      aspect: "Software Development",
      duration: "3 months",
    },
    {
      image: Mobile,
      title: "Mobile App Development",
      price: "200,000",
      aspect: "App Development",
      duration: "3 months",
    },
    {
      image: Data,
      title: "Data Science/Machine Learning",
      price: "150,000",
      aspect: "Design",
      duration: "3 months",
    },
    {
      image: Front,
      title: "Web Design (Front-end)",
      price: "150,000",
      aspect: "Software Development",
      duration: "3 months",
    },
    {
      image: Marketing,
      title: "Digital Marketing",
      price: "100,000",
      aspect: "Marketing",
      duration: "3 months",
    },
  ];
  return (
    <div className="tw-w-full tw-pt-24 tw-pb-12 tw-bg-[#FFFDF9]">
      <div className="container ">
        <h2 className="tw-text-4xl tw-font-bold tw-text-blue-950 tw-uppercase tw-text-center segoe">
          our courses
        </h2>
        <div className="tw-mt-10 tw-grid lg:tw-grid-cols-3 tw-gap-5">
          {CoursesArr.map((item, i) => (
            <div key={i} className="tw-p-6 tw-bg-white tw-rounded-lg">
              <img src={item.image} alt="" className="tw-rounded-lg" />
              <div className="tw-flex tw-justify-between tw-mt-2">
                <p className="tw-text-sm tw-font-medium tw-text-[#05043c]">
                  {item.title}
                </p>
                <p className="tw-text-sm tw-font-semibold tw-text-[#05043c]">
                  {item.price}
                </p>
              </div>
              <div className="tw-flex tw-gap-1 tw-items-center tw-mt-2">
                <img src={Dashboard} alt="" className="" />
                <p className="tw-text-[#75749a] tw-text-xs tw-font-normal">
                  {item.aspect}
                </p>
              </div>
              <div className="tw-flex tw-justify-between">
                <div className="tw-flex tw-gap-1 tw-items-center tw-mt-2">
                  <img src={Duration} alt="" className="" />
                  <p className="tw-text-[#75749a] tw-text-xs tw-font-normal">
                    Course Duration: {item.duration}
                  </p>
                </div>
                <div>
                  <p className="tw-text-sm tw-font-semibold tw-text-[#716FC3] tw-cursor-pointer">
                    View Details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
