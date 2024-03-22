import React from "react";
import { IMG } from "../assets";

export default function Sidebar() {
  return (
    <div className="w-2/12 h-screen bg-slate-600">
      <div>
        <img
          src={IMG.logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
        <div className="p-2 m-2 bg-slate-300 rounded-md">
          <h2 className="font-semibold text-center">Welcome Admin</h2>
        </div>
      </div>
    </div>
  );
}
