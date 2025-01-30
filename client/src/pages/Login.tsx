import { useFormik } from "formik";
import { loginSchema } from "../schemas/login.schema";
import { Link } from "react-router-dom";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="h-[calc(100vh-1200px)] hero">
      <div className="hero-content flex-col max-w-lg w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <p className="text-base-content/70">
            Sign in to your account to continue
          </p>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.email && formik.errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.email}
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    name="password"
                    className="grow"
                    value={formik.values.password}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.password && formik.errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.password}
                    </span>
                  </label>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
