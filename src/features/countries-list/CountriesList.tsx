import { Box, Button, Grid, GridItem, Spinner, Stack, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLazyGetCountriesQuery } from "../../services/api";
import { Filters } from "../../components/Filters";
import { Country, Region } from "../../types/countries.type";
import { CountryItem } from "../../components/CountryItem";
import { filterCountries } from "../../helpers/country";
import { QuestionIcon, RepeatIcon, WarningIcon } from "@chakra-ui/icons";

export const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [region, setRegion] = useState<Region>('all');

  const [fetchCountries, { isError, isFetching, isLoading }] = useLazyGetCountriesQuery();

  const searchCountries = useCallback( async (region: Region) => {
    try {
      const countries = await fetchCountries(region).unwrap();
      setCountries(countries ?? []);
    } catch(e) {}
  }, [fetchCountries]);

  const memoizedCountries = useMemo(() => {
    return filterCountries(countries, searchTerm);
  }, [countries, searchTerm]);

  useEffect(() => {
    searchCountries(region);
  }, [region, searchCountries])

  return (
    <>
      <Filters handleNameChange={setSearchTerm} handleRegionChange={setRegion} />

      <Box my={8}>
        {isFetching && 
          <Stack direction='row' spacing={4} justifyContent='center' data-testid="loading-wrapper">
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.100'
              color='purple.500'
              size='lg'
            />
          </Stack>
        } 
        </Box >

        { !isFetching && isError &&
          <Stack direction='column' spacing={4} alignItems='center' data-testid="network-error-wrapper">
            <WarningIcon color="red.200" fontSize={32}/>
            <Text fontWeight='700' color="red.200"> Failed to fetch countries </Text>
            <Button size='md' variant='outline' leftIcon={<RepeatIcon />} onClick={() => fetchCountries(region)}> Refresh </Button>
          </Stack>
        }

        { !memoizedCountries.length && !isError && !isFetching && !isLoading &&
          <Stack direction='column' spacing={4} alignItems='center' mt={16} data-testid="search-no-result">
            <QuestionIcon color="purple.500" fontSize={32}/>
            <Text fontWeight='700'> No countries "<u>{searchTerm}</u>" </Text>
          </Stack>
        }
      
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={8}>
          {!isFetching && !isError &&  
            memoizedCountries.map((country, key) => (
              <GridItem key={key}> 
                <CountryItem country={country} data-testid="country-item"/> 
              </GridItem>
            ))
          }
          </Grid>
    </>
  )
}
