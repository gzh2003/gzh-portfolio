import {
  Text,
  Divider,
  Box,
  Container,
  Stack,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer(props) {
  return (
    <Box as="footer">
      <Container>
        <Divider></Divider>
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          align="start"
        >
          <Text>
            &copy;{new Date().getFullYear()} &bull; Germain Zhang-Houle
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://ca.linkedin.com/in/germainzhanghoule"
              target="_blank"
              rel="noopener noreferrer"
              _focus={{
                boxShadow: 0,
              }}
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/gzh2003"
              target="_blank"
              rel="noopener noreferrer"
              _focus={{
                boxShadow: 0,
              }}
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="mailto:germainzhanghoule@gmail.com"
              aria-label="Mail"
              icon={<FaEnvelope fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
