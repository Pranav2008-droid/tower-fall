class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.1,
            'friction': 0.03,
            'density': 0.03
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(random(0, 255));
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};