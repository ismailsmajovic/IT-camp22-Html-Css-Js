

const auto ={
    marka: 'audi',
    model:'A6',
    maxBrzina: 220,
    trenutnaBrzina: 0,
    vozi: function(value){
        console.log(this.trenutnaBrzina += value)
        console.log(this.trenutnaBrzina);
         this.trenutnaBrzina += value;

         if (this.trenutnaBrzina + value >= this.maxBrzina) {
        console.log('Prekoracili ste brzinu');
         }else{
             this.trenutnaBrzina += value;
            //break;
         }
    },
    brake: function(value){
         this.trenutnaBrzina -= value;
    },
    stop: function(){
         this.trenutnaBrzina = 0;
    }
};
/*
auto.vozi();
auto.vozi();
auto.vozi();
auto.vozi();
auto.vozi();
auto.vozi();
auto.vozi();
auto.vozi();
*/

/*
for (let index = 0; index < 8; index++) {
    auto.vozi()
    
}*/


/*
auto.brake();
auto.brake();
auto.brake();
auto.brake();
*/

/*
for (let index = 0; index  < 4; index++) {
    auto.brake()
    
}*/

//auto.stop();

//auto.stop()

auto.vozi(180);
auto.brake(20)


console.log(auto.trenutnaBrzina)

console.log("nesto  \"\dfedf\"\ ");