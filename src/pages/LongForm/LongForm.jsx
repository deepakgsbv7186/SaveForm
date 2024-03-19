import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

export default function LongForm() {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePic = (e) => {
    // Trigger file input when profile icon is clicked
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Accept only image files
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result); // Update profilePic state with the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="w-full h-auto bg-[#242424] flex justify-center items-center py-10">
        <div className="w-[90%] lg:w-[50%] h-full rounded-md shadow-md bg-gradient-to-r from-sky-500 from-40% to-emerald-500 to-90%">
          <h2 className="font-semibold text-white text-center my-4 text-3xl">
            Long Way Register
          </h2>
          {profilePic ? (
            <div
              onClick={handleProfilePic}
              className="w-[150px] h-[150px] rounded-full bg-white mx-auto my-10 flex justify-center items-center cursor-pointer"
            >
              <img
                src={profilePic}
                alt="profilepic"
                className="w-[100%] h-[100%] rounded-full object-cover"
              />
            </div>
          ) : (
            <CgProfile
              className="text-[8rem] text-center w-full cursor-pointer"
              onClick={handleProfilePic}
            />
          )}
          <section className="my-6 px-4 py-1 ">
            <h3 className="font-medium text-white text-xl bg-slate-500">
              General Information
            </h3>
            {/* first name, last name, full name (preview), gender, date of birth, marital status */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-sm mt-4 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="enter your first name"
                className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-1 border-2 focus:border-yellow-400"
              />
            </div>
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
