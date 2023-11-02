// a class without constructor

class  mathHelper {
    add(num1, num2){
        return num1 + num2
    }
    sub(num1, num2){
        return num1 - num2
    }
}

const mathHelper = new mathHelper()

let resAdd = mathHelper.add(7, 4)
console.log(resAdd)