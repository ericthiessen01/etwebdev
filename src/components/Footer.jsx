import React from "react";
import { footerSocials } from "../Data";
import { mainMenu } from "../Data";
import { explores } from "../Data";
import { footerContacts } from "../Data";
//import { payements } from "../Data";

const Footer = () => {
  return (
    <div className="bg-[#050816] py-10">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
          <div>
            <div className="text-xl font-semibold mb-3">ET Web Dev</div>
            <p className="text-[1rem] mb-3">
            Your personal web artisan, crafting each digital journey with care and precision. Connect with me for a uniquely tailored web solution.
            </p>
            <div className="flex items-center gap-4">
              {/* <span className="">Follow Us</span>
              <div className="h-[2px] w-12 bg-white"></div>
              {footerSocials.map((footerSocial, index) => {
                return (
                  <div className="" key={index}>
                    <a href="#">{footerSocial}</a>
                  </div>
                );
              })} */}
            </div>
          </div>
          <div className="grid grid-cols-2">
            {/* <div>
              <h3 className="font-semibold text-[1.1rem] mb-4">Main Menu</h3>
              {mainMenu.map((menu) => {
                return (
                  <div className="text-[1rem] mb-2" key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.text}</a>
                  </div>
                );
              })}
            </div> */}
            {/* <div className="">
              <h3 className="font-semibold text-[1.1rem]  mb-4">Important Link</h3>
              {explores.map((explore, index) => {
                return (
                  <div className="text-[1rem] mb-2" key={index}>
                    <a href="#">{explore}</a>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.1rem] mb-4">Main Menu</h3>
            {mainMenu.map((menu) => {
              return (
                <div className="text-[1rem] mb-2" key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          {/* <div className="">
            <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
            {footerContacts.map((footerContact) => {
              return (
                <div
                  className="flex items-center gap-4 mb-4"
                  key={footerContact.id}
                >
                  <div className="text-xl">{footerContact.icon}</div>
                  <div>{footerContact.text}</div>
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="h-[1px] w-[100%] mb-10 bg-white"></div>
        <div className="flex flex-wrap justify-center gap-4 pb-8">
          <div className="text-center">
            Copyright &#169; <span className="font-bold text-[#915EFF]">ET Web Dev</span>. All
            rights deserved.
          </div>
          {/*<div className="flex gap-2">
            {payements.map((payment, index) => {
              return (
                <div className="" key={index}>
                  <img src={payment} alt="" className="w-10" />
                </div>
              );
            })}
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
