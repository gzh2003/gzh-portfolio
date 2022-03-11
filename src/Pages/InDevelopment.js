import { Container, Flex, Heading } from "@chakra-ui/react";

function PageNotFound(props) {
  return (
    <Container mb={12} justifyContent={'center'}>
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height="60vh">
            <Heading as="h1" fontSize='80px' p="5">404</Heading>
            <Heading as='h2' textAlign={"center"} fontSize='30px' p="5">It appears that you're lost</Heading>
      </Flex>
    </Container>
  );
}

export default PageNotFound;
