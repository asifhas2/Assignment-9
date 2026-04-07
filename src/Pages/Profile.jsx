import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  console.log(user);
  const handelUpdateUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile(name, photo)
      .then(() => {
        console.log("update profile");
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(name, email, photo);
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold  mt-5 mb-5">My Profile</h1>
      <div className="space-y-9 md:flex gap-10 ">
        <div>
          <img className="w-[250px]" src={user?.photoURL} alt="" />
          <h1 className="text-3xl font-semibold">{user?.displayName}</h1>
          <p className="font-medium">{user?.email}</p>
        </div>
        <div className="border-1 border-gray-400 "></div>
        <div className="border w-full md:w-[50%] p-2">
          <h1 className="text-2xl font-semibold ">Update your profile </h1>
          <form onSubmit={handelUpdateUserProfile}>
            <fieldset className="fieldset">
              <label className="text-[16px]">Enter your new name :</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
              />
              <label className="text-[16px]">Enter your new photoURL:</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="your PhotoURL"
              />
              <button type="submit" className="btn   btn-neutral mt-4">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
