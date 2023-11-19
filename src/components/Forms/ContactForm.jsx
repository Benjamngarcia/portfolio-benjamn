import { useState, useEffect } from "react";
import {
  Box,
  Button,
  InputBase,
  InputLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    try {
      setLoadingEmail(true);
      const isValid = validateForm();
      await emailjs.send(serviceId, templateId, {
        name,
        email,
        message,
      });
      setEmailSent(true);
      if (isValid) {
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingEmail(false);
    }
  };

  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY), []);

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
        disabled={loadingEmail}
        sx={{
          borderRadius: "8px",
          textTransform: "none",
          padding: "12px",
        }}
        onClick={handleSubmit}
      >
        {!loadingEmail ? "Enviar mensaje" : <CircularProgress size={20} />}
      </Button>
      {emailSent && (
        <Alert severity="success">
          Tu email se ha enviado correctamente! Me contactaré contigo lo más
          pronto posible.
        </Alert>
      )}
    </Box>
  );
}
