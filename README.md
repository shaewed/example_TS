# TypeScript Geometric Shapes Example

This TypeScript example demonstrates a simple class hierarchy representing geometric shapes, including rectangles and circles. It calculates individual areas and the total area for an array of shapes.

## Contents

- [Description](#description)
- [Classes](#classes)
- [Usage](#usage)

## Description

The code includes an abstract base class `Shape` with an abstract method `getArea()`. Two derived classes, `Rectangle` and `Circle`, implement this method to calculate the area of rectangles and circles, respectively. The `getTotalArea` function sums up the total area of an array of geometric shapes.

## Classes

### Shape

The base class with an abstract method `getArea()`.

### Rectangle

A class representing rectangles, inheriting from `Shape`.

### Circle

A class representing circles, inheriting from `Shape`.

## Usage

1. Create instances of `Rectangle` and `Circle`.
2. Calculate individual areas using the `getArea()` method.
3. Output individual areas to the console.
4. Create an array of shapes.
5. Calculate the total area using the `getTotalArea` function.
6. Output the total area to the console.

Feel free to modify and extend the code as needed.
