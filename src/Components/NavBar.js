import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";
import NavBarLink from "./NavBarLink";

function NavBar(props) {
  const { pathname: pathName } = useLocation();
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
          <NavBarLink href="/" path={pathName}>
            Home
          </NavBarLink>
          <NavBarLink href="/projects" path={pathName}>
            Projects
          </NavBarLink>
          <NavBarLink href="/blog" path={pathName}>
            Blog
          </NavBarLink>
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
