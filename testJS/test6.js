const brojevi1 = [1, 2,3,4,5];
const brojevi2 = [6,7,8,9,10];
const brojevi3 = [11, 12, 13, 14];

const convertKm =(numbers, numbers2, numbers3)=>{
    const kon = numbers.concat(numbers2, numbers3);

    const inici = kon.map((num)=>{
        return num * 2.5;
    })

    const  kvadrat = inici.map((num)=>{
        return num * num;
    })
    const total = kvadrat.reduce((kvadrat, sum)=>{
        return kvadrat + sum;
    })
    const uslov =()=>{
        if (total < 6343.76 ) {
            console.log('nadji manji broj od', total)
        }return uslov;
    }
    uslov();
    /*const fix = total.map((num)=> num.toFixed((2)))
    return fix;*/
    /*const fix =(num)=>{
        num.toFixed(2);
    }
    fix();*/

    const fix = kvadrat.map((num)=> num.toFixed((2)));         //const kvadrat = parni.map((nums)=>nums*nums);    //nece da vrati funkciju total tj. reduce i da konacan rezultast

    return fix;

}
console.log('ovo je rezultat:', convertKm(brojevi1, brojevi2, brojevi3))

