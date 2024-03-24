import axios from "axios";
import { MdOutlineLockPerson } from "react-icons/md";
import { ENDPOINT } from "../endpoints";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function () {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(ENDPOINT.logout, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData?.token,
        },
      });

      if (response?.status === 200) {
        toast.success("Logout successful");
        setUserData(null);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Logout failed.");
      console.log(error, "Logout failed");
    }
  };
  return (
    <>
      <div className="bg-slate-300 m-2 p-3 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-black">
            Authentication with JWT
          </h2>
          <MdOutlineLockPerson
            size={30}
            className="text-xl text-black"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
}
