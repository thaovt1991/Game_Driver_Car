arrBarrier = [
    ["./image/barrie.png", 50, 30, 1],
    ["./image/barrie2.png", 40, 50, 1],
    ["./image/car1.png", 50, 80, 3],
    ["./image/car2.png", 60, 80, 3],
    ["./image/car3.png", 60, 80, 3],
    ["./image/car4.png", 60, 100, 2],
    ["./image/car5.png", 60, 100, 2],
    ["./image/car6.png", 60, 120, 2],
    ["./image/car7.png", 60, 120, 2],
    ["./image/moto.png", 30, 50, 3],
    ["./image/moto.png", 30, 50, 3],
    ["./image/moto.png", 30, 50, 4],
]

class Barrier {
    constructor(image, left, top, width, height, speed) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.imageBarrier = image;
        this.speed = speed;
    };
    setBarrier() {
        let random = Math.floor(Math.random() * (arrBarrier.length - 1));
        this.imageBarrier = arrBarrier[random][0]
        this.width = arrBarrier[random][1]
        this.height = arrBarrier[random][2]
        this.speed = arrBarrier[random][3]
        this.top = -(Math.floor(Math.random() * (500 - this.height)) + this.height);
        this.left = Math.floor(Math.random() * (310 - this.width));   
    }

    getLeft() {
        return this.left;
    };

    getTop() {
        return this.top;
    };
    setLeft(left) {
        this.left = left;
    };
    setTop(top) {
        this.top = top;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };

    setWidth(width) {
        this.width = width;
    };

    setHeight(height) {
        this.height = height;
    };

    autoRun() {
        if (this.top < 590) {
            this.top += this.speed;
        } else {
            this.setBarrier();
        }
        this.clearBarrier(this.left, this.top - this.speed, this.width, this.height)
        this.createBarrier(this.left, this.top, this.width, this.height);
    }

    createBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = this.imageBarrier;
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h)
        }
    }
    clearBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }

}


let random = Math.floor(Math.random() * (arrBarrier.length - 1))
let imageBar = arrBarrier[random][0];
let widthBar = arrBarrier[random][1]
let heightBar = arrBarrier[random][2]
let topBar = -(Math.floor(Math.random() * 1000 + arrBarrier[random][2]));
let leftBar = Math.floor(Math.random() * (310 - arrBarrier[random][1]));
let bar = new Barrier(imageBar, leftBar, topBar, widthBar, heightBar);
bar.createBarrier(leftBar, topBar, widthBar, heightBar)






