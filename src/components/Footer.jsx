import { Box, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Box textAlign="center" pb={12}>
        <Text>
          Desarrollado con 💚 por{" "}
          <Link color="teal" href="https://byandrev-blog.vercel.app" target="_blank">
            Andres Parra
          </Link>
        </Text>
      </Box>
    </footer>
  );
}

export default Footer;
