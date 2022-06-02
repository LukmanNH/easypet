import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* -- NAVBAR -- */}
      <section className="container-w-full pt-[2.188rem] pb-[84px] px-4 sm:px-5 md:px-8 lg:px-36">
        <nav className="flex justify-between">
          <div className="">
            <img src="logo.svg" />
          </div>
          <div className="self-center">
            <ul className="hidden md:flex text-[18px]">
              <li className="mr-[28px] font-bold">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="mr-[28px] font-light">
                <Link href={"/"}>Find a Pet Shop</Link>
              </li>
              <li className="mr-[28px] font-light">
                <Link href={"/"}>Join Us</Link>
              </li>
              <li className="mr-[28px] font-light">
                <Link href={"/"}>Testimonials</Link>
              </li>
              <li className="font-light">
                <Link href={"/"}>About us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      {/* -- END OF NAVBAR -- */}

      {/* -- HERO -- */}
      <div className="left-0 absolute">
        <img
          src="img-ornamen.svg"
          className="translate-x-[-90px] translate-y-[-40px]"
        ></img>
      </div>
      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-36">
        <div className="grid grid-cols-2 gap-2">
          <div className="place-self-center">
            <h1 className="font-bold text-5xl">
              Looking for a clinic is no longer wasting your time.
            </h1>
            <p className="font-light text-xl mt-4">
              Make people easier while taking care and improve the quality of
              their pets' lives
            </p>
            <div className="mt-10 cursor-pointer text-lg font-bold text-white bg-[#458FF6] hover:bg-white hover:border-[1.4px] hover:border-[#458FF6] transition duration-200 hover:text-[#458FF6] shadow-custom-button text-center py-[0.875rem] w-[200px] rounded-full">
              Consult today
            </div>
          </div>
          <div className="place-self-center">
            <img src="img-hero.svg" className="" />
          </div>
        </div>
      </section>
      {/* -- END OF HERO -- */}

      {/* -- SERVICES -- */}
      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-36 mt-48 bg-services bg-no-repeat bg-cover mb-14">
        <div className="text-center mb-20">
          <h1 className="font-bold text-4xl">Our services</h1>
          <img src="img-line.svg" className="mx-auto mt-7 mb-9"></img>
          <p className="font-light text-lg">
            We provide to you the best choiches for you. Adjust it to your pet
            health needs and make sure your pet undergo <br /> treatment with
            our highly qualified doctors you can consult with us which type of
            service is suitable for your health
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-search-clinic.svg" className="h-24"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Search Clinic</h1>
            <p className="font-light text-base">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-pet-shop.svg" className="h-24"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Pet Shop</h1>
            <p className="font-light text-base">
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-consult.svg"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Consultation</h1>
            <p className="font-light text-base">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-details-info.svg"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Details info</h1>
            <p className="font-light text-base">
              Health is a different thing for each pet. Find various products
              and clinics that suit your pet's needs here.
            </p>
          </div>
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-emergency.svg" className="h-24"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Emergency care</h1>
            <p className="font-light text-base">
              You can get 24/7 urgent care for your pet
            </p>
          </div>
          <div className="bg-white rounded-[20px] px-9 py-11 drop-shadow-[10px_40px_50px_rgba(229,233,246,0.4)]">
            <img src="icn-tracking.svg"></img>
            <h1 className="font-bold text-2xl pt-9 pb-3">Tracking</h1>
            <p className="font-light text-base">
              Track and save your medical history and health data
            </p>
          </div>
        </div>
        <div className="mt-[69px] mx-auto cursor-pointer text-lg font-bold border-[1.4px] border-[#458FF6] text-[#458FF6] bg-white hover:bg-[#458FF6] transition duration-200 hover:text-white shadow-custom-button text-center py-[0.875rem] w-[200px] rounded-full">
          Learn more
        </div>
      </section>
      {/* -- END OF SERVICES -- */}

      {/* -- JOIN NOW -- */}
      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-36 bg-[#EEF6FF] py-7">
        <div className="grid grid-cols-2 gap-[99px]">
          <div className="">
            <img src="img-join-now.svg" className="" />
          </div>
          <div className="place-self-center">
            <h1 className="font-bold text-4xl">
              Join the cooperation with us <br />
              at the easy pet company
            </h1>
            <img src="img-line.svg" className="mt-7 mb-9"></img>
            <p className="font-light text-lg mt-3">
              Easy Pet provides progressive, and affordable <br /> healthcare,
              accessible on mobile and online for <br /> everyone. To us, it’s
              not just work. We take pride <br /> in the solutions we deliver
            </p>
            <div className="mt-10 cursor-pointer text-lg font-bold text-white bg-[#458FF6] hover:bg-white hover:border-[1.4px] hover:border-[#458FF6] transition duration-200 hover:text-[#458FF6] shadow-custom-button text-center py-[0.875rem] w-[200px] rounded-full">
              Join Now
            </div>
          </div>
        </div>
      </section>
      {/* -- END OF JOIN NOW -- */}

      {/* -- DOWNLOAD -- */}
      <div className="right-0 absolute">
        <img src="img-ornamen.svg" className="translate-y-[-40px]"></img>
      </div>
      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-36 py-[240px]">
        <div className="grid grid-cols-2 gap-20">
          <div className="place-self-center">
            <h1 className="font-bold text-4xl">
              Download our <br />
              mobile apps
            </h1>
            <img src="img-line.svg" className="mt-7 mb-9"></img>
            <p className="font-light text-lg mt-3">
              Our dedicated patient engagement app and <br /> web portal allow
              you to access information <br /> instantaneously (no tedeous form,
              long calls, <br />
              or administrative hassle) and securely
            </p>
            <div className="mt-10 flex items-center justify-center cursor-pointer text-lg font-bold border-[1.4px] border-[#458FF6] text-[#458FF6] bg-white hover:bg-[#458FF6] transition duration-200 hover:text-white shadow-custom-button text-center py-[0.875rem] w-[200px] rounded-full">
              Download
              <svg
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <path
                  d="M4.81945 1.05554L4.81945 12.6308L2.2764 10.0877C1.92563 9.73698 1.39948 9.73698 1.04872 10.0877C0.697953 10.4385 0.697953 10.9647 1.04872 11.3154L5.08252 15.3492C5.43329 15.7 5.95943 15.7 6.3102 15.3492L10.344 11.3154C10.6948 10.9647 10.6948 10.4385 10.344 10.0877C9.99323 9.73698 9.46709 9.73698 9.11632 10.0877L6.57327 12.6308L6.57327 1.05554C6.57327 0.617083 6.22251 0.178627 5.69636 0.178627C5.17021 0.178627 4.81945 0.617083 4.81945 1.05554Z"
                  fill="#458FF6"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <img src="img-download.svg" className="h-full" />
          </div>
        </div>
      </section>
      {/* -- END OF DOWNLOAD -- */}

      {/* -- Testimonials -- */}

      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-48 py-[100px] bg-red-50 text-center mb-20">
        TESTIMONIALS CAROUSEL SHOULD BE HERE
      </section>

      {/* -- END OF Testimonials -- */}

      {/* -- FOOTER -- */}
      <div className="right-16 absolute">
        <img src="img-ornamen.svg" className="translate-y-[-40px]"></img>
      </div>
      <section className="container-w-full px-4 sm:px-5 md:px-8 lg:px-48 py-[100px] bg-footer">
        <div className="grid grid-cols-4 gap-20">
          <div className="place-self-center">
            <img src="/white_logo.svg" />
            <p className="font-light text-white text-lg mt-3">
              Easypet make people easier while taking care and improve the
              quality of their pets' lives
            </p>
            <p className="font-light text-white text-base mt-14">
              ©Easypet 2022. All rights reserved
            </p>
          </div>
          <div className="text-white">
            <h5 className="font-bold text-xl mb-6">Company</h5>
            <p className="font-light text-lg">About</p>
            <p className="font-light text-lg">Testimonials</p>
            <p className="font-light text-lg">Find a Doctor</p>
            <p className="font-light text-lg">Apps</p>
          </div>
          <div className="text-white">
            <h5 className="font-bold text-xl mb-6">Region</h5>
            <p className="font-light text-lg">Indonesia</p>
            <p className="font-light text-lg">Singapore</p>
            <p className="font-light text-lg">Hongkong</p>
            <p className="font-light text-lg">Canada</p>
          </div>
          <div className="text-white">
            <h5 className="font-bold text-xl mb-6">Help</h5>
            <p className="font-light text-lg">Help center</p>
            <p className="font-light text-lg">Contact support</p>
            <p className="font-light text-lg">Instruction</p>
            <p className="font-light text-lg">How it works</p>
          </div>
        </div>
      </section>
      <div className="left-0 absolute -translate-y-32">
        <img src="img-ornamen.svg"></img>
      </div>
      {/* -- END OF FOOTER -- */}
    </>
  );
}
