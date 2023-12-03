// Example TypeScript code with a more complex class hierarchy

// Base class for geometric shapes
abstract class Shape {
    abstract getArea(): number;
}

// Class representing rectangles
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    // Implementation of the abstract method from the base class
    getArea(): number {
        return this.width * this.height;
    }
}

// Class representing circles
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    // Implementation of the abstract method from the base class
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Function to calculate the total area of an array of geometric shapes
function getTotalArea(shapes: Shape[]): number {
    // Using the reduce function to accumulate the total area
    return shapes.reduce((total, shape) => total + shape.getArea(), 0);
}

// Create instances of different shapes
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

// Calculate individual areas
const rectangleArea = rectangle.getArea();
const circleArea = circle.getArea();

// Output individual areas
console.log(`Rectangle Area: ${rectangleArea}`);
console.log(`Circle Area: ${circleArea}`);

// Create an array of shapes
const shapesArray: Shape[] = [rectangle, circle];

// Calculate the total area
const totalArea = getTotalArea(shapesArray);
console.log(`Total Area: ${totalArea}`);
