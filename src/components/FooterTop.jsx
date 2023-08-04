import React from "react";

const Contact = () => {
  return (
    <div className="section pt-8" id="contact">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="pb-8 flex flex-col md:flex-row justify-between items-end gap-4 md:gap-8 md:flex-wrap">
          <div>
            <div className="uppercase">let's talk</div>
            <div className="text-3xl font-bold">Want to create a dream?</div>
          </div>
          <div className="rounded-tr-[1rem] rounded-b-[1rem] bg-[#915EFF] text-white p-4 text-[0.85rem] md:ml-auto">
            <a href="#">Get Appoinment</a>
          </div>
        </div>
        <div className="h-[1px] w-[100%] mb-10 bg-white"></div>
      </div>
    </div>
  );
};

export default Contact;
