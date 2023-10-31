import React from "react";
import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";
import Image from "next/image";
import MainImage from "../../assets/img/main-memoji.png";

export const MemojiMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: Colors.secondary,
        width: "88px",
        height: "88px",
        borderRadius: "50%",
        padding: "8px",
        filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4))",
      }}
    >
      <Image
        width={72}
        height={72}
        component="img"
        alt="Benjamín Arturo Pérez García desarrollador web"
        src={MainImage.src}
      />
    </Box>
  );
};
