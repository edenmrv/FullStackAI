const Exercises = require('./exercises');

describe("Exercises Tests", () => {
    let ex;

    // This runs before every test to give us a fresh instance
    beforeEach(() => {
        ex = new Exercises();
    });

    // --- Exercise 1 & 5 ---
    describe("Exercise 1: isEven", () => {
        test("should return truthy if n is even", () => {
            expect(ex.isEven(8)).toBeTruthy();
        });

        test("should return falsy if n is odd", () => {
            expect(ex.isEven(7)).toBeFalsy();
        });

        // Edge cases (Exercise 5)
        test("edge case: should handle missing parameter", () => {
            expect(ex.isEven()).toBeFalsy(); 
        });

        test("edge case: should handle wrong type (string number)", () => {
            expect(ex.isEven("4")).toBeTruthy();
        });
    });

    // --- Exercise 2 & 5 ---
    describe("Exercise 2: removeAtLeastOne", () => {
        test("should have fewer items than the original array", () => {
            const arr = [1, 2, 3, 4, 5];
            const originalLength = arr.length;
            const newArr = ex.removeAtLeastOne(arr);
            
            expect(newArr.length).toBeLessThan(originalLength);
        });

        // Edge cases (Exercise 5)
        test("edge case: should handle empty array", () => {
            const arr = [];
            const newArr = ex.removeAtLeastOne(arr);
            expect(newArr.length).toBe(0);
        });
    });

    // --- Exercise 3 & 5 ---
    describe("Exercise 3: simplify", () => {
        test("should remove specific symbols", () => {
            const str = "Hello!#.,'World";
            expect(ex.simplify(str)).toBe("HelloWorld");
        });

        // Edge cases (Exercise 5)
        test("edge case: should handle empty string", () => {
            expect(ex.simplify("")).toBe("");
        });

        test("edge case: should throw error on null or undefined", () => {
            expect(() => {
                ex.simplify(null);
            }).toThrow();
        });
    });

    // --- Exercise 4 & 5 ---
    describe("Exercise 4: validate", () => {
        test("should return true if there are more trues than falses", () => {
            expect(ex.validate([true, true, false])).toBe(true);
        });

        test("should return false otherwise", () => {
            expect(ex.validate([true, false, false])).toBe(false);
            expect(ex.validate([true, false])).toBe(false);
        });

        test("should return error object if no booleans are present", () => {
            expect(ex.validate(["test", 123, {}])).toEqual({ error: "Need at least one boolean" });
        });

        // Edge cases (Exercise 5)
        test("edge case: should handle missing parameter or wrong type completely", () => {
            expect(ex.validate()).toEqual({ error: "Need at least one boolean" });
            expect(ex.validate(null)).toEqual({ error: "Need at least one boolean" });
            expect(ex.validate(123)).toEqual({ error: "Need at least one boolean" });
        });
    });

    // --- Extension ---
    describe("Extension: add", () => {
        test("should call Array.prototype.push", () => {
            // Spy on the push method of the Array prototype
            const pushSpy = jest.spyOn(Array.prototype, 'push');
            
            ex.add(10, 20);
            
            // Check if push was called
            expect(pushSpy).toHaveBeenCalled();
            // Check if push was called with the specific parameters
            expect(pushSpy).toHaveBeenCalledWith(10, 20);
            
            // Restore the original function
            pushSpy.mockRestore();
        });
    });
});