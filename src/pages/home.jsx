// import { useState } from "react"

import Header, { Button, Logo } from "../components/header";
import Left from "../assets/left.svg";
import People from "../assets/peoples.svg";
// import Rating from "react-rating";
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
import { Rating } from "react-simple-star-rating";
import Plus from "../assets/plus.svg";
import Woman from "../assets/woman.png";
import Instagram from "../assets/instagram.svg";
import Image from "../assets/image.svg";
import Quote1 from "../assets/quote1.svg";
import Quote2 from "../assets/quote2.svg";
import Mark from "../assets/tickcircle.svg";
import Facebook from "../assets/facebook.svg";
import Insta from "../assets/insta.svg";
import Twitter from "../assets/twitter.svg";
import Linkedlin from "../assets/linkedlin.svg";
// import { useNavigate } from "react-router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";
const Home = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
      className="tw-w-full tw-bg-[#FFFDF9]"
    >
      <Hero />
      <OurCourses />
      <About />
      <How />
      <Updates />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

const Hero = () => {
  const [nav, setNav] = useState(false);
  return (
    <div id="#">
      <div className="tw-h-full tw-bg-[#071a55] tw-w-full">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="tw-flex container tw-justify-between tw-py-6 tw-items-center"
        >
          <div className="tw-flex tw-gap-6 tw-items-center">
            <Logo />
            <p className="tw-text-white tw-hidden lg:tw-block tw-text-lg tw-font-semibold">
              AllOver ICT <br /> Institute
            </p>
          </div>
          <div
            onClick={() => setNav(true)}
            className="lg:tw-hidden tw-block tw-cursor-pointer "
          >
            <IconContext.Provider value={{ color: "#fff" }}>
              <AiOutlineMenu size={30} />
            </IconContext.Provider>
          </div>
          <div className="lg:tw-flex tw-hidden tw-gap-6 tw-items-center">
            <a
              href="#"
              className="tw-text-lg tw-text-white tw-font-normal segoe"
            >
              Home
            </a>
            <a
              href="#Courses"
              className="tw-text-lg tw-text-white tw-font-normal segoe"
            >
              Courses
            </a>
            <a
              href="#About"
              className="tw-text-lg tw-text-white tw-font-normal segoe"
            >
              About Us
            </a>
            <a
              href="#How"
              className="tw-text-lg tw-text-white tw-font-normal segoe"
            >
              How it Works
            </a>
            {/* <img src={Arrow} alt="" className="" /> */}
          </div>
          <div className="tw-hidden lg:tw-block">
            <a href="https://tinyurl.com/allovertech" className="">
              <Button text="Register" />
            </a>
          </div>
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 tw-mt-6 container">
          <div className="tw-my-8 lg:tw-w-[40%]">
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="tw-text-white lg:tw-text-5xl tw-text-4xl tw-font-bold segoe tw-leading-snug lg:tw-leading-[63px]"
            >
              Expand Your <br /> Horizons And <br />
              Transform Your <br /> ICT Skills
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              className="tw-mt-8 tw-flex tw-flex-col lg:tw-flex-row tw-gap-5"
            >
              <a
                href="https://tinyurl.com/allovertech"
                className="tw-bg-[#fcdf0f] segoe tw-h-12 tw-w-44 tw-pl-4 tw-pr-1 tw-text-[#1b1b1b] tw-justify-between tw-items-center tw-text-lg tw-font-normal tw-rounded-full tw-flex"
              >
                <p className="tw-text-base tw-text-[#1b1b1b] segoe tw-font-normal tw-whitespace-nowrap">
                  Register Now
                </p>
                <img src={Left} alt="" className="tw-h-8" />
              </a>
              <div className="">
                <img src={People} alt="" className="" />
              </div>
            </div>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="tw-text-sm tw-font-normal tw-text-white segoe tw-pt-8 tw-pr-4 lg:tw-pr-0"
            >
              Learning Redefined: Expert Instruction, Endless Possibilities,
              Unlock the <br /> Power of Knowledge with Our E-Learning Platform.
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="tw-mt-10 tw-flex tw-gap-6 tw-items-center lg:tw-pb-0 tw-pb-10"
            >
              <p className="tw-text-xs tw-font-normal tw-text-white segoe tw-underline">
                Overall Ratings:
              </p>
              <div>
                <Rating initialValue={5} />
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="tw-my-4 tw-w-[60%] tw-hidden lg:tw-block"
          >
            <img src={Heroimg} alt="" className="" />
          </div>
        </div>
      </div>
      {nav && (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="tw-block lg:tw-hidden tw-absolute tw-inset-0 tw-w-full tw-bg-[#1B2143] tw-py-8 tw-px-4"
        >
          <div className="tw-flex tw-justify-between">
            <Logo />
            <div onClick={() => setNav(false)} className="tw-cursor-pointer">
              <IconContext.Provider value={{ color: "#fff" }}>
                <AiOutlineClose size={30} />
              </IconContext.Provider>
            </div>
          </div>
          <div className="tw-mt-10 tw-block tw-space-y-4">
            <p>
              <a
                onClick={() => setNav(false)}
                href="#"
                className="tw-text-lg tw-text-white tw-font-normal segoe"
              >
                Home
              </a>
            </p>
            <p>
              <a
                onClick={() => setNav(false)}
                href="#Courses"
                className="tw-text-lg tw-text-white tw-font-normal segoe"
              >
                Courses
              </a>
            </p>
            <p>
              <a
                onClick={() => setNav(false)}
                href="#About"
                className="tw-text-lg tw-text-white tw-font-normal segoe"
              >
                About Us
              </a>
            </p>
            <p>
              <a
                onClick={() => setNav(false)}
                href="#How"
                className="tw-text-lg tw-text-white tw-font-normal segoe"
              >
                How it Works
              </a>
            </p>
          </div>
          <div className="tw-mt-6">
            <a href="https://tinyurl.com/allovertech">
              <Button text="Register Now" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
const OurCourses = () => {
  const CoursesArr = [
    {
      image: Graphics,
      title: "Graphics Design",
      price: "150,000",
      aspect: "Design",
      duration: "3 months",
    },
    {
      image: Web,
      title: "Web Development",
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
      title: "Data Science/ML/AI",
      price: "150,000",
      aspect: "Design",
      duration: "3 months",
    },
    {
      image: Front,
      title: "Web Design",
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
    {
      image: Marketing,
      title: "Software Engineering",
      price: "100,000",
      aspect: "Marketing",
      duration: "3 months",
    },
    {
      image: Marketing,
      title: "UI/UX",
      price: "100,000",
      aspect: "Marketing",
      duration: "3 months",
    },
  ];
  return (
    <div id="Courses" className="tw-w-full tw-pt-24 tw-pb-12 tw-bg-[#FFFDF9]">
      <div className="container ">
        <h2 className="tw-text-4xl tw-font-bold tw-text-blue-950 tw-uppercase tw-text-center segoe">
          our courses
        </h2>
        <div className="tw-mt-10 tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-5">
          {CoursesArr.map((item, i) => (
            <div
              data-aos="flip-down"
              data-aos-duration="2000"
              key={i}
              className="tw-p-6 tw-bg-white tw-rounded-lg"
            >
              <img src={item.image} alt="" className="tw-rounded-lg" />
              <div className="tw-flex tw-justify-between tw-mt-2">
                <p className="tw-text-sm tw-font-medium tw-text-[#05043c]">
                  {item.title}
                </p>
                {/* <p className="tw-text-sm tw-font-semibold tw-text-[#05043c]">
                  {item.price}
                </p> */}
              </div>
              <div className="tw-flex tw-gap-1 tw-items-center tw-mt-2">
                <img src={Dashboard} alt="" className="" />
                <p className="tw-text-[#75749a] tw-text-xs tw-font-normal">
                  {item.aspect}
                </p>
              </div>
              <div className="tw-flex tw-justify-between">
                {/* <div className="tw-flex tw-gap-1 tw-items-center tw-mt-2">
                  <img src={Duration} alt="" className="" />
                  <p className="tw-text-[#75749a] tw-text-xs tw-font-normal">
                    Course Duration: {item.duration}
                  </p>
                </div> */}
                <div>
                  <a
                    href="https://tinyurl.com/allovertech"
                    className="tw-text-sm tw-font-semibold tw-text-[#716FC3] tw-cursor-pointer"
                  >
                    Enroll Now
                  </a>
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
    <section id="About">
      <div className="container tw-bg-[#1B2143] tw-py-12 tw-px-8 tw-mt-10 lg:tw-rounded-3xl">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center">
          <div data-aos="flip-down" data-aos-duration="2000">
            <h3 className="tw-text-3xl tw-text-[#FFFDF9] segoe tw-font-bold">
              The AllOver ICT Institute
            </h3>
            <p className="tw-py-5 tw-font-normal tw-text-[#fffdf9] segoe tw-text-lg tw-max-w-xl">
              At AllOver ICT Institute, we enable our students to stand out in
              their careers irrespective of their course of study. Listed below
              and many more are the benefits you will enjoy while learning with
              us.
            </p>
            <a href="https://tinyurl.com/allovertech" className="">
              <Button text="Explore Courses" />
            </a>
          </div>
          <div>
            <img src={AboutImg} alt="" className="" />
          </div>
        </div>
        <div className="tw-grid lg:tw-grid-cols-4 tw-gap-8 tw-mt-12">
          {AboutArr?.map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
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
    <div id="How">
      <div className="container tw-grid lg:tw-grid-cols-2 tw-gap-20 tw-my-20">
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <h4 className="tw-text-[#013A81] tw-text-5xl tw-font-normal segoe">
            How AllOver ICT Institute Works ?
          </h4>
          <p className="tw-text-lg tw-text-[#1B2143] tw-font-normal segoe tw-py-8">
            Welcome to our Allover Institute, where innovation meets education.
            Our institute is dedicated to shaping the next generation of tech
            leaders. With a strong emphasis on practical skills and cutting-edge
            technology, we provide a dynamic learning environment for students
            to thrive. Our experienced faculty members bring industry expertise
            and passion to the classroom, ensuring our students are
            well-prepared for the rapidly evolving tech landscape.
          </p>
          <p className="tw-text-lg tw-text-[#1B2143] tw-font-normal segoe">
            Through hands-on projects, collaborative learning, and industry
            partnerships, we empower our students to develop their creativity,
            critical thinking, and problem-solving abilities. Join us and embark
            on a transformative journey toward a successful tech career.
          </p>
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="2000">
          <img src={Howimg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};
const Updates = () => {
  const UpdateArr = [
    "Register to our Academic Assessment Program",
    "Awards and Recognitions of AllOver Institute ",
    "We will be hosting Student - Alumni Networking  ",
  ];
  return (
    <div>
      <div className="container tw-bg-transparent tw-grid lg:tw-grid-cols-2 tw-gap-10">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <h2 className="tw-text-5xl tw-font-normal segoe tw-text-[#013A81]">
            Recent Updates
          </h2>
          <div className="tw-space-y-6 tw-mt-4">
            {UpdateArr.map((item, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                style={{
                  border: "0.559px solid #EFEBE6",
                }}
                key={i}
                className="tw-h-24 tw-bg-white tw-rounded-2xl tw-px-6 tw-flex tw-justify-between tw-items-center"
              >
                <h4 className="tw-text-lg tw-font-normal segoe tw-text-[#1B2143]">
                  {item}
                </h4>
                <img src={Plus} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
        <div className="tw-mt-6 tw-space-y-3">
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            style={{
              boxShadow:
                "0px 11.175000190734863px 22.350000381469727px 0px rgba(206, 206, 206, 0.46)",
            }}
            className="tw-p-6 tw-bg-white tw-rounded-3xl tw-w-72"
          >
            <div className="tw-flex tw-justify-between tw-gap-2">
              <img src={Woman} alt="" className="tw-h-full" />
              <div>
                <p className="tw-text-sm segoe tw-font-normal tw-text-[#1B2143]">
                  “Never thought of having such a great and friendly environment
                  for learning.”
                </p>
                <div className="tw-flex tw-justify-between tw-mt-3">
                  <p className="tw-text-xs tw-italic tw-text-[#4A4A4A]">
                    Posted on
                    <br /> 23-10-2023
                  </p>
                  <div className="tw-w-24 tw-rounded-lg tw-h-8 tw-bg-[#182677] tw-flex tw-justify-center tw-gap-3 tw-items-center">
                    <img src={Instagram} alt="" className="" />
                    <p className="tw-text-xs segoe tw-text-[#FFFDF9]">
                      View Post
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            style={{
              boxShadow:
                "0px 11.175000190734863px 22.350000381469727px 0px rgba(206, 206, 206, 0.46)",
            }}
            className="tw-p-6 tw-float-right tw-bg-white tw-rounded-3xl tw-w-72"
          >
            <div className="tw-flex tw-justify-between tw-gap-2">
              <img src={Woman} alt="" className="tw-h-full" />
              <div>
                <p className="tw-text-sm segoe tw-font-normal tw-text-[#1B2143]">
                  “Never thought of having such a great and friendly environment
                  for learning.”
                </p>
                <div className="tw-flex tw-justify-between tw-mt-3">
                  <p className="tw-text-xs tw-italic tw-text-[#4A4A4A]">
                    Posted on
                    <br /> 23-10-2023
                  </p>
                  <div className="tw-w-24 tw-rounded-lg tw-h-8 tw-bg-[#182677] tw-flex tw-justify-center tw-gap-3 tw-items-center">
                    <img src={Instagram} alt="" className="" />
                    <p className="tw-text-xs segoe tw-text-[#FFFDF9]">
                      View Post
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="tw-py-32 tw-bg-[#FFFDF9] container">
      <h2 className="tw-text-5xl tw-text-[#013A81] segoe">Testimonials</h2>
      <div className="tw-w-3/4 tw-mx-auto tw-pt-16 tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 tw-items-center tw-justify-center tw-bg-transparent">
        <img
          data-aos="fade-up-right"
          data-aos-duration="3000"
          src={Image}
          alt=""
          className=""
        />
        <div data-aos="fade-up-left" data-aos-duration="3000" className="">
          <img src={Quote1} alt="" className="" />
          <p className="tw-pt-5 tw-text-lg segoe tw-text-[#013A81] tw-w-96">
            “AllOver ICT Institute is a user-friendly , easy to access and very
            well thought out learning platform. But above all, it’s dedicated
            team of tutors that works very hard, supports you from start to
            finish. Nothing is left to chance, to the delight of educators and
            learners! Cheers!”
          </p>
          <div className="tw-float-right">
            <img src={Quote2} alt="" className=" tw-mt-6" />
          </div>
          <div className="tw-mt-16">
            <p className="tw-text-3xl segoe tw-font-[900] tw-text-[#071A55]">
              Aanu George
            </p>
            <p className="tw-text-2xl tw-text-[#071a55] segoe">
              Product Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Subscribe = () => {
  const Arr = [
    "Professional support and guide on projects directly in your inbox.",
    "Job opportunities for students after the training",
    "Keeping you up-to-date with our new updates",
  ];
  return (
    <div>
      <div className="tw-p-12 container tw-grid lg:tw-grid-cols-2 tw-gap-10 tw-mt-24 tw-bg-[#1B2143] tw-rounded-3xl">
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <h4 className="tw-text-3xl tw-font-bold tw-text-[#fffdf9] segoe">
            Keep in touch.
            <br />
            Subscribe to our <br /> newsletter.
          </h4>
          <form action="" className="tw-mt-8">
            <input
              type="text"
              placeholder="Email"
              className="tw-pl-8 tw-w-full tw-h-10 tw-rounded-full tw-text-sm tw-font-normal tw-text-[#1B2143] segoe"
            />
            <div className="tw-flex tw-mt-8 tw-justify-between">
              <div className="tw-flex tw-items-center tw-gap-4">
                <input
                  type="checkbox"
                  name="consent"
                  className="tw-h-6 tw-w-6 tw-bg-white "
                />
                <label
                  htmlFor="consent"
                  className="lg:tw-text-sm tw-text-xs segoe tw-font-normal tw-text-[#fffdf9]"
                >
                  I agree to be contacted by AllOver Institute team
                </label>
              </div>
              <Button text="Subscribe" />
            </div>
          </form>
        </div>
        <div className="tw-my-16 tw-space-y-10">
          {Arr.map((item, i) => (
            <div
              data-aos="fade-up-"
              data-aos-duration="3000"
              key={i}
              className="tw-flex tw-gap-4"
            >
              <img src={Mark} alt="" className="" />
              <p className="tw-text-lg segoe tw-text-[#F6DF0F]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  const Legal = [
    "Terms of Service ",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility Policy",
  ];
  const Support = ["Blog", "Contact Us", "Help Center", "Security"];
  const Socials = [Facebook, Twitter, Linkedlin, Insta];
  return (
    <div>
      <div className="tw-mt-20 tw-w-full tw-bg-[#071A55] tw-py-16">
        <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 lg:tw-gap-6 tw-justify-between">
          <div className="tw-flex tw-gap-4">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="tw-text-xl tw-text-white segoe">
                AllOver ICT Institute
              </h4>
              <p className="tw-text-lg tw-text-white tw-font-normal segoe tw-w-72 tw-pt-6">
                Lorem ipsum dolor sit amet consectetur. Vestibulum faucibus
                lobortis orci eget diam.
              </p>
            </div>
          </div>
          <div>
            <h4 className="tw-text-xl tw-font-semibold tw-text-white segoe">
              Legal
            </h4>
            <ul className="tw-mt-5 tw-space-y-3">
              {Legal.map((item, i) => (
                <li
                  key={i}
                  className="tw-text-lg tw-text-white tw-font-normal segoe"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="tw-text-xl tw-font-semibold tw-text-white segoe">
              Support
            </h4>
            <ul className="tw-mt-5 tw-space-y-3">
              {Support.map((item, i) => (
                <li
                  key={i}
                  className="tw-text-lg tw-text-white tw-font-normal segoe"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="tw-text-xl tw-text-[#FAF408] segoe">
              Connect with us
            </h4>
            <div className="tw-flex tw-gap-4 tw-mt-6">
              {Socials.map((item, i) => (
                <img key={i} src={item} alt="" className="" />
              ))}
            </div>
            <p className="tw-pt-6 tw-text-lg segoe tw-text-white">
              Contact: <br /> +234 900 111 2222
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
