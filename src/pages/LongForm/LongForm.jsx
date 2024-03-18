import React from "react";

export default function LongForm() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#242424] flex justify-center items-center py-10">
        <div className="w-[90%] lg:w-[50%] h-full rounded-md shadow-md bg-gradient-to-r from-sky-500 from-40% to-emerald-500 to-90%">
          <h2 className="font-semibold text-white text-center my-4 text-3xl">
            Long Way Register
          </h2>
          <section className="my-6 px-4 py-1 bg-slate-500">
            <h3 className="font-medium text-white text-xl">
              General Information
            </h3>
            {/* profile pic, first name, last name, full name (preview), gender, date of birth, marital status */}
          </section>
          <section className="my-6 px-4 py-1 bg-slate-500">
            <h3 className="font-medium text-white text-xl">
              Contact Information
            </h3>
            {/* email, phone, country, state, city, pincode */}
          </section>
          <section className="my-6 px-4 py-1 bg-slate-500">
            <h3 className="font-medium text-white text-xl">Security Related</h3>
            {/* id proof(pdf file), password, confirm password, describe yourself(optional) */}
            {/* captha using random hex color and user needs to match the color code, which also change the app background */}
          </section>

          {/* checkbox to agree the t and c */}
          {/* two button reset and submit */}
        </div>
      </div>
    </>
  );
}
