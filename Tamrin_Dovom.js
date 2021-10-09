function mainObj(object1,object2) {
    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }
    for (let key in object1)
    {if (object1[key]!==object2[key]) return false
    }
    return true

}


function IsEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }

    for (let key in object1) {
        if (typeof(object1[key])=="object"){
            let para1=object1[key]
            let para2=object2[key]
            if (mainObj(para1,para2)===false) return false
        }
        else
        {
            if((object1[key]!==object2[key])) return false
        }

    }
    return true
}

const obj3 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
console.log(IsEqual(obj3,obj4))


function isSame(object1,object2){
    if(object1===object2) return true
    else return false
}

let obj5 = {name: 'Ahmad'}
let obj6 = {name: 'Ahmad'}

console.log(isSame(obj5,obj6))