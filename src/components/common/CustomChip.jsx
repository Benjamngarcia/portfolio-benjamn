import React from "react";
import { Chip } from "@mui/material";
import { Colors } from "../../styles/theme";

export const CustomChip = ({ tech, isBigger }) => {
  return (
    <Chip
      label={tech}
      key={tech}
      variant="outlined"
      sx={{
        borderRadius: "8px",
        margin: !isBigger ? "8px 0px 0px 0px" : "0px 8px 8px 0px",
        borderColor: Colors.secondary,
        transition: "all 0.4s ease",
        "&:hover": {
          borderColor: Colors.secondaryDark,
          transform: "scale(1.1)",
        },
      }}
    />
  );
};
