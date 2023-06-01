import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo.jsx";
import Result from "./Result.jsx";

function Header() {
  return (
    <header>
      <Flex justifyContent="space-between" alignItems="center">
        <Box py={8}>
          <Logo />
        </Box>

        <Result />
      </Flex>
    </header>
  );
}

export default Header;
