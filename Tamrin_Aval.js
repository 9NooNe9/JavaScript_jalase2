// constructor function for food menu

function Food(name, type, price, deliveryTime) {
    this.name = name;
    this.type = type;
    this.price = [price, '$'];
    this.deliveryTime = deliveryTime;
    this.totalRate = 0;
    this.comment = [];
    this.isReady = false;
    this.order = function premiumUser(boolean){
        if(boolean) console.log(0.8*this.price[0],this.totalRate)
        else console.log(this.price[0],this.totalRate)
    }
    this.setRate = function calcRate(rateVal){
        if (this.totalRate === 0) this.totalRate = rateVal;
        else this.totalRate = (this.totalRate+rateVal)/2
    }
}


let kabab = new Food('Kabab','traditional',4 ,'30 min')
console.log(kabab)

let chicken = new Food('chicken','traditional','4.5 $','40 min')
console.log(chicken)


let rate1 = kabab.setRate(4.5)
let rate2 = kabab.setRate(4)

console.log(kabab)

let rate3 = chicken.setRate(3)
let rate4 = chicken.setate(3.5)

console.log(chicken)



console.log(kabab.order(true))
console.log(chicken.order(false))



//factory function for food menu

function food(name, type, price, deliveryTime,order) {
    return {
        name,
        type,
        price,
        deliveryTime,
        totalFoodRate:0,
        comments: [],
        isReady: false,
        order:function premiumUser(True){
            if(True) console.log(0.8*this.price[0],this.totalFoodRate)
            else console.log(this.price[0],this.totalFoodRate)
        },
        setRate:function addRate(rateVal){
            if (this.totalFoodRate===0) this.totalFoodRate=rateVal;
            else this.totalFoodRate=(this.totalFoodRate+rateVal)/2
        }
    }
}


let pizza=food('pizza','fast-food',[45, '$'],`25 min`)
console.log(pizza)



let rateCustomer1=pizza.setRate(4)
let rateCustomer2=pizza.setRate(5)

console.log(pizza.totalFoodRate)


console.log(pizza.order(true))
console.log(pizza.order(false))




function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:0,
        text,
        rate:function SetRate(rateNum) {
            if (this.totalRate === 0) this.totalRate = rateNum;
            else this.totalRate = (this.totalRate + rateNum) / 2
        }
    }

}

let comment1=addComment('Reza','delicious!')
console.log(comment1)
kabab.comments.push(comment1)
console.log(kabab)

let comment2=addComment('Zahra','nice and yummi!')
pizza.comments.push(comment2)
console.log(pizza)


let rateComment1=comment2.rate(5)
console.log(comment2.totalRate)
console.log(comment2)
console.log(pizza)