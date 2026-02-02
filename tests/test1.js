
// class A {
//     x = 2;

//    this.test() {
//         console.log(this.x);
//     }
// }

// a1 = new A();
// const f1 = a1.prtInfo;
// const f2 = a1.test;

// f1();
// f2();

class Bar {
    #x = 2;

    set setX(argX) {
        if(argX > 0) {
            this.#x = argX;
       
        }

    }
    get x(){
        return this.#x;
    }
}

obj = new Bar();
obj.x =20;
console.log(obj.x)
