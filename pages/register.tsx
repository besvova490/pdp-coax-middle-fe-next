import { useRouter } from "next/router";
import { useFormik } from "formik";
import { toast } from "react-toastify";

//layout
import AuthLayout from "src/layouts/AuthLayout";
import AuthFormLayout from "src/layouts/AuthFormLayout";

//components
import Button from "src/elements/Button";
import Input from "src/elements/Input";

// helpers
import auth from "src/helpers/api/auth";

// types
import { InterfaceRegisterData } from "src/types/api/auth";

function Register() {
  const router = useRouter();

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (data: InterfaceRegisterData) => {
      auth.register(data)
        .then(() => {
          router.push("/login");
          toast.success("New User has been created");
        })
        .catch(e => toast.error(e.details))
    },
  });

  const { email, password, name } = values;


  return (
    <AuthLayout>
      <AuthFormLayout onSubmit={handleSubmit}>
        <Input placeholder="Email" value={email} onChange={handleChange} name="email"/>
        <Input placeholder="Name" value={name} onChange={handleChange} name="name"/>
        <Input placeholder="password" value={password} onChange={handleChange} name="password"/>
        <Button>
          Login
        </Button>
      </AuthFormLayout>
    </AuthLayout>
  );
}

export default Register;

