window.onload = function(){
    document.querySelector('form#form button:nth-of-type(2)').addEventListener('click', function () {
        Contact.setOk(true);
        Contact.setNom(document.getElementById("nom"));
        Contact.setPrenom(document.getElementById("prenom"));
        Contact.setTel(document.getElementById("tel"));
        Contact.setEmail(document.getElementById("email"));
        Contact.setMessage(document.getElementById("message"));
        Contact.afficher();
    });
}