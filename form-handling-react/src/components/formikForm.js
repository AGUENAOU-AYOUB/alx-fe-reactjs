import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function FormikForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(() => {
        alert('Registered successfully!')
        resetForm()
      })
      .catch(() => alert('Registration failed'))
      .finally(() => setSubmitting(false))
  }

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field id="username" name="username" />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}
