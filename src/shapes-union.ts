interface Rectangle {
    type: 'rectangle';
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Circle {
    type: 'circle';
    x: number;
    y: number;
    radius: number;
}

type Shape = Rectangle | Circle;

const circle: Circle = {
    type: 'circle',
    x: 3,
    y: 2,
    radius: 4,
};

const weKnowItsCircle: Shape = circle;

console.log(weKnowItsCircle.radius);

const shape = weKnowItsCircle as Shape;

if (shape.type == 'circle') {
    console.log(shape.radius);
}