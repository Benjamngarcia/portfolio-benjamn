import { Button } from "@mui/material";
import Link from "next/link";

export const ButtonLink = ({
  iconComponent,
  iconCenter,
  fontBold,
  backgroundColor,
  paddingButton,
  textButton,
  linkPage,
  ...rest
}) => {
  return linkPage ? (
    <Link {...rest} className="link-button">
      {iconComponent}
      {textButton}
    </Link>
  ) : (
    <Button
      {...rest}
      startIcon={iconComponent}
      target="_blank"
      sx={{
        padding: paddingButton ? "16px" : "auto",
        fontWeight: fontBold ? "bold" : "auto",
        width: "100%",
        display: "flex",
        justifyContent: iconCenter ? "center" : "flex-start",
        borderRadius: "8px",
        backgroundColor: backgroundColor,
        transition: "all 0.3s ease",
        "&:hover": {
          scale: "1.03",
        },
      }}
    >
      {textButton}
    </Button>
  );
};
