import { Link, useNavigate, useNavigation } from "react-router-dom";
import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Minimum two characters required.")
    .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed.")
    .required("Name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .trim()
    .min(8, "At least 8 characters.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Please enter valid password."
    )
    .required("Password is required."),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("Confirm Password is required."),
});

export default function Register() {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4004/api/auth/register",
        data: {
          name: values.name,
          email: values.email,
          password: values.confirmpassword,
        },
      });

      if (response?.status === 201) {
        toast.success("User created successfully.");
        console.log(response?.data);
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.log("Form not sumbmitted.", error);
      toast.error("Form not submitted.");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-slate-700 rounded-md shadow-md lg:w-3/12 md:w-6/12 w-[90%]">
        <form onSubmit={handleSubmit}>
          <Input
            label={"name"}
            placeholder={"your name is..."}
            maxLength={50}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.name && touched.name ? errors.name : null}
          />
          <Input
            label={"email"}
            placeholder={"abc@email.com"}
            type={"email"}
            maxLength={50}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email && touched.email ? errors.email : null}
          />
          <Input
            label={"password"}
            placeholder={"your password here..."}
            type={"password"}
            maxLength={50}
            password
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors.password && touched.password ? errors.password : null
            }
          />
          <Input
            label={"confirmpassword"}
            placeholder={"confirm your password..."}
            type={"password"}
            maxLength={50}
            password
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors.confirmpassword && touched.confirmpassword
                ? errors.confirmpassword
                : null
            }
          />
          <div className="my-6">
            <button
              type="submit"
              className="text-xl text-white font-semibold text-center bg-slate-500 p-1 w-full rounded-md"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <span className="text-base text-white">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
