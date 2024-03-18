import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomeForm from "./pages/WelcomeForm";
import LongForm from "./pages/LongForm/LongForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeForm />} />
        <Route path="/longForm" element={<LongForm />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}
