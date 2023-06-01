import { Image } from "@chakra-ui/react";
import LogoImage from "../assets/logo.png";

function Logo() {
  return (
    <div>
      <Image
        src={LogoImage}
        alt="logo de ufps promediador"
        w={{ base: "150px", sm: "200px" }}
        ml={-4}
      />
    </div>
  );
}

export default Logo;
