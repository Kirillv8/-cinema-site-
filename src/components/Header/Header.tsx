import AppBar from "@mui/material/AppBar";
import { Box, Typography, Toolbar, Button } from "@mui/material";

interface PropHeader {
  handleClick: () => void;
}

const Header: React.FC<PropHeader> = ({ handleClick }) => {
  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Фильмы
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" variant="outlined">
              Вход
            </Button>
            <Button color="inherit" variant="outlined" onClick={handleClick}>
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
