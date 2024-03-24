import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col gap-[2rem] justify-center items-center h-[100vh]">
      <h2 className="text-3xl text-white font-bold">404 | Page Not Found</h2>
      <Link to={"/login"} className="underline text-fuchsia-200 font-semibold">
        Go to Login
      </Link>
    </div>
  );
}
