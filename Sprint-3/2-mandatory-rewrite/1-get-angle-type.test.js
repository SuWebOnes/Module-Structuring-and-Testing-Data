const getAngleType = require("./1-get-angle-type"); // Import the function to be tested

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

test("should identify Acute Angles (< 90)", () => {
  expect(getAngleType(45)).toEqual("Acute Angle");
});
// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify Obtuse angle (>90 && <180)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify Straight Angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify Straight Angle (> 180 &&  < 360)", () => {
  expect(getAngleType(278)).toEqual("Reflex angle");
});
