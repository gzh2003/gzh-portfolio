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
            A prospective software developer based in Toronto that loves to
            create and discover
          </Text>
          <Heading as="h2" variant="page-sub-heading">
            About Me
          </Heading>
          <Text>
            Hello, my name is Germain! I'm a rising software developer who will
            be attending the University of Waterloo next year.
          </Text>
          <Text>
            I have been programming since my junior year of high school, and
            although a lot has changed since then, I continue to find myself
            discovering more and more about the tech field and am excited to see
            what else it has to offer.
          </Text>
          <Text>
            In addition to my technical work, I'm a huge basketball fanatic.
            These days, if I'm not coding, you'll likely find me outside playing
            basketball.
          </Text>
          <Heading as="h2" variant="page-sub-heading">
            Skills
          </Heading>
          <Text>
            With how rapid the tech field seems to be evolving, I look forward
            to learning new technologies and maturing as a developer, but for
            now here is a list of some of the technologies I've used in the
            past:
          </Text>
          <Wrap spacing="18px" mt="5">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "C++",
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
