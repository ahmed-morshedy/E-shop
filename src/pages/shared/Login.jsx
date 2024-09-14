/* eslint-disable no-unused-vars */
import React, { act, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../Api/shopServer";
import { AuthContext } from "../../hooks/UserContext";

function Login() {
  const { saveAuthenticationData, authenticationData } =
    useContext(AuthContext);

  if (authenticationData) {
    window.location.href = "/products";
  }

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setError(null);
    setLoading(true);

    try {
      const authData = await login(data.username, data.password);

      saveAuthenticationData(authData.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  document.title = "Login";

  return (
    <>
      <div className="min-h-screen  justify-center items-center bg-background p-3 flex ">
        <div className=" rounded-2xl shadow-2xl border p-6 mt-8 flex flex-col justify-center items-center md:w-fit">
          <div className="border border-blue-900 w-full max-w-lg transform rounded-xl">
            <h1 className="text-4xl font-bold text-center text-blue-900  p-2 md:p-12">
              Welcome to E-Shop
            </h1>
          </div>
          <div>
            <form className="space-y-8 mt-20" onSubmit={handleSubmit(onSubmit)}>
              {" "}
              {error && (
                <div className="mb-4 py-4 px-8 border bg-red-100 border-red-600 text-red-600 rounded-xl animate-pulse">
                  <p>{error}</p>
                </div>
              )}
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  {...register("username")}
                  value={"mor_2314"}
                />
                {errors.username && (
                  <p className="mt-2 text-red-600">{errors.username.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                  {...register("password")}
                  value={"83r5^_"}
                />
                {errors.password && (
                  <p className="mt-2 text-red-600">{errors.password.message}</p>
                )}
              </div>{" "}
              <button
                disabled={loading}
                type="submit"
                className="w-full mt-5 bg-gradient-to-l from-teal-400 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:from-teal-500 hover:to-blue-600 focus:ring-4 focus:ring-teal-300 focus:outline-none flex justify-center items-center font-semibold text-xl transition-transform duration-300 transform hover:scale-105"
              >
                {loading ? (
                  <span
                    className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"
                    role="status"
                  ></span>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
