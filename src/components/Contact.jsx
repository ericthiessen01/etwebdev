import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animate from "../components/canvas/animate";
import { styles } from "../styles";

const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Collect form data
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("subject"),  // "subject" field is actually your "Name"
      user_email: formData.get("email"),   // "email" field
      message: formData.get("message"),    // "message" field
      // Optionally include other fields if needed, e.g. `budget: formData.get("budget")`
    };

    try {
      // Send POST request to your Node/Express server
      const response = await fetch("https://thiessenwebdev.ca/api/etwebdev/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Replace with your real API key
          "x-api-key": "h3YPC3MZ1EVQZuq$K2J!W12kw$j9Wz2S", 
        },
        body: JSON.stringify(data),
      });

      // Check response status
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // If successful:
      form.current.reset();
      toast.success("Email sent successfully!");
      setStatus("Send");
    } catch (error) {
      console.error(error);
      toast.error("There was an error sending the email.");
      setStatus("Send");
    }
  };

  return (
    <>
      <div id="contact" className="flex flex-col items-center justify-center lg:pt-5 md:pt-32 pb-40">
        <div className="flex w-full items-center justify-center">
          <Animate />
        </div>
        <h2 className={styles.sectionHeadText}>Contact Us</h2>

        <div className="text-gray-400 lg:mx-auto lg:w-[50%] bg-black-100 rounded-2xl">
          <div className="full mx-auto px-4 py-8 lg:py-16">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="min-w-[250px] space-y-5 text-base text-white md:text-lg"
            >
              <div className="flex flex-col gap-5 pb-5 md:flex-row">
                {/* Name (user_name) */}
                <div className="border-b border-[#fff] md:w-1/2">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight focus:outline-none rounded-xl"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Email (user_email) */}
                <div className="border-b border-[#fff] md:w-1/2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight focus:outline-none rounded-xl"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="border border-gray-300">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight focus:outline-none rounded-xl"
                  placeholder="Type your message here?"
                  required
                ></textarea>
              </div>

              {/* (Optional) Budget or other fields */}
              {/* 
              <div className="border-b border-[#fff] md:w-1/2">
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className="mr-3 bg-tertiary w-full appearance-none border-none py-2 leading-tight focus:outline-none rounded-xl"
                  placeholder="Budget (Optional)"
                />
              </div>
              */}

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
