import { Box, Button, ListItem } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Pagination = () => {
  const numbersButton = [1, 2, 3, 4, 5];

  const res = numbersButton.map((number) => {
    return (
      <ListItem
        key={`number: ${number}`}
        sx={{ padding: "2px", width: "auto" }}
      >
        <Button variant="outlined" size="small">
          {number}
        </Button>
      </ListItem>
    );
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Button size="small">
        <ArrowBackIos fontSize="small" />
      </Button>

      <Box sx={{ display: "flex", gap: 1 }}>{res}</Box>

      <Button size="small">
        <ArrowForwardIos fontSize="small" />
      </Button>
    </Box>
  );
};

export default Pagination;
