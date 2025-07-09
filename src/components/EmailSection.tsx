"use client";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
const EmailSection = () => {
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "ece86b97-1fc2-483e-8a98-1740acf93268");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult("Error sending message. Please try again later");
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 pointer-events-none "
        aria-hidden="true"
      ></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md ">
          I'm currently looking for new opportunites, my inbox is always open.
          Whether you have a question or just want to say hi, i'll try my best
          to get back to you!
        </p>
        <div className="flex gap-2">
          <Link href={"https://github.com/kngigi"} target="_blank">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/kennedy-ngigi-2360a81a4/"}
            target="_blank"
          >
            <Image src={LinkedInIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Just saying hi"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              required
            />
          </div>
          <Button
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
          >
            Send Message
          </Button>
          <p className="text-green-500 text-sm mt-2">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
