import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .trim()
    .min(8, "Al least 8 characters.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Please enter valid password."
    )
    .required("Password is required."),
});

export default function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => handleFormSubmit(values),
    });

  const handleFormSubmit = (values) => {
    console.log("handdle", values);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-slate-700 rounded-md shadow-md lg:w-3/12 md:w-6/12 w-[90%]">
        <form onSubmit={handleSubmit}>
          <Input
            label={"email"}
            placeholder={"abc@email.com"}
            type={"email"}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email && touched.email ? errors.email : null}
          />
          <Input
            label={"password"}
            placeholder={"your password here..."}
            type={"password"}
            password
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors.password && touched.password ? errors.password : null
            }
          />
          <div className="my-6">
            <button
              type="submit"
              className="text-xl text-white font-semibold text-center bg-slate-500 p-1 w-full rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <span className="text-base text-white">
            Didn't have account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
