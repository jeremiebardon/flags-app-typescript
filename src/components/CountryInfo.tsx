import { AspectRatio, Image, Skeleton, Heading, Stack, Text, Box, Flex, Link, Tag } from "@chakra-ui/react";
import { BorderCountry, Country } from "../types/countries.type";

import { Link as RouterLink } from "react-router-dom";
import { formatInfos } from "../helpers/country";

interface CountryInfoProps {
  country: Country;
  bordersCountries?: BorderCountry[];
}

type CountryInfoComponent = React.FunctionComponent<CountryInfoProps>

export const CountryInfo: CountryInfoComponent = ({ country, bordersCountries }: CountryInfoProps) => {
  const info = formatInfos(country);

  return (
    <Stack  
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '8', lg: '16' }}
      mb={16}>
      <Box flex="1">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={country.flags.png}
            alt={`${country.name.common}`}
            borderRadius={12}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
      </Box>
      
      <Flex flexDirection='column' justifyContent='space-around' flex="1">
        <Box mb={[16, 0]} >
          <Heading size='xs' mb={8}> {country.name.common} </Heading>
          <Stack direction={['column', 'row']}>
            <Box w={['100%', '50%']} mb={8}>
              <Text data-testid="country-population"> <b>Population:</b> {info.population} </Text>
              <Text data-testid="country-region"> <b>Region:</b> {country.region} </Text>
              <Text data-testid="country-subregion"> <b>Sub region:</b> {info.subRegion} </Text>
              <Text data-testid="country-capital"> <b>Capital:</b> {info.capital} </Text>
            </Box>
            <Box  w={['100%', '50%']}>
              <Text data-testid="country-tld"><b>Top Level Domain:</b> { info.tld } </Text>
              <Text data-testid="country-currencies"><b>Currencies:</b> {info.currencies} </Text>
              <Text data-testid="country-languages"><b>Languages:</b> {info.languages}</Text>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight='bold' mb={4}> Border Countries:  </Text>
          {bordersCountries ? bordersCountries?.map((country) => (
            <Link as={RouterLink} to={`/country/${country?.cca3}`} key={country?.cca3} display="inline-block" mr={2} mb={2} data-testid="border-country">
              <Tag bg="bg-surface" textColor='dark' variant='solid' shadow='xs-dark' borderRadius={2}> {country?.name.common} </Tag>
            </Link>
          )) : <Text> No Borders  </Text>}
        </Box>
      </ Flex>
    </Stack>
  )
}

