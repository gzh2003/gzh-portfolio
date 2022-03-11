import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  intialColorMode: "dark",
  useSystemColorMode: true,
};
const colors = {
  bgLight: "#f9fafb",
  bgDark: "#1c1c21",
  lightBase: "#f5f5f5",
  darkBase: "#212121",
  alphaLight: "#ffffff80",
  alphaDark: "#1f1f1f80",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("bgLight", "bgDark")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "page-heading": {
        fontSize: 40,
      },
      "page-sub-heading": {
        fontSize: 25,
        marginTop: 16,
        marginBottom: 4,
      },
    },
  },
  Text: {
    baseStyle: (props) => ({
      fontSize: 17,
      pt: 2,
      pb: 2,
    }),
  },
  Link: {
    baseStyle: (props) => ({
      p: 2,
      pl: 4,
      pr: 4,
      color: mode("#3d7aed", "#ff63c3")(props),
    }),
  },
};

const fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif",
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
