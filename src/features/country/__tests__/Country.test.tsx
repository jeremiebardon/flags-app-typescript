import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { api } from "../../../services/api";
import { Country } from "../Country";

const wrapperProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ApiProvider api={api}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ApiProvider>
  )
}

describe('<CountriesList />', () => {
  it('should render Countries List', () => {
    const wrapper = render(<Country />, {
      wrapper: wrapperProvider
    });

    expect(wrapper).toMatchSnapshot();
  })
});
