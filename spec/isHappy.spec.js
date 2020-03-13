import { isHappyNumber } from "../src/isHappy";
describe("isHappyNumber", () => {
  it("should verify a given number is a happy number", () => {
    let num = 12;
    expect(isHappyNumber(19)).toEqual(true);
  });
});
