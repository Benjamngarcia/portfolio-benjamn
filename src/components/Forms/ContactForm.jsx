import { useState } from "react";
import { Box, Button, InputBase, InputLabel, FormControl } from "@mui/material";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: name.trim() === "",
      email: !validateEmail(email),
      message: message.trim() === "",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));

    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Message: ", message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        gap: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <InputBase
          id="name"
          placeholder="Benjamín García"
          onChange={(e) => handleInputChange(e, "name")}
          type="text"
          error={errors.name}
          fullWidth
        />
      </Box>
      <Box>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputBase
          id="email"
          placeholder="benjamngarcia@example.net"
          onChange={(e) => handleInputChange(e, "email")}
          type="email"
          error={errors.email}
          fullWidth
        />
      </Box>
      <Box>
        <InputLabel htmlFor="message">Mensaje</InputLabel>
        <InputBase
          id="message"
          placeholder="Chismeame lo que quieras aquí..."
          multiline
          minRows={4}
          maxRows={6}
          onChange={(e) => handleInputChange(e, "message")}
          error={errors.message}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: "8px",
          textTransform: "none",
          padding: "12px",
        }}
        onClick={handleSubmit}
      >
        Enviar mensaje
      </Button>
    </Box>
  );
}
