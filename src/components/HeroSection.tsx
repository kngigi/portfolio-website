"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-2xl md:text-3xl  lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Kennedy Ngigi", 1000, "Front-end Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-lg lg:text-xl mb-6">
            Highly adept at both independent and collaborative projects, with an
            emphasis on landing page and website development. Passionate about
            learning new technologies and improving coding skills.
          </p>
          <div>
            <Button className="rounded-full mr-4 px-6 py-3 hover:bg-gradient-to-r hover:from-blue-500/50 hover:via-purple-500/50 hover:to-pink-500/50 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:text-xl">
              <Link href={"#contact"}>Hire Me</Link>
            </Button>
            <Button
              className="px-6 py-3 rounded-full text-white hover:text-slate-800 border lg:text-xl hidden"
              variant={"ghost"}
            >
              <Link href={"/kennedy_cv.pdf"} target="_blank" download={true}>
                Download CV
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 lg:mt-0 place-self-center"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-[#181818] relative">
            <Image
              src={"/ken.jpg"}
              alt="my image"
              width={250}
              height={250}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
