import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Button,
  Text,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("Dark mode", "Light mode")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Button 
      size="md" 
      color="current"
      variant='ghost'
      fontWeight='normal'
      aria-label={`Switch to ${text}`}
      leftIcon={<SwitchIcon />} 
      onClick={toggleColorMode} 
      {...props}
    >
      <Text lineHeight='1' fontWeight='semibold' fontSize={["xs", "sm"]}> { text } </Text>
    </Button>
  )
}
