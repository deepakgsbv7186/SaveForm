import React, { useState } from "react";
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
        setUserInput({ ...userInput, profilePic: reader?.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleGenderChange = (e, gender) => {
    e.preventDefault();
    setUserInput({ ...userInput, gender: gender });
  };
  const handleMaritalStatusChange = (e) => {
    setUserInput({ ...userInput, maritalStatus: e.target.value });
  };
  const fullNamePreview = () => {
    if (!userInput?.firstName && !userInput?.lastName) {
      return "your full name appears here";
    }
    return `${userInput?.firstName} ${userInput?.lastName}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };
  return (
    <>
      <div className="w-full h-auto bg-[#242424] flex justify-center items-center py-10">
        <div className="w-[90%] lg:w-[50%] h-full rounded-md shadow-md bg-sky-400">
          <form action="">
            <h2 className="font-semibold text-white text-center my-4 text-3xl">
              Long Way Register
            </h2>
            {userInput?.profilePic ? (
              <div
                onClick={handleProfilePic}
                className="w-[150px] h-[150px] rounded-full bg-white mx-auto my-10 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={userInput?.profilePic}
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
                  id="firstName"
                  placeholder="enter your first name"
                  value={userInput?.firstName}
                  onChange={handleTextChange}
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
                  id="lastName"
                  name="lastName"
                  placeholder="enter your last name"
                  value={userInput?.lastName}
                  onChange={handleTextChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-1 border-2 focus:border-yellow-400"
                />
              </div>
              <div>
                <label
                  //   htmlFor="fullName"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Full Name (Preview)
                </label>
                <p
                  //   id="fullName"
                  className="opacity-70 font-bold text-white text-xl leading-relaxed border-2 border-white rounded-md px-2 py-1"
                >
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
                <button
                  id="gender"
                  name="gender"
                  onClick={(e) => handleGenderChange(e, "female")}
                  className={`${
                    userInput?.gender === "female" && "bg-pink-400"
                  } text-lg font-semibold text-white border-2 border-pink-400 rounded-md shadow-md px-1 py-1 mr-4`}
                >
                  Female
                </button>
                <button
                  id="gender"
                  name="gender"
                  onClick={(e) => handleGenderChange(e, "male")}
                  className={`${
                    userInput?.gender === "male" && "bg-blue-600"
                  } text-lg font-semibold text-white border-2 border-blue-600 rounded-md shadow-md px-1 py-1 mr-4`}
                >
                  Male
                </button>
              </div>
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-white text-sm mt-4 mb-1"
                >
                  Date Of Brith
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="DD/MMM/YYYY"
                  value={userInput?.dateOfBirth}
                  onChange={handleTextChange}
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
                  value={userInput?.maritalStatus}
                  onChange={handleMaritalStatusChange}
                  className="font-bold text-white text-xl leading-relaxed placeholder:text-slate-300 placeholder:font-normal bg-transparent rounded-md outline-none w-full px-2 py-2 border-2 focus:border-yellow-400"
                >
                  <option className="bg-slate-400" label="Select" value={""} />
                  <option
                    className="bg-slate-400"
                    label="Un-married"
                    value={"unmarried"}
                  />
                  <option
                    className="bg-slate-400"
                    label="Married"
                    value={"married"}
                  />
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
                onClick={handleSubmit}
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
