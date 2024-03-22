import { MdOutlineLockPerson } from "react-icons/md";

export default function () {
  return (
    <>
      <div className="bg-slate-300 m-2 p-3 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-black">
            Authentication with JWT
          </h2>
          <MdOutlineLockPerson size={30} className="text-xl text-black" />
        </div>
      </div>
    </>
  );
}
