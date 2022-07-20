import {  Box, Link } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useParams,  Link as RouterLink } from 'react-router-dom';

import { useGetBorderCountriesQuery, useGetCountryByCodeQuery } from '../../services/api';

import { CountryInfo } from '../../components/CountryInfo';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const Country = () => {
  const { countryName } = useParams();

  const { data: countryInfo } = useGetCountryByCodeQuery(countryName ?? skipToken);
  const { data: borderCountries } = useGetBorderCountriesQuery(countryInfo && countryInfo[0].borders ? countryInfo[0].borders : skipToken);

  return (
    <>
      <Box mb={[6, 12]} mt={[2, 4]}>
        <Link as={RouterLink} colorScheme='teal' size='xs' to='/' variant='menu'>
          <ArrowBackIcon /> Back
        </Link>
      </Box>

      { countryInfo &&  <CountryInfo country={countryInfo[0]} bordersCountries={borderCountries} /> }
    </>
  )
}