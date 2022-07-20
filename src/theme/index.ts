import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

import * as components from "./components";
import * as foundations from "./foundations";

import "focus-visible/dist/focus-visible";

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { ...baseTheme.colors, ...foundations.colors },
  space: {
    "4.5": "1.125rem",
  },
});
