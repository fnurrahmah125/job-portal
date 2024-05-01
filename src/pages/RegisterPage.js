import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    let { name, image_url, email, password } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen border-y border-neutral-200 px-4 py-20">
      <h1 className="mb-6 text-center text-5xl">Register</h1>
      <form
        className="mx-auto flex max-w-md flex-col gap-4"
        onSubmit={handleRegister}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="name"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Your image url" />
          </div>
          <TextInput
            id="image"
            type="text"
            placeholder="https://placehold.co/600x400"
            name="image_url"
            value={input.image_url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
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
      <p className="mt-8 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
