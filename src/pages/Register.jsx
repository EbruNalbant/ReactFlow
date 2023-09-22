import { Link, useNavigate } from "react-router-dom";
import InputArea from "../components/Header/InputArea";
import { saveToLocale, validate } from "../utils/helpers";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3090";

const Register = () => {
  const [img, setImg] = useState();
  const navigate = useNavigate();

  // formun gönderilme olayı
  const handleSubmit = (e) => {
    e.preventDefault();

    //form verisi oluşturma
    const form = new FormData(e.target);
    //form verilerini objeye çevirme
    const formData = Object.fromEntries(form.entries());
    //resmi stringe çevirme
    const strImage = imageToString(formData.image);
    //formu kontrol etme
    if (validate(formData) && strImage) {
      formData.id = v4();

      //kullanıcının resmini objeye ekleme
      formData.image = strImage;

      //kullanıcıyı veri tabanına ekleme
      uploadUser(formData);
    } else {
      toast.info("Please, fill out the form.", { autoClose: 2000 });
    }
  };

  //resmi stringe çevirme
  const imageToString = async (file) => {
    // dosya tipini doğrulama
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImg(reader.result);
      };
      return img;
    } else {
      toast.info("Please, choose a valid file type. Example: jpeg / png", {
        autoClose: 2000,
      });
      return null;
    }
  };

  //kullanıcıyı veri tabanına ekleme
  const uploadUser = (user) => {
    axios
      .post("/users", user)
      .then(() => {
        //kullanıcının id'sini local storage'a ekleme
        saveToLocale("token", user.id);
        // anasayfaya yönlendirme
        navigate("/home");
        toast.success("Your account has been created", { autoClose: 2000 });
      })
      .catch((err) => console.log(err));
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
                label={"Name"}
                type={"text"}
                name={"name"}
                holder={"example: ebru"}
              />
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
              <InputArea label={"Profile Image"} type={"file"} name={"image"} />
              <button className="w-full bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-sm">
                Sıgn Up
              </button>
              <p className="text-sm text-gray-400">
                Do you have an account?
                <Link className="mx-2 text-white" to={"/login"}>
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
