import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string().email("Invalid email").required("Emailis required"),
  password: Yup.string()
    .min(8, "Min 8 characters")
    .required("Password is required"),
});


function formikForm(){
    return(

        <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik submit:", values);
        resetForm();
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="space-y-3">
          <div>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: "crimson" }} />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "crimson" }} />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: "crimson" }} />
          </div>

          <button type="submit" disabled={!isValid || isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>

    );
}