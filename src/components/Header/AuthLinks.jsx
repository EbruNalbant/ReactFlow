import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <>
      <Link
        className="px-4 lg:px-5 font-medium rounded-lg py-2 lg:py-2.5 mr-2 hover:bg-gray-700 "
        to={"/login"}
      >
        Log In
      </Link>
      <Link
        className="bg-blue-700 hover:bg-blue-800 font-medium px-4 lg:px-5 py-2 mr-2 rounded-lg"
        to={"/register"}
      >
        Lets Get Started
      </Link>
    </>
  );
};

export default AuthLinks;
