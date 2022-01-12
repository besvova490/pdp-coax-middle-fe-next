import { useState } from "react";

//layout
import AuthLayout from "src/layouts/AuthLayout";
import AuthFormLayout from "src/layouts/AuthFormLayout";

//components
import Button from "src/elements/Button";
import Input from "src/elements/Input";

function Register() {
  const [userName, setUserName] = useState<string>("");


  return (
    <AuthLayout>
      <AuthFormLayout>
        <Input placeholder="email" value={userName} onChange={e => setUserName(e.target.value)}/>
        <Input placeholder="first name" value={userName} onChange={e => setUserName(e.target.value)}/>
        <Input placeholder="last name" value={userName} onChange={e => setUserName(e.target.value)}/>
        <Input placeholder="user name" value={userName} onChange={e => setUserName(e.target.value)}/>
        <Input placeholder="password" value={userName} onChange={e => setUserName(e.target.value)}/>
        <Button>
          Login
        </Button>
      </AuthFormLayout>
    </AuthLayout>
  );
}

export default Register;

