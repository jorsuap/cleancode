type Size = '' | 'M' |'L' |'XL';
class Product {
    constructor(
        public name:string = '',
        public price:number = 0,
        public size:Size = ''
    ){
       
    }


    isProductReady():boolean{
        for (const key in this) {
          switch (typeof this[key]) {
            case 'string':
                //<string> se usa para indicarle que lo trate como un string porque genera error por el tipo de dato
                if((<string>this[key]).length <= 0) throw new Error(`${this[key]} is Empty`);
                break;
            case 'number':
                if((<number>this[key]) <= 0) throw new Error(`${this[key]} is zero`);
                break;
            case 'boolean':
                if((<boolean>this[key])) throw new Error(`${this[key]} is false`);
                break;
            default:
                throw new Error(`${this[key]} is not valid`);
          }
        }
        return true;
    };

    toString(){
        if(!this.isProductReady()) return
        return `${this.name} (${this.price}), ${this.size}`
    }

}

    (()=>{
        const bluePants = new Product('Blue large pants', 10, 'M');
        console.log(bluePants.toString())
    })();