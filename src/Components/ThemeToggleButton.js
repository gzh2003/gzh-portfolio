import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function ThemeToggleButton(props) {
  const { toggleColorMode } = useColorMode();
  return (
    <motion.span
    style={{display:"inline-flex"}}
      whileTap={{ rotate: 90, scale: 0.75 }}
    >
      <IconButton
        aria-label="Toggle Colour Theme"
        variant="solid"
        _focus={{ boxShadow: 0 }}
        colorScheme={useColorModeValue("purple", "green")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </motion.span>
  );
}

export default ThemeToggleButton;
