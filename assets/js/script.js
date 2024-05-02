const obtenerDigimonPromesas = () => {
    
    return new Promise(function( resolve, reject){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function(digimones){
            if(digimones.ok){
                throw new Error("error");
            }
            return digimones.json();
        })
        .then(function(data){
            resolve(data);
        })
        .catch(function(error){
            reject(error);
        })
    });
}

function generarSaludo(){
    console.log("hola");
}

obtenerDigimonPromesas()
    .then((digimones) => {
        digimones.map((digimon)=>{
            console.log(digimon);
        })
    }).catch((error) => {
        console.log(`El error es: ${error}`);
    })

    generarSaludo();