import { formatNumberWithComma } from "../math";

describe("math helpers test", () => {
  it("should return formated population", () => {
    const result = formatNumberWithComma(67585);
    expect(result).toEqual("67,585");
  });

  it("should return input value to string", () => {
    const result = formatNumberWithComma(300);
    expect(result).toEqual("300");
  });

  it("should return undefined", () => {
    const result = formatNumberWithComma(undefined);
    expect(result).toEqual(undefined);
  });
});
