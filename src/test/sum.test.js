/* eslint-disable jest/valid-title */
// import {sum, sub} from "./sum";

// import {shallow, mount} from "enzyme";
// import CheckboxWithLabel from "./CheckboxWithLabel";

// describe("first example for jest", () => {
//   //addition
//   it("adds 1 + 2 equal to 3", () => {
//     expect(sum(1, 2)).toBe(3);
//   });

//   //substraction
//   it("subtract 10 - 2 equal to 8", () => {
//     expect(sub(10, 2)).toBe(8);
//   });

//   //object assignment
//   it("object assign", () => {
//     const data = {one: 1};
//     data["two"] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });

//   //adding postive number is not zero
it("adding postive number is not zero", () => {
  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

//   //null
//   it("null", () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });

//   //zero
//   it("zero", () => {
//     const z = undefined;
//     expect(z).not.toBeNull();
//     expect(z).not.toBeDefined();
//     expect(z).toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
//   });

//   it("two plus two", () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);

//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
//   });

//   it("adding floating point numbers", () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);           This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
//   });

//   it("there is no I in team", () => {
//     expect("team").not.toMatch(/I/);
//   });

//   it('but there is a "stop" in Christoph', () => {
//     expect("Christoph").toMatch(/stop/);
//   });

//   const shoppingList = [
//     "diapers",
//     "kleenex",
//     "trash bags",
//     "paper towels",
//     "milk",
//   ];

//   it("the shopping list has milk on it", () => {
//     expect(shoppingList).toContain("milk");
//     // expect(new Set(shoppingList)).toContain("milk");
//   });
// });

// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());

// beforeAll(() => console.log("1 - beforeAll"));
// afterAll(() => console.log("1 - afterAll"));
// beforeEach(() => console.log("1 - beforeEach"));
// afterEach(() => console.log("1 - afterEach"));

// it("", () => console.log("1 - test"));

// describe("Scoped / Nested block", () => {
//   beforeAll(() => console.log("2 - beforeAll"));
//   afterAll(() => console.log("2 - afterAll"));
//   beforeEach(() => console.log("2 - beforeEach"));
//   afterEach(() => console.log("2 - afterEach"));

//   it("", () => console.log("2 - test"));
// });

// const myMockFn = jest
//   .fn(() => "default")
//   .mockImplementationOnce(() => "first call")
//   .mockImplementationOnce(() => "second call");

// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

// const {getType} = require("jest-get-type");

// const array = [1, 2, 3];
// const nullValue = null;
// const undefinedValue = undefined;

// // prints 'array'
// console.log(getType(array));
// // prints 'null'
// console.log(getType(nullValue));
// // prints 'undefined'
// console.log(getType(undefinedValue));

// const {format: prettyFormat} = require("pretty-format");

// const val = {object: {}};
// val.circularReference = val;
// val[Symbol("foo")] = "foo";
// val.map = new Map([["prop", "value"]]);
// val.array = [-0, Infinity, NaN];

// console.log(prettyFormat(val));

// describe("Checkbox test desc.", () => {
//   it("CheckboxWithLabel changes the text after click", () => {
//     // Render a checkbox with label in the document
//     const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
//     console.log("text", checkbox.text());
//     expect(checkbox.text()).toEqual("Off");

//     checkbox.find("input").simulate("change");
//     console.log("text", checkbox.text());

//     expect(checkbox.text()).toEqual("On");
//   });
// });

// const myBeverage = {
//   delicious: true,
//   sour: false,
// };

// describe("my beverage", () => {
//   test("is delicious", () => {
//     expect(myBeverage.delicious).toBeTruthy();
//   });

//   test("is not sour", () => {
//     expect(myBeverage.sour).toBeFalsy();
//   });
//  });

// const binaryStringToNumber = (binString) => {
//   if (!/^[01]+$/.test(binString)) {
//     throw new CustomError("Not a binary number.");
//   }

//   return parseInt(binString, 2);
// };

// describe("binaryStringToNumber", () => {
//   describe("given an invalid binary string", () => {
//     test("composed of non-numbers throws CustomError", () => {
//       expect(() => binaryStringToNumber("abc")).toThrowError(CustomError);
//     });

//     test("with extra whitespace throws CustomError", () => {
//       expect(() => binaryStringToNumber("  100")).toThrowError(CustomError);
//     });
//   });

//   describe("given a valid binary string", () => {
//     test("returns the correct number", () => {
//       expect(binaryStringToNumber("100")).toBe(4);
//     });
//   });
// });

// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
// ])(".add(%i, %i)", (a, b, expected) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });

// describe.only.each`
//   a    | b    | expected
//   ${1} | ${1} | ${2}
//   ${1} | ${2} | ${3}
//   ${2} | ${1} | ${3}
// `("returns $expected when $a is added $b", ({a, b, expected}) => {
//   test("passes", () => {
//     expect(a + b).toBe(expected);
//   });
// });

// test("will not be ran", () => {
//   expect(1 / 0).toBe(Infinity);
// });

// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () =>
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       };
//     }
//   },
// });

// test("numeric ranges", () => {
//   expect(100).toBeWithinRange(90, 110);
//   expect(101).not.toBeWithinRange(0, 100);
//   expect({apples: 6, bananas: 3}).toEqual({
//     apples: expect.toBeWithinRange(1, 10),
//     bananas: expect.not.toBeWithinRange(11, 20),
//   });
// });

// test("resolves to lemon", async () => {
//   await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
//   await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
// });

// const wrapper = mount(<div name="annu" />);
// expect(wrapper.name()).to.equal("div");
// const wrapper = mount(<Foo />);
// expect(wrapper.name()).to.equal('Foo');
// Foo.displayName = 'A cool custom name';
// const wrapper = mount(<Foo />);
// expect(wrapper.name()).to.equal('A cool custom name');

// describe("test2222===>", () => {
//   const wrapper = mount(
//     <div>
//       <div className="foo qoo">qoo</div>
//       <div className="foo boo" />
//       <div className="foo hoo" />
//     </div>
//   );
//   expect(wrapper.find(".foo").some(".qoo")).toEqual(true);
//   expect(wrapper.find(".foo").some(".foo")).toEqual(true);
//   expect(wrapper.find(".foo").some(".bar")).toEqual(false);
// });
