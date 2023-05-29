import { Box } from "@chakra-ui/react";
import Logo from "./Logo.jsx";

function Header() {
  return (
    <header>
      <Box py={8}>
        <Logo />
      </Box>
    </header>
  );
}

export default Header;
