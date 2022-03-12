import {
  Container,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Center,
  LinkBox,
  Image,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import tempImage1 from "../imgs/temp1.jpg";
import tempImage2 from "../imgs/temp2.jpg";
import tempImage3 from "../imgs/temp3.jpg";
import tempImage4 from "../imgs/temp4.jpg";

function Projects(props) {
  return (
    <Container mb={12}>
      <Stack spacing={75} justifyContent={"center"}>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex>
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
                <Image
                  src={tempImage1}
                  alt="Temporary Image"
                  boxSize="150px"
                  display={{ base: "none", sm: "block" }}
                  p="2"
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex>
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>CGOL</Heading>
                  </LinkOverlay>
                  <Text>
                    A highly customizable implementation of the standard B3/S23
                    Game of Life invented by John Horton Conway
                  </Text>
                </Box>
                <Image
                  src={tempImage2}
                  alt="Temporary Image"
                  boxSize="150px"
                  display={{ base: "none", sm: "block" }}
                  p="2"
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex>
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
                <Image
                  src={tempImage3}
                  alt="Temporary Image"
                  boxSize="150px"
                  display={{ base: "none", sm: "block" }}
                  p="2"
                />
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }}>
          <LinkBox>
            <Box borderWidth="1px" borderRadius="lg" p="5">
              <Flex>
                <Box>
                  <LinkOverlay href="">
                    <Heading fontSize={"35"}>Portfolio Website</Heading>
                  </LinkOverlay>
                  <Text>
                    A minimal personal portfolio website where you can learn a
                    little about me
                  </Text>
                </Box>
                <Image
                  src={tempImage4}
                  alt="Temporary Image"
                  boxSize="150px"
                  display={{ base: "none", sm: "block" }}
                  p="2"
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
