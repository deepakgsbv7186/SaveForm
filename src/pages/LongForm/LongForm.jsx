import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

export default function LongForm() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    profilePic: null,
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
  });

  const handleProfilePic = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserInput({ ...userInput, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4004/user/register",
        userInput
      );
      if (response?.status === 201) {
        toast.success("Form submitted successfully.");
        console.log(response?.data);
        setUserInput({
          firstName: "",
          lastName: "",
          profilePic: null,
          gender: "",
          maritalStatus: "",
          dateOfBirth: "",
        });
      }
    } catch (error) {
      console.log("Form not submitted.", error);
    }
  };

  const fullNamePreview = () => {
    const { firstName, lastName } = userInput;
    if (!firstName && !lastName) {
      return "Your full name appears here";
    }
    return `${firstName} ${lastName}`;
  };

  return (
    <>
      <div className="w-full h-auto bg-[#242424] flex justify-center items-center py-10">
        <div className="w-[90%] lg:w-[50%] h-full rounded-md shadow-md bg-sky-400">
          <form onSubmit={handleSubmit}>
            <h2 className="font-semibold text-white text-center my-4 text-3xl">
              Long Way Register
            </h2>
            {userInput.profilePic ? (
              <div
                onClick={handleProfilePic}
                className="w-[150px] h-[150px] rounded-full bg-white mx-auto my-10 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={userInput.profilePic}
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
                  id="firstName"
                  placeholder="Enter your first name"
                  value={userInput.firstName}
                  onChange={handleInputChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-1 border-2 focus:border-yellow-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={userInput.lastName}
                  onChange={handleInputChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-1 border-2 focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-white text-sm mt-4 mb-1">
                  Full Name (Preview)
                </label>
                <p className="opacity-70 font-bold text-white text-xl leading-relaxed border-2 border-white rounded-md px-2 py-1">
                  {fullNamePreview()}
                </p>
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Gender
                </label>
                <label className="font-bold text-white text-xl mr-6">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={userInput.gender === "female"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  Female
                </label>
                <label className="font-bold text-white text-xl mr-6">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={userInput.gender === "male"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  Male
                </label>
              </div>
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="DD/MMM/YYYY"
                  value={userInput.dateOfBirth}
                  onChange={handleInputChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-1 border-2 focus:border-yellow-400"
                />
              </div>
              <div>
                <label
                  htmlFor="maritalStatus"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  id="maritalStatus"
                  value={userInput.maritalStatus}
                  onChange={handleInputChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-2 border-2 focus:border-yellow-400"
                >
                  <option value="">Select</option>
                  <option value="unmarried">Un-married</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </section>
            <section className="my-6 px-4 py-1 bg-slate-500">
              <h3 className="font-medium text-white text-xl">
                Contact Information
              </h3>
              {/* email, phone, country, state, city, pincode */}
            </section>
            <section className="my-6 px-4 py-1 bg-slate-500">
              <h3 className="font-medium text-white text-xl">
                Security Related
              </h3>
              {/* id proof(pdf file), password, confirm password, describe yourself(optional) */}
              {/* captha using random hex color and user needs to match the color code, which also change the app background */}
            </section>

            {/* checkbox to agree the t and c */}
            {/* two button reset and submit */}
            <section className="my-6 px-4 py-1 flex justify-between items-center gap-x-8">
              <button
                type="reset"
                className="hover:bg-red-500 transition-colors duration-200 ease-linear flex flex-1 justify-center items-center rounded-md shadow-md p-2 text-white text-lg font-medium"
              >
                Reset
              </button>
              <button
                type="submit"
                className="hover:bg-green-500 transition-colors duration-200 ease-linear bg-blue-600 flex flex-1 justify-center items-center rounded-md shadow-md p-2 text-white text-lg font-medium"
              >
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
