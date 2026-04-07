import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const ForgatePassword = () => {
  const { ForgatePassword } = use(AuthContext);

  const handelForgatePassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    ForgatePassword(email)
    .then((result)=>{
        toast("forgot password successful,check your email")
        console.log("forgot password successful");
    })
    .catch(error=>{
        console.log(error.message);
    })
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col space-y-4 justify-center items-center">
        <h1 className="text-2xl font-bold mt-10 text-center">
          Forgot your password
        </h1>

        <form onSubmit={handelForgatePassword} className="w-75">
          <fieldset className="fieldset">
            <label className="label">Enter your email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <button type="submit" className="btn btn-neutral mt-4">Forgot password</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgatePassword;
