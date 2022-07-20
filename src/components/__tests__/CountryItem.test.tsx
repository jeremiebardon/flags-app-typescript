import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { countryMockFrance } from "../../mock/countryMock";
import { CountryItem } from "../CountryItem";

describe('<CountryItem />', () => {
  it('should render', () => {
    const wrapper = render(<CountryItem country={countryMockFrance} />, {
      wrapper: BrowserRouter
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without region', () => {
    const { getByText } = render(<CountryItem country={{ ...countryMockFrance, capital: undefined }} />, {
      wrapper: BrowserRouter
    });

    const capital = getByText('Unknown')

    expect(capital).toBeInTheDocument();
  });
});
