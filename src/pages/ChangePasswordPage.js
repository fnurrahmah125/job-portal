import { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import Cookies from "js-cookie";

const ChangePasswordPage = () => {
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password: input.current_password,
          new_password: input.new_password,
          new_confirm_password: input.new_confirm_password,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } },
      )
      .then((res) => {
        setSuccessMessage("Password changed successfully.");
        setInput({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
        setErrorMessage("");
      })
      .catch((error) => {
        const responseString = error.response.data;
        const responseObject = JSON.parse(responseString);

        if (responseObject.hasOwnProperty("new_confirm_password")) {
          setErrorMessage(responseObject.new_confirm_password[0]);
        } else if (responseObject.hasOwnProperty("current_password")) {
          setErrorMessage(responseObject.current_password[0]);
        }
      });
  };

  return (
    <div className="px-4 py-6 md:py-12">
      <h1 className="mb-6 text-center text-3xl font-medium md:text-4xl">
        Change Password
      </h1>
      {errorMessage && (
        <Alert
          color="red"
          onDismiss={() => setErrorMessage("")}
          className="mx-auto max-w-md"
        >
          <span className="font-medium">Bad Request: </span>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert
          color="green"
          onDismiss={() => setSuccessMessage("")}
          className="mx-auto max-w-md"
        >
          <span className="font-medium">Success: </span>
          {successMessage}
        </Alert>
      )}
      <form
        className="mx-auto mt-6 flex max-w-md flex-col gap-4"
        onSubmit={handleChangePassword}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="current_password" value="Current password" />
          </div>
          <TextInput
            id="current_password"
            type="password"
            min={8}
            name="current_password"
            value={input.current_password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="new_password" value="New password" />
          </div>
          <TextInput
            id="new_password"
            type="password"
            min={8}
            name="new_password"
            value={input.new_password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="new_confirm_password"
              value="Confirm New password"
            />
          </div>
          <TextInput
            id="new_confirm_password"
            type="password"
            min={8}
            name="new_confirm_password"
            value={input.new_confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" color="blue">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
