import { Button } from "@mui/material";

export const ButtonLink = ({ iconComponent, backgroundColor, textButton, ...rest }) => {
  return (
    <Button
      {...rest}
      startIcon={iconComponent}
      target="_blank"
      sx={{
        padding: "16px",
        fontWeight: "bold",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "8px",
        backgroundColor: backgroundColor,
      }}
    >
      {textButton}
    </Button>
  );
};
