import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { borderCountries, countryMockFrance } from "../../mock/countryMock";
import { CountryInfo } from "../CountryInfo";

describe('<CountryInfo />', () => {
  it('should render component', () => {
    const wrapper = render(<CountryInfo country={countryMockFrance} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Rendering country info', () => {
    it('should render component capital', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const capital = getByText('Paris')

      expect(capital).toBeInTheDocument();
    });

    it('should render component population', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const population = getByText('67,391,582');

      expect(population).toBeInTheDocument();
    });

    it('should render component languages', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const languages = getByText('French');

      expect(languages).toBeInTheDocument();
    });

    it('should render component tld', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const tld = getByText('.fr');

      expect(tld).toBeInTheDocument();
    });

    it('should render component currency', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const currency = getByText('Euro');

      expect(currency).toBeInTheDocument();
    });

    it('should render component sub region', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const subRegion = getByText('Western Europe');

      expect(subRegion).toBeInTheDocument();
    });

    it('should render component region', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const region = getByText('Europe');

      expect(region).toBeInTheDocument();
    });
  });

  describe('Rendering border countries', () => {
    it('should render border countries if non existent', () => {
      const { getByText } = render(<CountryInfo country={countryMockFrance} />);
      const noCountriesText = getByText('No Borders');

      expect(noCountriesText).toBeInTheDocument();
    });

    it('should render border countries', () => {
      const { getAllByTestId } = render(<CountryInfo country={countryMockFrance} bordersCountries={borderCountries}/>, {
        wrapper: BrowserRouter
      });
      const country = getAllByTestId('border-country');

      expect(country).toHaveLength(8);
    });
  });
});
