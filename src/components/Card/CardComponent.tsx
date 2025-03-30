import { Card, CardContent, Typography } from "@mui/material";

const CardComponent = () => {
  return (
    <>
      <Card sx={{ maxWidth: 300, padding: 2 }}>
        <CardContent>
          <Typography variant="h4">Title</Typography>
          <Typography variant="h6">Deskription</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
