import { Link as RouterLink } from "react-router-dom";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

function NavBarLink(props) {
  const { path, href, children } = props;
  const active = path === href;
  const hoverColor = useColorModeValue("white", "black");
  const hoverBackgroundColor = useColorModeValue(
    active ? "#6b46c1" : "#805ad5",
    active ? "#68d391" : "#9ae6b4"
  );
  return (
    <motion.div
    whileHover={{scale:0.8}}
    >
      <Link
        as={RouterLink}
        to={href}
        color={useColorModeValue(
          active ? "white" : "black",
          active ? "black" : "white"
        )}
        backgroundColor={useColorModeValue(
          active ? "#805ad5" : undefined,
          active ? "#9ae6b4" : undefined
        )}
        borderRadius={"8"}
        _focus={{
          boxShadow: 0,
        }}
        _hover={{
          textDecoration: "none",
          backgroundColor: hoverBackgroundColor,
          color: hoverColor,
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default NavBarLink;
