import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Provider/AuthProvider";

const NewUser = () => {
  const { createUser } = useContext(AuthContext);

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { name, email, createdAt };
        // save new user in DataBase
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("create user in DB", data);
            if (data.insertedId) {
              Swal.fire({
                title: "success",
                text: "Scucessfully Saved",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div className=" bg-[#80C4E9] p-10 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold">New User</h1>
        <p className="space-y-3">User the below form to Registration for new Account</p>
      </div>

      <div>
        <form onSubmit={handleUser}>
          <div className="w-6/12 mx-auto">
            <label className="label ">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="You Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-6/12 mx-auto">
            <label className="label ">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-6/12 mx-auto">
            <label className="label ">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter a Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex justify-center gap-5">
            {/* Gender Selector */}
            <div className=" space-y-5">
              <label className="font-semibold">Gender: </label>
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Status Selector */}
            <div className="space-y-5">
              <label className="font-semibold">Status: </label>
              <select>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="w-6/12 mx-auto mt-5 ">
            <button className="btn w-full bg-[#FF7F3E] text-white font-bold">
              Save
            </button>
          </div>
        </form>
        <p className="text-center font-bold my-3">
         You have an Account? Please{" "}
          <Link className="text-[#4335A7]" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewUser;
