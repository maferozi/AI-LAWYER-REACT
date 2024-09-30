import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registerRequest } from "../../redux/action/auth.action";
import Swal from "sweetalert2";


export default function Register(){
    const { error, loading, success}=useSelector((state)=>state.auth);
    const dispatcher = useDispatch();
  
    const initialValues = {
        email: "",
        password: "",
        username: "",
        password: "",
        confirmPassword: "",
      };
    
      const validationSchema = Yup.object({
        email: Yup.string()
          .email('Enter a valid email')
          .required('Email is required'),
        username: Yup.string().trim().required('Username required'),
    password: Yup.string()
      .trim()
      .required('Password required')
      .min(8, 'Minimum 8 char required')
      .max(100, 'Maximum 100 char.')
      .matches(/[A-Z]/,'Must Contain uppercase Alphabet')
      .matches(/[a-z]/, 'Must contain lowercase Alphabet')
      .matches(/\d/, 'Must contain a digit')
      .matches(
        /[@$!%*?&#]/,
        'Must contain a symbol',
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], 'Password Must Match')
      .required('Confirm password required'),
      });
    
      const onSubmit = values => {
        dispatcher(registerRequest(values));
      };
      return (
        <div className="px-16 py-10 shadow-xl shadow-gray-300 rounded-md bg-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center gap-1 items-center">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="font-thin text-[0.7rem]">Register to solve your query</p>
          </div>
          {/* {success && (
            <div
              className="text-white bg-green-600 w-auto p-2 h-10 rounded-lg"
              data-cy="login-success-message"
            >
              {success}
            </div>
          )}  */}
          {/* {error && error.message && (
            <div
            className="text-red-950 font-semibold shadow-lg shadow-red-500 bg-red-100 w-auto p-2 h-10 rounded-lg"            
            data-cy="login-error-message"
          >
              {error.message}
            </div>
          )}  */}
          
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
                  <label htmlFor="username" className="form-label font-semibold">
                    Username <span className="text-red-600"> *</span>
                  </label>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-600"
                    data-cy="login-error-username"
                  />
                  </div>
                  <Field
                    type="text"
                    className="form-control outline-none"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    data-cy="login-username"
                  />
                  
                </div>
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
                  <label htmlFor="password" className="form-label font-semibold">
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
                    placeholder="Enter Password"
                    data-cy="login-password"
                  />
                </div>


                <div className="flex flex-col gap-1 p-2  border-gray-500 border border-opacity-25 hover:border-2 hover:border-opacity-50">
                <div className="flex gap-4 flex-row justify-between">
                  <label htmlFor="confirmPassword" className="form-label font-semibold">
                    Confirm Password <span className="text-red-600"> *</span>
                  </label>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600"
                    data-cy="login-error-confirmPassword"
                  />

                  </div>
                  <Field
                    type="password"
                    className="form-control outline-none"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    data-cy="login-confirmPassword"
                  />
                </div>
                </div>
                   
                  <div className="flex  flex-row items-center justify-between">
                    <p className=" text-xs opacity-75 ">Already have a account</p> <Link className="font-semibold text-lg" data-cy="login-switch-button" to={"/login"}>Login</Link>
                  </div>
                
                <button
                  type="submit"
                  className="w-[100%] h-14 bg-black text-white hover:shadow-lg hover:shadow-gray-500"
                  data-cy="login-submit"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      );
    };

    
