import {
  Icon,
  Container,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  LinkBox,
  Image,
  LinkOverlay,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { BsFillGrid3X3GapFill, BsFillPersonLinesFill } from "react-icons/bs";
import {IoGitBranch, IoCellular as IoArray} from "react-icons/io5";

function Projects(props) {
  return (
    <Container mb={12}>
      <Stack spacing={75} justifyContent={"center"}>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex align="center">
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>Git Vision</Heading>
                  </LinkOverlay>
                  <Text>
                    An interactive git sandbox that demystifies the inner
                    workings of common git commands with dynamically geneated
                    graphs
                  </Text>
                </Box>

                <Icon
                  as={IoGitBranch}
                  w={16}
                  h={16}
                  color={useColorModeValue("#805ad5", "#9ae6b4")}
                  display={{ base: "none", md: "block" }}
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex align="center">
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>CGOL</Heading>
                  </LinkOverlay>
                  <Text>
                    A highly customizable implementation of the standard B3/S23
                    Game of Life invented by John Horton Conway
                  </Text>
                </Box>

                <Icon
                  as={BsFillGrid3X3GapFill}
                  w={16}
                  h={16}
                  color={useColorModeValue("#805ad5", "#9ae6b4")}
                  display={{ base: "none", md: "block" }}
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex align="center">
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>Sorting Visualiser</Heading>
                  </LinkOverlay>
                  <Text>
                    A visualization tool featuring implementaton details, along
                    with time and space complexities of various sorting
                    algorithms
                  </Text>
                </Box>

                <Icon
                  as={IoArray}
                  w={16}
                  h={16}
                  color={useColorModeValue("#805ad5", "#9ae6b4")}
                  display={{ base: "none", md: "block" }}
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex align={"center"}>
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>Portfolio Website</Heading>
                  </LinkOverlay>
                  <Text>
                    A minimal personal portfolio website where you can learn a
                    little more about me
                  </Text>
                </Box>
                <Icon
                  as={BsFillPersonLinesFill}
                  w={16}
                  h={16}
                  color={useColorModeValue("#805ad5", "#9ae6b4")}
                  display={{ base: "none", md: "block" }}
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
      </Stack>
    </Container>
  );
}

export default Projects;
