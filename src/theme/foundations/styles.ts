import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const global = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: "default",
      bg: "bg-canvas",
      overflowY: "auto",
      overflowX: "hidden",
    },
    "*::placeholder": {
      opacity: 1,
      color: "muted",
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "gray.700")(props),
    },
  }),
};

export default global;
