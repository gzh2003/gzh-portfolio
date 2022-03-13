import {
  Container,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Projects(props) {
  return (
    <Container mb={12}>
      <Stack spacing={75} justifyContent={"center"}>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="6">
              <Flex align="center">
                <Box>
                  <LinkOverlay
                    href="https://gzh2003.github.io/git-vision/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heading fontSize={"35"}>Git Vision</Heading>
                  </LinkOverlay>
                  <Text>
                    An interactive Git sandbox that demystifies the inner
                    workings of common Git commands with dynamically generated
                    graphs
                  </Text>
                </Box>
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="6">
              <Flex align="center">
                <Box>
                  <LinkOverlay
                    href="https://gzh2003.github.io/cgol/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heading fontSize={"35"}>CGOL</Heading>
                  </LinkOverlay>
                  <Text>
                    A highly customizable implementation of the standard B3/S23
                    Game of Life invented by John Horton Conway
                  </Text>
                </Box>
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="6">
              <Flex align="center">
                <Box>
                  <LinkOverlay
                    href="https://gzh2003.github.io/sorting-vis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heading fontSize={"35"}>Sorting Visualiser</Heading>
                  </LinkOverlay>
                  <Text>
                    A visualization tool featuring implementaton details along
                    with time and space complexities of various sorting
                    algorithms
                  </Text>
                </Box>
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="6">
              <Flex align={"center"}>
                <Box>
                  <LinkOverlay
                    href="https://gzh2003.github.io/gzh-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heading fontSize={"35"}>Portfolio Website</Heading>
                  </LinkOverlay>
                  <Text>
                    A minimal personal portfolio website where you can learn a
                    little more about me
                  </Text>
                </Box>
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
      </Stack>
    </Container>
  );
}

export default Projects;
