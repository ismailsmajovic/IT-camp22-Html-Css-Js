const pal = '1234';

const findPlanidrome =(numbers)=>{
    var find = numbers.split().reverse().join();
    if (find === numbers) {
        return find;
    }else{
        return numbers;
    }
}
console.log(findPlanidrome(pal));