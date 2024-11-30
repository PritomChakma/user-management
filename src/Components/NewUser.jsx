import React from "react";

const NewUser = () => {
  return (
    <div className=" bg-[#80C4E9] p-10 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold">New User</h1>
        <p className="space-y-3">User the below form to create a new Account</p>
      </div>

      <div className="">
        <form >
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
            <button className="btn w-full bg-[#FF7F3E] text-white font-bold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
