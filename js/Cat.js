class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    sound() {
        console.log(this.name + 'meo meo')
    }

    catch(Rat) {
        if (this.speed > Rat.speed) {
            alert(this.name + ' bắt được '+ Rat.name );
            if (this.speed < Rat.speed) {
                alert(this.name + 'không bị bắt' + Rat.name);
            }
        }
    }
    eatRat(){
        this.weight+=Rat.weight;
        alert(this.name + ' ăn chuột rồi');
    }
}