import { Container, Flex, Heading } from "@chakra-ui/react";

function PageInDevelopment(props) {
  return (
    <Container mb={12} justifyContent={'center'}>
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height="60vh">
            <Heading as="h1" textAlign={"center"} fontSize='65px' p="5">This page is still being developed</Heading>
            <Heading as='h2' textAlign={"center"} fontSize='30px' p="5">Try again next week?</Heading>
      </Flex>
    </Container>
  );
}

export default PageInDevelopment;
