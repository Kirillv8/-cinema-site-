// import './styles/components/reg-modal-container.scss';
import { ChangeEvent, FormEvent, useState } from "react";
import { FormControl, TextField, Button, FormHelperText } from "@mui/material";

interface PropForRegistration {
  isVisibleReg: boolean;
}

const RegistrationModal: React.FC<PropForRegistration> = ({ isVisibleReg }) => {
  const [userEmailAndPasswordAndName, setUserEmailAndPasswordAndName] =
    useState({
      email: "",
      password: "",
      name: "",
    });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    if (userEmailAndPasswordAndName.email.length < 4) {
      setEmailError("Your email must contain at least four characters.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmailAndPasswordAndName.email)) {
      setEmailError("Please enter correct e-mail.");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (userEmailAndPasswordAndName.password.length < 8) {
      setPasswordError("The password must be at least eight characters long.");
      return false;
    }
    if (userEmailAndPasswordAndName.password.length > 30) {
      setPasswordError(
        "The password must be no more than thirty characters long."
      );
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log(`Login: ${userEmailAndPasswordAndName.email}`);
      console.log(`Password: ${userEmailAndPasswordAndName.password}`);
    }
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmailAndPasswordAndName({
      ...userEmailAndPasswordAndName,
      name: event.target.value,
    });
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmailAndPasswordAndName({
      ...userEmailAndPasswordAndName,
      email: event.target.value,
    });
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmailAndPasswordAndName({
      ...userEmailAndPasswordAndName,
      password: event.target.value,
    });
  };

  return (
    <form id="registrationForm" onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          type="email"
          autoComplete="on"
          id="outlined-controlled"
          label="User email"
          variant="outlined"
          value={userEmailAndPasswordAndName.email}
          onChange={handleChangeEmail}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          autoComplete="on"
          id="outlined-controlled"
          label="User name"
          variant="outlined"
          value={userEmailAndPasswordAndName.name}
          onChange={handleChangeName}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="password"
          autoComplete="on"
          id="outlined-controlled"
          label="User password"
          variant="outlined"
          value={userEmailAndPasswordAndName.password}
          onChange={handleChangePassword}
        />
      </FormControl>
    </form>
  );
};

export default RegistrationModal;
