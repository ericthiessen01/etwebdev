import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animate from '../components/canvas/animate';
import {styles} from "../styles"
const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    let a = false;
    if (Math.random() < 0.8) a = true;
    const formData = new FormData(form.current);
    const data = {
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
      budget: formData.get("budget"),
    };

    emailjs.send(
      "service_5ok7vuw",
      "template_nklasyk",
      data,
      "Nygu5m9DMbPyVXcf4"
    );

    emailjs
      .send(
        "service_5ok7vuw",
        "template_nklasyk",
        {
          ...data,
          // sent: a ? "Sent to them" : "Just me",
        },
        "Nygu5m9DMbPyVXcf4"
      )
      .then(
        (result) => {
          form.current.reset();
          toast.success("Email sent successfully!"); // Show success toast notification
          setStatus("Send");
        },
        (error) => {
          toast.error("There was an error sending the email."); // Show error toast notification
          setStatus("Send");
        }
      );
  };

  return (
    <>
      <div id="contact" className="flex flex-col items-center justify-center lg:pt-5 md:pt-32 pb-40">
      <div className="flex w-full items-center justify-center">
        <Animate />
      </div>
      <h2 className={styles.sectionHeadText}>
       Contact Us
      </h2>
      <div className="text-gray-400 lg:mx-auto lg:w-[50%] bg-black-100 rounded-2xl">
        <div className="full mx-auto px-4 py-8 lg:py-16">
          <form
            ref={form}
            action="#"
            className="min-w-[250px] space-y-5 text-base text-white md:text-lg "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-5 pb-5 md:flex-row">
              <div className="border-b border-[#fff] md:w-1/2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight  focus:outline-none rounded-xl"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="border-b border-[#fff] md:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight  focus:outline-none rounded-xl"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="border border-gray-300 ">
              <textarea
                type="text"
                id="message"
                name="message"
                rows={6}
                className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight  focus:outline-none rounded-xl"
                placeholder="Type your message here?"
                required
              ></textarea>
            </div>

            <div className="flex justify-center pt-5">
              <button
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white rounded-lg"
                disabled={status === "Sending..."}
              >
                {status}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactForm;
