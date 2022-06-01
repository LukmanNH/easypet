import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      {/* -- NAVBAR -- */}
      <section className="container mx-36 mt-[2.188rem] mb-[84px]">
        <nav className="flex justify-between">
          <div className="">
            <img src="logo.svg" />
          </div>
          <div className="self-center">
            <ul className="flex text-[18px]">
              <li className="mr-[31px] font-bold">Home</li>
              <li className="mr-[28px] font-light">Find a Pet Shop </li>
              <li className="mr-[26px] font-light">Join Us</li>
              <li className="mr-[40px] font-light">Testimonials</li>
              <li className="font-light">About us</li>
            </ul>
          </div>
        </nav>
      </section>
      {/* -- END OF NAVBAR -- */}
    </div>
  );
}
