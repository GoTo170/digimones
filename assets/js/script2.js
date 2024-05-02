$(document).ready(function(){

    function obtenerDigimones(){
        $('#obtenerDigimones').click(function(){
            $.ajax({
                URL: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data){
                    mostrarDigimones(data);
                },
                error: function(xhr,status,error){
                    console.error('Error al obtener datos:', error);
                }
            })
        });
    }

    //funcion para mostrar los digimon en cards
function mostrarDigimones(){
    let digimonList = '';
    $.map (digimones, function(digimon){
        let card = `
        <div class="col-lg-4 col-md-6 col-mb-4"
            <div class = "card">
                <img src "${digimon.img}" class="card-img-top" alt="${digimon.name}">
                <div class="card-body">
                    <h5 class="card-title">${digimon.name}</h5>
                    <p class="card-text"> nivel: ${digimon.level}</p>
                    <p class="card-text"> Tipo: ${digimon.type}</p>
                </div>
            </div>
        </div>
    `;
    digimonList = digimonList + card;
    });
    $(`#digimonList`).html(digimonList);
}

//Ejecutar la funcion para mostrar los digimons
obtenerDigimones();
});
