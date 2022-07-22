var callBackGetSuccess = function(data) {
    console.log( "données api : ", data )
    //alert("Personne présente : " + data.presence_count)
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "LES PERSONNES PRÉSENTES :" + data.presence_count
    var SERVER_NAME = document.getElementById("nom_serveur")
    SERVER_NAME.innerHTML = "NOM DU SERVEUR:" + " " + data.name
    var ID = document.getElementById("id")
    ID.innerHTML = "ID:" + " " + data.id
}


function buttonClickGET(){
    var url = "https://discord.com/api/guilds/998581869031465020/widget.json"
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second succes" )
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function(){
        //alert ( "finished" )
    })
}