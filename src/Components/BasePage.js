import { Box, Container } from "@chakra-ui/react";
import FadeIn from './FadeIn';
import NavBar from "./NavBar";
import Footer from "./Footer";

function BasePage(props) {
  const { children } = props;
  return (
    <Box as="main" pb={12}>
      <NavBar />
      <Container maxW="container.md" pt={28}>
        <FadeIn>{children}</FadeIn>
        {/* {children} */}
      </Container>
      <Footer />
    </Box>
  );
}

export default BasePage;
