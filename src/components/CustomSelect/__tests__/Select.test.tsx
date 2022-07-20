import { render } from "@testing-library/react";
import { CustomSelect } from "../Select";

describe('<Select />', () => {
  it('should render', () => {
    const wrapper = render(<CustomSelect />);

    expect(wrapper).toMatchSnapshot();
  });
});