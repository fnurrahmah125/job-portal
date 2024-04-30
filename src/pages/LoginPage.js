import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let { email, password } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        let { token } = res.data;
        let { name, image_url, email } = res.data.user;
        let userData = { name, image_url, email };

        Cookies.set("token", token, { expires: 1 });
        Cookies.set("userData", JSON.stringify(userData), { expires: 1 });

        navigate("/");
      })
      .catch((error) => {
        setErrorMessage("Invalid username or password");
      });
  };

  return (
    <div className="h-screen px-4 py-32">
      <h1 className="text-center text-5xl mb-6">Login</h1>
      {errorMessage && (
        <Alert
          color="red"
          onDismiss={() => setErrorMessage("")}
          className="max-w-md mx-auto"
        >
          <span className="font-medium">Bad Request: </span>
          {errorMessage}
        </Alert>
      )}
      <form
        className="flex max-w-md flex-col gap-4 mx-auto mt-6"
        onSubmit={handleLogin}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@jobquest.com"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            min={8}
            name="password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" color="blue">
          Submit
        </Button>
      </form>
      <p className="text-center mt-8">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
