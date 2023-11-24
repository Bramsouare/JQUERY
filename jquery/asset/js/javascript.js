$(document).ready(function () {
    $("#btn_envoyer").click(function () {

        verif();
    });

    function verif(){
       
    var envoi = true;
    var nom = $("#nom").val();
    if (nom == "") {   
        envoi = false;
        $("#n").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#n").hide();
    };

    var envoi = true;
    var prenom = $("#prenom").val();
    if (prenom == "") {
        envoi = false;
        $("#p").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#p").hide();
    };
    var envoi = true;
    var code = $("#code").val();
    if (code == "") {
        envoi = false;
        $("#c").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#c").hide();
    };
    var envoi = true;
    var sexe = $("#sexe").val();
    if (sexe == "") {
        envoi = false;
        $("#s").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#s").hide();
    };
    var envoi = true;
    var date = $("#date").val();
    if (date == "") {
        envoi = false;
        $("#d").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#d").hide();
    };
    var envoi = true;
    var email = $("#email").val();
    if (email == "") {
        envoi = false;
        $("#e").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#e").hide();
    };
    var envoi = true;
    var votre = $("#votre").val();
    if (votre == "") {
        envoi = false;
        $("#v").show();
        e.preventDefault();
    }
    else if (envoi == true) {
        $("#v").hide();
    };

};
  
});
