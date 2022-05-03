import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a bigger email")
    ./* required */ required("Why not fill this email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),

  password: yup.string().min(5).max(10).required("Why not fill this password"),
});

export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { email: "Naveen", password: "abc" },

      validationSchema: formValidationSchema,

      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"       
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      {errors.email && touched.email && errors.email}
      <input
        name="password"
        id="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && touched.password && errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}
