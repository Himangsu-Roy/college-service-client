import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { saveUser } from "../api/users";
import { toast } from "react-hot-toast";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    signInWithFacebook,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //? Navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    // Submit the form or perform further actions
    console.log("Form submitted:", data);

    createUser(data.email, data.password)
      .then((result) => {
        // const createdUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            saveUser(result.user);
            toast.success("Registration Successful");
            navigate(from, { replace: true });
            console.log("User Profile Updated");
          })
          .catch((error) => {
            console.log("Error updating profile: ", error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message);
      });

    setError("");
    reset();
  };

  const handleGoogleLogin = () => {
    // Handle Google login action
    signInWithGoogle().then((result) => {
      const user = result.user;
      toast.success("Successful Login");
      saveUser(user);
      if (user) {
        navigate(from, { replace: true });
      }
    });
  };


  const handleFacebookLogin = () => {
    // Handle Google login action
    signInWithFacebook()
      .then((result) => {
        toast.success("Successful Login");
        console.log(result.user);
        // save user to db
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto mt-20 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          {/* <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          /> */}
          <p className="w-auto text-white h-7 sm:h-8">Register</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-800 dark:text-gray-200">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">Name is required.</p>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="emial"
              className="block text-sm text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">Email is required.</p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200">
                Password
              </label>
            </div>

            <div className="relative">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*\W)/,
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40  ${
                  errors.password ? "ring-2 ring-red-500" : ""
                }`}
              />
              <span
                className="absolute text-white transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
                onClick={handleTogglePassword}>
                {showPassword ? (
                  <MdOutlineVisibility />
                ) : (
                  <MdOutlineVisibilityOff />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                Password must be at least 6 characters long and contain at least
                one capital letter and special character.
              </p>
            )}
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <Link
            to="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
          </Link>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          <Link
            to="#"
            onClick={handleFacebookLogin}
            className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16">
              {" "}
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
            </svg>
          </Link>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


