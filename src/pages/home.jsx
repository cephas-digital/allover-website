// import { useState } from "react"

import Header, { Button } from "../components/header";
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
import AboutImg from "../assets/aboutimg.png";
import Pro from "../assets/pro.svg";
import Cert from "../assets/cert.svg";
import Access from "../assets/access.svg";
import Job from "../assets/job.svg";
import Howimg from "../assets/how.png";
// import { Rating } from "react-simple-star-rating";

const Home = () => {
  return (
    <div className="tw-w-full tw-bg-[#FFFDF9]">
      <Hero />
      <OurCourses />
      <About />
      <How />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="tw-h-full tw-bg-[#071a55] tw-w-full">
        <Header />
        <div className="lgtw-flex tw-flex-col lg:tw-flex-row tw-gap-6 tw-mt-6 container">
          <div className="tw-my-8 lg:tw-w-[40%]">
            <h1 className="tw-text-white lg:tw-text-5xl tw-text-4xl tw-font-bold segoe tw-leading-snug lg:tw-leading-[63px]">
              Expand Your <br /> Horizons And <br />
              Transform Your <br /> ICT Skills
            </h1>
            <div className="tw-mt-8 tw-flex tw-flex-col lg:tw-flex-row tw-gap-5">
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
            <p className="tw-text-sm tw-font-normal tw-text-white segoe tw-pt-8 tw-pr-4 lg:tw-pr-0">
              Learning Redefined: Expert Instruction, Endless Possibilities,
              Unlock the <br /> Power of Knowledge with Our E-Learning Platform.
            </p>
            <div className="tw-mt-10 tw-flex tw-gap-6 tw-items-center lg:tw-pb-0 tw-pb-10">
              <p className="tw-text-xs tw-font-normal tw-text-white segoe tw-underline">
                Overall Ratings:
              </p>
              <div>
                <Rating initialRating={5} />
              </div>
            </div>
          </div>
          <div className="tw-my-4 tw-w-[60%] tw-hidden lg:tw-block">
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
const About = () => {
  const AboutArr = [
    {
      image: Pro,
      info: "Professional experience and practical knowledge/skills on the course of study with Live Instructors",
    },
    {
      image: Cert,
      info: "Certificate after completion of the training",
    },
    {
      image: Access,
      info: "Free access to online resources and tools to Guide Whenever you are Stuck",
    },
    {
      image: Job,
      info: "Access to local and foreign job platforms for securing both remote and onsite jobs",
    },
  ];
  return (
    <section>
      <div className="container tw-bg-[#1B2143] tw-py-12 tw-px-8 tw-mt-10 tw-rounded-3xl">
        <div className="tw-flex tw-justify-between tw-items-center">
          <div>
            <h3 className="tw-text-3xl tw-text-[#FFFDF9] segoe tw-font-bold">
              The AllOver ICT Institute
            </h3>
            <p className="tw-py-5 tw-font-normal tw-text-[#fffdf9] segoe tw-text-lg tw-max-w-xl">
              At AllOver ICT Institute, we enable our students to stand out in
              their careers irrespective of their course of study. Listed below
              and many more are the benefits you will enjoy while learning with
              us.
            </p>
            <Button text="Explore Courses" />
          </div>
          <div>
            <img src={AboutImg} alt="" className="" />
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-4 tw-gap-8 tw-mt-12">
          {AboutArr?.map((item, i) => (
            <div
              style={{
                border: "1.863px solid #3A4178",
              }}
              key={i}
              className="tw-py-6 tw-px-4 tw-rounded-3xl"
            >
              <img src={item.image} alt="" className="" />\
              <p className="tw-text-[#fffdf9] tw-text-xl tw-font-normal segoe">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const How = () => {
  return (
    <div>
      <div className="container tw-grid tw-grid-cols-2 tw-gap-20 tw-my-12">
        <div>
          <h4 className="tw-text-[#013A81] tw-text-5xl tw-font-normal segoe">
            How AllOver ICT Institute Works ?
          </h4>
          <p className="tw-text-lg tw-text-[#1B2143] tw-font-normal segoe tw-py-8">
            Lorem ipsum dolor sit amet consectetur. A tortor vestibulum vel in
            dolor sed. Dolor augue lorem arcu eget phasellus sed pretium. Ut
            velit mus laoreet diam id aliquam sem ligula morbi. Sed fusce
            egestas sed et faucibus pulvinar sit sit sed. Donec lacus
            condimentum eu ut massa facilisis urna. Velit gravida at nascetur
            gravida dui donec vitae. Id rhoncus in nisi a in suscipit blandit
            metus fringilla.
          </p>
          <p className="tw-text-lg tw-text-[#1B2143] tw-font-normal segoe">
            Lorem ipsum dolor sit amet consectetur. Eu feugiat blandit sagittis
            tincidunt rhoncus sit viverra. Sed facilisi etiam sagittis mollis
            tortor a. Nulla facilisis gravida eget.
          </p>
        </div>
        <div>
          <img src={Howimg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
