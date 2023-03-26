const planetaryTravel =(scaleNumber) =>{
    if(scaleNumber > 10000){
        let isOne = false;
        let leap = 1;
        while(isOne === false){
            if(isEven(scaleNumber)){
                scaleNumber = scaleNumber / 2;
                console.log(`Salto numero ${leap}: ${scaleNumber}`);
                if(scaleNumber === 1){
                    isOne = true;
                    console.log("<-----¡Bienvenido al planeta Tierra!----->");
                }
                leap++;
            }
            else{
                scaleNumber = scaleNumber * 3 + 1;
                console.log(`Salto numero ${leap}: ${scaleNumber}`);
                if(scaleNumber === 1){
                    isOne = true;
                    console.log("<-----¡Bienvenido al planeta Tierra!----->");
                }
                leap++;
            }
        }
    }
    else{
        console.log("El numero ingresado debe ser mayor a 10000");
    }
}
const isEven = (scaleNumber) => {
    return scaleNumber % 2 === 0;
  };
planetaryTravel(10001);