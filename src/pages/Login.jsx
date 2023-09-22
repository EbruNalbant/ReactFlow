import { Link } from "react-router-dom";
import InputArea from "../components/Header/InputArea";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-gray-900 ">
      {/* middle area */}
      <div className="h-screen flex flex-col items-center justify-center px-6  py-8 mx-auto lg:py-0">
        <Link className="flex items-center mb-6 text-2xl">
          <img className="w-8 h-8 mr-2" src="/logo.svg" />
          <span className=" text-2xl text-white font-semibold">Flow</span>
        </Link>
        {/* form area */}
        <div className="w-full text-white bg-gray-800 border border-gray-700 rounded-lg shadow sm:max-w-md ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold ">Flow</h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <InputArea
                label={"Email"}
                type={"email"}
                name={"email"}
                holder={"name@company.com"}
              />
              <InputArea
                label={"Password"}
                type={"password"}
                name={"password"}
                holder={"••••••••"}
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-sm">
                Login In
              </button>
              <p className="text-sm text-gray-400">
                Don't have an account?
                <Link className="mx-2 text-white" to={"/register"}>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
