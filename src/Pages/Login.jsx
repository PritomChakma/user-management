import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Update last Login time
        const lastLoginTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastLoginTime };

        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .the((res) => res.json())
          .then((data) => {
            console.log("signin info update in db", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-[#80C4E9] p-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login Your Account</h1>
      </div>

      <div>
        <form onSubmit={handleLoginUser}>
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

          <div className="w-6/12 mx-auto mt-5 ">
            <button className="btn w-full bg-[#FF7F3E] text-white font-bold">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-bold my-3">
          if You Dont have Account? Please
          <Link className="text-[#4335A7]" to="/newuser">
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
