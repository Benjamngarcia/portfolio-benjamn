import React from "react";
import { Link, Box, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export const TechnologyCard = ({
  link,
  icon,
  color,
  backgroundColor,
  name,
}) => {
  return (
    <LightTooltip title={name} placement="top" arrow>
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
    </LightTooltip>
  );
};
