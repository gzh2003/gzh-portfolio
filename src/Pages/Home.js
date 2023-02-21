import { Container, Box, Heading, Text, Wrap, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <Container mb={12}>
      <Box display="flex">
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-heading">
            Germain Zhang-Houle
          </Heading>
          <Text fontSize={20}>
            An up-and-coming software developer based in Toronto that loves to
            create and discover
          </Text>
          <Heading as="h2" variant="page-sub-heading">
            About Me
          </Heading>
          <Text>
            Hello, my name is Germain! I'm a software developer who is currently
            attending the University of Waterloo.
          </Text>
          <Text>
            I have been programming since my junior year of high school, and
            although a lot has changed since then, I continue to find myself
            discovering more about the tech field and am excited to see
            what else it has to offer!
          </Text>
          <Heading as="h2" variant="page-sub-heading">
            Skills
          </Heading>
          <Text>
            With how rapid the tech field is evolving, I'm always eager to learn
            new skills and expand my knowledge, but for now here is a list of
            some of the technologies I've worked:
          </Text>
          <Wrap spacing="18px" mt="5">
            {[
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "C/C++",
              "Java",
              "HTML",
              "CSS",
              "JavaScript",
            ].map((str, i) => {
              return (
                <motion.div key={i} whileHover={{ scale: 0.8 }}>
                  <Tag size={"lg"}>{str}</Tag>
                </motion.div>
              );
            })}
          </Wrap>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
