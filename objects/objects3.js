/*Из низа бројева изаберите парне двоструке бројеве и израчунајте збир користећи методе филтера низа, мапирања и редукције.
 
нека бројеви = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/

const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const makeAdditinon =(numbres)=>{

    const  parni = numbres.filter((num)=>{
        return num % 2 === 0
    })

    const parni2 = parni.map((num)=>{
        return num * num
    })

    const zbir = parni2.reduce((prev, post)=>{
        return prev + post;
    })

    return zbir;
}
console.log(makeAdditinon(brojevi))