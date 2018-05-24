const { assert } = require("chai");
const { describe, it } = require("mocha");

const thousandSeparator = require("../main");

describe("Thousands-Separator", () => {
  describe("Validating return asserts", () => {
    it("should return '1,234' ", () => {
      const result = thousandSeparator(1234);
      assert.strictEqual(result, "1,234");
    });
    it("should return '987,654,321' ", () => {
      const result = thousandSeparator(987654321);
      assert.strictEqual(result, "987,654,321");
    });
    it("should return '123' ", () => {
      const result = thousandSeparator(123);
      assert.strictEqual(result, "123");
    });
    it("should return '9,876,543,210' ", () => {
      const result = thousandSeparator(9876543210);
      assert.strictEqual(result, "9,876,543,210");
    });
  });
  describe("Validating parameters asserts", () => {
    it("should parameters be greater or equal 0 ", () => {
      const result = thousandSeparator(-10);
      assert.strictEqual(result, "Parameters must be Greater or Equal to 0");
    });
  });
  describe("Validating types of parameters.", () => {
    it("Should return '0' when is NaN ", () => {
      const result = thousandSeparator(NaN);
      assert.strictEqual(result, "0");
    });
    it("Should return '0' when is empty string ", () => {
      const result = thousandSeparator("");
      assert.strictEqual(result, "0");
    });
    it("Should return '0' when is undefined ", () => {
      const result = thousandSeparator(undefined);
      assert.strictEqual(result, "0");
    });
    it("Should return '0' when is empty string ", () => {
      const result = thousandSeparator(null);
      assert.strictEqual(result, "0");
    });
  });
  describe("Validating different types of separators.", () => {
    it("Should return value expected if separator param is not set ", () => {
      const result = thousandSeparator(10950);
      assert.strictEqual(result, "10,950");
    });
    it("Should permit all kinds of separators ", () => {
      const result = thousandSeparator(10950, ".");
      assert.strictEqual(result, "10.950");
    });
  });
});
