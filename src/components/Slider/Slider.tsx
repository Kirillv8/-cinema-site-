import { Slider, Typography } from "@mui/material";
import { useState } from "react";

const SliderComponent = () => {
  const [value, setValue] = useState<number[]>([1950, 1980]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <Typography>Release year</Typography>
      <Slider
        value={value}
        min={1950}
        step={1}
        max={2025}
        onChange={handleChange}
        getAriaLabel={() => "Release year range"}
        valueLabelDisplay="on"
      />
    </>
  );
};

export default SliderComponent;
