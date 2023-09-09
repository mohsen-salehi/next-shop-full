import Layout from "@/components/Layout";
import { Form, Formik } from "formik";
import { loginValidation } from "./schema/validation";
import InputValidation from "@/components/inputs/inputValidation";

function Login() {
  const initialValue = {
    email: "",
    password: "",
  };
  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values));
    actions.setSubmiting();
  };

  return (
    <Layout title="Login">
      <section className="mx-auto max-w-screen-md flex justify-center  p-2">
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={loginValidation}
        >
          {(props) => (
            <Form className="flex flex-wrap border justify-center w-full md:w-1/2 rounded-xl  bg-white p-10">
              <h2 className="w-full text-center mb-3">Login </h2>
              <InputValidation name="email" type="email" placeholder="Email" />
              <InputValidation
                name="password"
                type="password"
                placeholder="Password"
              />
              <button className="bg-slate-500 active:scale-95  duration-100 w-full m-0 mt-4 rounded-xl p-2 ">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  );
}

export default Login;
