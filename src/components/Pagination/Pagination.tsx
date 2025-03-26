import imageArrowLeft from "../../assets/free-icon-left.png";
import imageArrowRight from "../../assets/free-icon-right.png";
import { Box, Button, ListItem } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Pagination = () => {
  const numbersButton = [1, 2, 3, 4, 5];
  const res = numbersButton.map((number) => {
    return (
      <ListItem key={`number: ${number}`}>
        <Button variant="outlined">{number}</Button>
      </ListItem>
    );
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Button>
            <ArrowBackIos />
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>{res}</Box>

        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button>
            {" "}
            <ArrowForwardIos />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Pagination;
