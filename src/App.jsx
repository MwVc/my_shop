import { Button, Container } from "@mui/material";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title += " - Home";
  });
  return (
    <Container maxWidth="xl" sx={{ background: "#fff" }}>
      <Button>Test</Button>
    </Container>
  );
}
