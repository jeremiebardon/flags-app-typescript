import { fireEvent, render } from "@testing-library/react";
import { Filters } from "../Filters";




describe('<Filters />', () => {
  const handleNameChangeMock = jest.fn();
  const handleRegionChangeMock = jest.fn();
  
  it('should render', () => {
    const wrapper = render(<Filters handleNameChange={handleNameChangeMock} handleRegionChange={handleRegionChangeMock} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change name and call function', () => {
    const { getByTestId } = render(<Filters handleNameChange={handleNameChangeMock} handleRegionChange={handleRegionChangeMock} />)

    const input = getByTestId('input-name');

    fireEvent.change(input, { target: { value: 'name' } });

    expect(handleNameChangeMock).toHaveBeenCalled();
  });

  it('should reset name search', () => {
    const { getByTestId } = render(<Filters handleNameChange={handleNameChangeMock} handleRegionChange={handleRegionChangeMock} />)
    const input = getByTestId('input-name');

    fireEvent.change(input, { target: { value: 'name' } });

    const inputReset = getByTestId('reset-name');

    fireEvent.click(inputReset);

    expect((input as HTMLInputElement).value).toEqual('');
  });
});