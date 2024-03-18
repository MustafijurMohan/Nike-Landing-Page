import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <>
      <section
        id="contacts-us"
        className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      >
        <h3 className="text-4xl font-palanquin lg:max-w-md font-bold leading-[68px]">
          Sign Up from <span className="text-coral-red">Updates</span> &
          NewsLetters
        </h3>
        <div className='lg:max-w-[60%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full'>
          <input
            type="text"
            placeholder="subscrib@nike.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign now" fullWidth />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
