import React from "react";
import { Link, Box, Tooltip } from "@mui/material";

export const TechnologyCard = ({
  link,
  icon,
  color,
  name,
}) => {
  return (
    <Tooltip title={name} placement="top" arrow>
      <Link href={link} target="_blank">
        <Box
          sx={{
            color,
            height: "40px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "& svg": { width: "40px", height: "40px", strokeWidth: "1.2px" },
          }}
        >
          {icon}
        </Box>
      </Link>
    </Tooltip>
  );
};
