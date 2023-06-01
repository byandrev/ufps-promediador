import { Container, Divider, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import TableSubjects from "./components/TableSubjects.jsx";
import Footer from "./components/Footer.jsx";
import ModalForm from "./components/ModalForm.jsx";
import Result from "./components/Result.jsx";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.lg">
      <Header />

      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Result />
      <Divider my={5} />
      <TableSubjects openModal={onOpen} />
      <Divider my={10} />
      <Footer />
    </Container>
  );
}

export default App;
