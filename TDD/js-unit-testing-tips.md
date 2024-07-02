
- should up spotify - https://github.com/spotify/should-up 
talsk about how we shouldnt use the word "should" in the begin of our tests.

Remember, unit tests are a design specification of how a certain behaviour should work, not a list of observations of everything the code happens to do:


```javascript
    it("computes the result of an expression", () => {
    const multiplySpy = jest.spyOn(Calculator, "multiple");
    const subtractSpy = jest.spyOn(Calculator, "subtract");

    const result = Calculator.compute("(21.5 x 2) - 1");

    expect(multiplySpy).toHaveBeenCalledWith(21.5, 2);
    expect(subtractSpy).toHaveBeenCalledWith(43, 1);
    expect(result).toBe(42);
  });
```

### Examples
[Add test case for getEventTarget](https://github.com/facebook/react/pull/12755/files)




