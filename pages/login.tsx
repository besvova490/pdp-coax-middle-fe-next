import { useRouter } from "next/router";
import { useFormik } from "formik";

//layout
import AuthLayout from "src/layouts/AuthLayout";
import AuthFormLayout from "src/layouts/AuthFormLayout";

//components
import Button from "src/elements/Button";
import Input from "src/elements/Input";

//helpers
import auth from "src/helpers/api/auth";

//types
import { InterfaceLoginData } from "../src/types/api/auth";

function Login() {
  const router = useRouter();

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data: InterfaceLoginData) => {
      auth.login(data)
        .then(() => router.push("/"))
    },
  });

  const { email, password } = values;

  return (
    <AuthLayout>
      <AuthFormLayout onSubmit={handleSubmit}>
        <Input placeholder="Email" value={email} onChange={handleChange} name="email"/>
        <Input placeholder="Password" value={password} onChange={handleChange} name="password"/>
        <Button htmlType="submit">
          Login
        </Button>
      </AuthFormLayout>
    </AuthLayout>
  );
}

export default Login;

