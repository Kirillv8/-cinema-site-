import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField, FormControl } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AuthorizationModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>You already have an account?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form id="authorizationForm">
            <FormControl fullWidth>
              <TextField
                id="standard-password-input"
                label="Request a token"
                type="password"
                autoComplete="current-password"
                variant="standard"
                placeholder="Mail"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit" variant="contained">
                  Request
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
              </Box>
            </FormControl>
          </form>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
};

const ChildModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Enter token</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <form id="authorizationForm">
            <FormControl fullWidth>
              <TextField
                id="standard-password-input"
                label="Enter token"
                type="password"
                autoComplete="current-password"
                variant="standard"
                placeholder="Token"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit" variant="contained">
                  Enter token
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Will come back
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default AuthorizationModal;
