import { CloseIcon } from "@chakra-ui/icons";
import { FormControl, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { useDebounce } from "../hooks/useDebounce.hook";
import { Region } from "../types/countries.type";
import { Option } from "./CustomSelect/Option";
import { CustomSelect } from "./CustomSelect/Select";

interface FiltersProps {
  handleNameChange: (value: string) => void;
  handleRegionChange: (value: Region) => void;
}

type FilterComponent = React.FunctionComponent<FiltersProps>

export const Filters: FilterComponent = ({ handleNameChange, handleRegionChange }: FiltersProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [nameValue, setNameValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(nameValue, 400)

  const onNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }, []);


  const resetName = () => {
    if (!!inputRef.current) {
      inputRef.current.value = '';
      setNameValue('');
    }
  };

  const onRegionChange = useCallback((region: Region) => {
    if (!!inputRef.current) {
      inputRef.current.value = '';
      setNameValue('');
    }
    
    handleRegionChange(region);
  }, [handleRegionChange]);

  useEffect(() => {
    handleNameChange(debouncedValue);
  }, [debouncedValue, handleNameChange])

  return (
    <Stack direction={['column', 'row']} justifyContent="space-between">
      <InputGroup maxW="xs" boxShadow='md' maxWidth={["100%", "30rem"]}>
        <InputLeftElement pointerEvents="none" height='100%'>
          <Icon as={FiSearch} color="gray.300" boxSize="4" />
        </InputLeftElement>
        <Input
          data-testid="input-name"
          size='lg'
          borderRadius={3}
          ref={inputRef}
          placeholder="Search for a country "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNameChange(e)}
          _placeholder={{ opacity: 1, color: 'gray.300' }}
          _focus={{ borderColor: 'none' }}
        />
        { nameValue.length > 0 && 
          <InputRightElement height='100%'>
            <Icon as={CloseIcon} color="gray.500" boxSize="4" onClick={resetName} _hover={{ cursor: 'pointer' }} data-testid="reset-name"/>
          </InputRightElement>
        }
      </InputGroup>

     <FormControl id="region" width={['100%', '12.5rem']}>
        <CustomSelect
          data-testid="select-region"
          name="region"
          size='lg'
          boxShadow='md'
          colorScheme="blue"
          onChange={(region) => onRegionChange(region as Region)}
          placeholder="Filter by Region"
        >
          <Option value='all'>
            <Text> All </Text>
          </Option>
          <Option value="africa">
            <Text> Africa </Text>
          </Option>
          <Option value="americas">
            <Text> Americas </Text>
          </Option>
          <Option value="asia">
            <Text> Asia </Text>
          </Option>
          <Option value="europe">
            <Text> Europe </Text>
          </Option>
          <Option value="oceania">
            <Text> Oceania </Text>
          </Option>
        </CustomSelect>
      </FormControl>
    </Stack>
  )
}