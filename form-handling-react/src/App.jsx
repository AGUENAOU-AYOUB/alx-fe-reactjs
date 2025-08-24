import RegistrationForm from './components/RegistrationForm.jsx'
import FormikForm from './components/formikForm.js'

function App() {
  return (
    <div>
      <h1>Registration Form (Controlled Components)</h1>
      <RegistrationForm />
      <h1>Registration Form (Formik)</h1>
      <FormikForm />
    </div>
  )
}

export default App
