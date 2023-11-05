import { Button, Box, Typography } from "@mui/material";

export const ButtonSocial = ({
  iconComponent,
  iconCenter,
  fontBold,
  backgroundColor,
  paddingButton,
  textButton,
  descriptionButton,
  linkPage,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      target="_blank"
      variant="outlined"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& svg": { width: "44px", height: "44px", strokeWidth: "1.2px" },
          }}
        >
          {iconComponent}
        </Box>
        <Box sx={{ textAlign: "left", textTransform: "initial" }}>
          <Typography variant="body1" color="dark">
            {textButton}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descriptionButton}
          </Typography>
        </Box>
      </Box>
    </Button>
  );
};
