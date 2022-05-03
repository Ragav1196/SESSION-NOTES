import { useFormik } from "formik";
// YUP
import * as yup from "yup";
/* "*" is given to sya import everything from schema */

// COMMENTED CODE
// const validateForm = (values) => {
// 	/* it takes an object which contains the values of the input field this value is not given maually it is given by the formik */

// 	const errors = {};
// 	console.log("validaeForm", values);

// 	if (values.email.length < 5) {
// 		errors.email = "PLEASE PROVIDE A LONGER EMAIL";
// 	} else if (
// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
// 		/* !/^[A-Z0-9._%+-"before @ it should have only charaters, digits and mentioned symbols like this we have mentioned rules"]+@[A-Z0-9.-]+\.[A-Z]{2,"this is that it should have minimum of two characters"}$/i.test(values.email) */
// 		/* for this to understand compltely learn regex */
// 	)
// 		if (values.password.length < 8) {
// 			errors.password = "PLEASE PROVIDE A LONGER PASSWORD";
// 		} else if (values.password.length > 12) {
// 			errors.password = "PLEASE PROVIDE A SHORTER PASSWORD";
// 		}
// 	console.log(errors);
// 	return errors;
// 	/* if there is any error(i.e if the error object has any values) then the onSubmit function will not be called 
//         only when the errors object is empty the onsubmit function will be called */
// };
// END

// YUP:
const formValidationSchema = yup.object({
	// email: yup.string()./* data type has to be mentioned */ min(5),
	/* this automatically provides a error message for the given validation no need to specify */

	email: yup
		.string()
		.min(5, "Need a bigger email")
		./* required */ required("Why not fill this email")
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),
	/* we can also give our own custom message */
	/* 	required will make the field compulsory to fill
		we can also give cutom message to this also */

	password: yup.string().min(5).max(10).required("Why not fill this password"),
});

export function BasicForm() {
	/* USE FORMIK: */
	const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
		useFormik({
			initialValues: { email: "Naveen", password: "abc" },
			// first arguement is initial value

			/* validate: validateForm, */
			// onSubmit first check the validation

			// YUP:
			/* we are going to use yup to implement the validate */
			validationSchema: formValidationSchema,

			onSubmit: (values) => {
				console.log("onSubmit", values);
			},
		});

	return (
		<form onSubmit={handleSubmit}>
			{/* onSubmit is also assigned to to handle
            so when submit button is pressed first validate function in "BasicForm" is called and it checks for the validation
            only after the validate function is satisfied the onSubmit function will be called */}
			<input
				value={values.email}
				/* we are assigning the above "initialValues" to this input field as initial value */

				/* we can be able to type anything on the input filed for now this is because of the values attribute
            if we want to overwite the deafult value we need to use the "setState" and "onChange" */

				// TO MAKE CHANGES IN THE INPUT FIELD
				onChange={handleChange}
				/* this will take care of creating the setState and allows any changes to the input field */

				/* we will be getting error if we make any changes in the input field to avoid that we need to add name and id attribute to the field */

				/* ONBLUR: */
				onBlur={handleBlur}
				/* when outside input field is touched this function is called */
				name="email"
				id="email"
				/* id and name is important for the formik to know that this is the variable that it has to update */
				type="email"
				placeholder="Enter your email"
			/>
			{/* ONBLUR: */}
			{/* {errors.email && touched.email && errors.email} */}
			{/* 	if "errors.email && touched.email" is true then print errors.email this is what above code is executing */}
			{/* 	onBlur is helping here to alert the error statement when outside input field is touched with an error */}
			{errors.email && touched.email ? errors.email : ""}
			{/* 	above line is briefed here */}
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
			{/* this display the error on the screen only when the user touches outside the input field(thats why "formik.touched.password" is given) */}
			<button type="submit">Submit</button>
			{/* "type" has to be given for the formik to know that this is a submit button */}
		</form>
	);
}
