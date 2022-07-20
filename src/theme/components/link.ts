import { mode, StyleFunctionProps, darken } from "@chakra-ui/theme-tools";

const variants = {
  menu: (props: StyleFunctionProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "md",
    backgroundColor: mode("white", "gray.700")(props),
    paddingX: "4",
    paddingY: "2",
    width: "24",
    color: "emphasized",
    _hover: {
      textDecoration: "none",
      bg: mode(
        darken("gray.50", 1)(props.theme),
        darken("gray.700", 4)(props.theme)
      )(props),
    },
    _active: {
      bg: mode(
        darken("gray.50", 1)(props.theme),
        darken("gray.700", 4)(props.theme)
      )(props),
    },
    _activeLink: {
      bg: mode("gray.100", "gray.700")(props),
    },
  }),
};

export default {
  variants,
};
