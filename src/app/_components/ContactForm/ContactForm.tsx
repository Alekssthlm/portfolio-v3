import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Reveal from "../Effects/Reveal";

type ContactFormProps = {
  setMessageSent: (value: boolean) => void;
};

export default function ContactForm({ setMessageSent }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);
  const [captchaError, setCaptchaError] = React.useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Installed npm install --save-dev @types/grecaptcha
    const captchaResponse = grecaptcha.getResponse();

    fetch("https://portfolio-v2-server-omega.vercel.app/captcha-verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ captchaResponse }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.captchaSuccess) {
          console.log("Captcha verified");
          setCaptchaError(false);

          // code to send email if captcha is verified
          if (form.current) {
            emailjs
              .sendForm(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                form.current,
                {
                  publicKey: `${process.env.NEXT_PUBLIC_EMAIL}`,
                }
              )
              .then(
                () => {
                  console.log("SUCCESS!");
                  setMessageSent(true);
                  if (form.current) {
                    form.current.reset();
                  }
                },
                (error) => {
                  console.log("FAILED...", error.text);
                }
              );
          }
        } else {
          setCaptchaError(true);
          console.error("Captcha not verified");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      ref={form}
      onSubmit={sendEmail}
      className=" flex flex-col gap-4 mx-auto w-[100%] text-white px-4 py-4 lg:p-[2rem] border-[1px] rounded-[5px] border-[#202020] bg-black"
    >
      <div className="flex flex-col items-start gap-y-4 w-full">
        <div className="w-full flex flex-col ">
          <label className="self-start text-[#01FFB9] text-[0.9rem]">
            <Reveal delay={0.5}>Name</Reveal>
          </label>
          <input
            className="bg-[#111111] border-[1px] text-[1.01rem] rounded-[5px] border-[#202020] p-1"
            type="text"
            name="user_name"
            id="form-name"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="self-start text-[#01FFB9] text-[0.9rem]">
            <Reveal delay={0.5}>Email</Reveal>
          </label>
          <input
            className="bg-[#111111] border-[1px] text-[1.01rem] rounded-[5px] border-[#202020] p-1"
            type="email"
            name="user_email"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="self-start text-[#9d9d9d] text-[0.9rem]">
            <Reveal delay={0.5}>Message:</Reveal>
          </label>
          <textarea
            name="message"
            className="bg-[#111111] border-[1px] text-[1.01rem] rounded-[5px] border-[#202020] p-1"
            rows={6}
            required
          />
        </div>
      </div>
      <Reveal delay={0.6}>
        <div
          className="g-recaptcha"
          data-sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA}`}
          data-theme="dark"
        ></div>
      </Reveal>
      {captchaError && (
        <p className="text-white bg-red-800 p-1 rounded-[5px] font-semibold">
          Please verify the check box!
        </p>
      )}
      <Reveal delay={0.7}>
        <div className="flex justify-center">
          <input
            type="submit"
            value="send"
            className="text-[1rem] font-[900] border-[4px] border-[#01FFB9] hover:text-black hover:bg-[#01FFB9] px-5 md:px-7 py-2 hover:scale-[1.05] transition-all ease-in-out duration-300 self-center"
          />
        </div>
      </Reveal>
    </motion.form>
  );
}
