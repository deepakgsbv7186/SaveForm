import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({
  label,
  placeholder,
  password = false,
  type,
  errorMessage,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="my-4">
      <label
        htmlFor={label}
        className="block text-base text-white my-2 capitalize"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...rest}
          type={
            password ? (showPassword ? "text" : "password") : type || "text"
          }
          name={label}
          id={label}
          placeholder={placeholder}
          autoComplete="off"
          className="rounded-md py-1 px-2 text-xl w-full"
        />
        {password && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {errorMessage && (
        <div className="text-red-500 text-xs my-1">{errorMessage}</div>
      )}
    </div>
  );
}
