import { Button } from "@mui/material";

export const ButtonLink = ({
  iconComponent,
  iconCenter,
  fontBold,
  backgroundColor,
  paddingButton,
  textButton,
  ...rest
}) => {
  return (
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
      }}
    >
      {textButton}
    </Button>
  );
};
