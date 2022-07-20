import { AspectRatio, Box, Image, List, ListItem, Skeleton, Stack, Text } from "@chakra-ui/react"
import { formatNumberWithComma } from "../helpers/math";
import { Country } from "../types/countries.type";

import { Link } from "react-router-dom";

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <Stack bg="bg-surface" height='100%' shadow='sm'>
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={country.flags.png}
              alt={`${country.name.common}`}
              draggable="false"
              fallback={<Skeleton />}
            />
          </AspectRatio>
        </Box>
        <Stack justifyContent='space-between' display='flex' flexDirection='column' p={4} mt={0} height='100%'>
          <Text fontSize='md' fontWeight='600' mb={2}> { country.name.common } </Text>
          <List>
            <ListItem> 
              <Text fontSize='sm'> <b> Population: </b> {formatNumberWithComma(country.population)} </Text>
            </ListItem>
            <ListItem>
              <Text fontSize='sm'> <b> Region: </b> { country.region } </Text>
            </ListItem>
            <ListItem>
              <Text fontSize='sm'> <b> Capital: </b> { country.capital ?? 'Unknown' } </Text>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Link>
  )
}