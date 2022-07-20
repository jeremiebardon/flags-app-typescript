import { render } from "@testing-library/react";
import { Option } from "../Option";

describe('<Option />', () => {
  it('should render', () => {
    const wrapper = render(<Option value="value" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render value', () => {
    const { getByText } = render(<Option value="value"> Any value </Option>);

    const value = getByText('Any value')

    expect(value).toBeInTheDocument();
  });
});