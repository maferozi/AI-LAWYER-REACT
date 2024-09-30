import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/action/auth.action";

export default function Login() {
  const dispatch = useDispatch();
  const {error, loading, success} = useSelector(state=>state.auth);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    dispatch(loginRequest(values.email, values.password));
  };
  return (
    <div className="px-16 py-10 shadow-xl shadow-gray-300 rounded-md bg-white flex flex-col justify-center items-center gap-7">
      <div className="flex flex-col justify-center gap-1 items-center">
        <h2 className="text-2xl font-bold">Login to AI Lawyer</h2>
        <p className="font-thin text-[0.7rem]">
          Quick & Simple way to find your answer
        </p>
      </div>
      
      {success && (
            <div
              className="text-white bg-green-600 w-auto p-2 h-10 rounded-lg"
              role="alert"
              data-cy="login-error-message"
            >
              {success}
            </div>
          )} 
      {/* {error && error.message && (
            <div
              className="alert alert-danger"
              role="alert"
              data-cy="login-error-message"
            >
              {error.message}
            </div>
          )} */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className=" flex flex-col w-80  gap-6">
            <div className="text-sm">
              <div className="flex flex-col gap-1 p-2  border-gray-500 border border-opacity-25 hover:border-2 hover:border-opacity-50">
                <div className="flex gap-4 flex-row justify-between">
                  <label htmlFor="email" className="form-label font-semibold">
                    Email <span className="text-red-600"> *</span>
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                    data-cy="login-errorEmail"
                  />
                </div>
                <Field
                  type="email"
                  className="form-control outline-none"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  data-cy="login-email"
                />
              </div>
              <div className="flex flex-col gap-1 p-2  border-gray-500 border border-opacity-25 hover:border-2 hover:border-opacity-50">
                <div className="flex gap-4 flex-row justify-between">
                  <label
                    htmlFor="password"
                    className="form-label font-semibold"
                  >
                    Password <span className="text-red-600"> *</span>
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                    data-cy="login-errorPassword"
                  />
                </div>
                <Field
                  type="password"
                  className="form-control outline-none"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  data-cy="login-password"
                />
              </div>
            </div>

            <div className="flex  flex-row items-center justify-between">
              <p className=" text-xs opacity-75 ">New to AI lawyer</p>{" "}
              <Link
                className="font-semibold text-lg"
                data-cy="login-switch-button"
                to={"/register"}
              >
                Register
              </Link>
            </div>

            <button
              type="submit"
              className="w-[100%] h-14 bg-black text-white hover:shadow-lg hover:shadow-gray-500"
              data-cy="login-submit"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
