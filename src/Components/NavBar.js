import { motion } from "framer-motion";
import {  Link } from "react-router-dom";
import {
  Container,
  Box,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

function NavBar(props) {
  const navItems = [
    { label: "Home", href: "/", color: "#ff901f" },
    { label: "Projects", href: "/projects", color: "#ff2975" },
    { label: "Blog", href: "/blog", color: "#f222ff" },
  ];

  return (
    <Box
      as="header"
      position="fixed"
      zIndex={1}
      w="100%"
      bg={useColorModeValue("alphaLight", "alphaDark")}
      style={{ backdropFilter: "blur(8px)" }}
      {...props}
    >
      <Container
        display="flex"
        wrap="wrap"
        align="center"
        justfiy="space-between"
        maxW="container.md"
        p={2}
      >
        <Stack
          display={{ md: "flex", base: "none" }}
          direction={{ md: "row" }}
          width={{ md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {navItems.map(({ label, href, color }) => {
            return (
              <motion.div whileTap={{ x: -10 }} key={label}>
                <Button variant="ghost">
                  <Link
                    to={href}
                    _focus={{
                      boxShadow: 0,
                    }}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </Stack>
        <Box
          flex={1}
          align="left"
          display={{ md: "none", base: "inline-block" }}
        >
          <Box ml={2}>
            <Menu>
              <MenuButton
                border="none"
                as={IconButton}
                _focus={{ boxShadow: 0 }}
                icon={<HamburgerIcon w={6} h={6} />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link to="/">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link to="/projects">
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link to="/blog">
                  <MenuItem>Blog</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
}

export default NavBar;
