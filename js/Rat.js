class Rat {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    sound() {
        console.log(this.name + 'chit chit');
    }
}