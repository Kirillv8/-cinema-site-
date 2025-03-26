import { TextField, Button, FormControl } from "@mui/material";
const AuthorizationModal = () => {
  return (
    <div>
      <form id="authorizationForm">
        <FormControl>
          <TextField type="text" placeholder="User name" />
        </FormControl>
        <FormControl>
          <TextField type="email" placeholder="User email" />
        </FormControl>
        <FormControl>
          <TextField type="password" placeholder="User password" />
        </FormControl>
        <Button type="submit">Авторизоваться</Button>
      </form>
    </div>
  );
};

export default AuthorizationModal;
