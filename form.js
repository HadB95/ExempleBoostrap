window.onload = function () {
    document.querySelector('form#form button:nth-of-type(2)').addEventListener('click', function () {
        var ok = true;
        var nom = document.getElementById("nom");

        if (!isAlpha(nom.value)) {
            nom.parentNode.parentNode.classList.remove("has-success");
            nom.parentNode.parentNode.classList.add("has-error");
            ok = false;
        } else {
            nom.parentNode.parentNode.classList.remove("has-error");
            nom.parentNode.parentNode.classList.add("has-success");
        }

        var prenom = document.getElementById("prenom");
        if (!isAlpha(prenom.value)) {
            ok = false;
            prenom.parentNode.parentNode.classList.remove("has-success");
            prenom.parentNode.parentNode.classList.add("has-error");
        } else {
            prenom.parentNode.parentNode.classList.remove("has-error");
            prenom.parentNode.parentNode.classList.add("has-success");
        }
        
        
        var tel = document.getElementById("tel");
        if (!isNumerique(tel.value)) {
            ok = false;
            tel.parentNode.parentNode.classList.remove("has-success");
            tel.parentNode.parentNode.classList.add("has-error");
        } else {
            tel.parentNode.parentNode.classList.remove("has-error");
            tel.parentNode.parentNode.classList.add("has-success");
        }
        
        var email = document.getElementById("email");
        if (isEmail(email.value) == false) {
            ok = false;
            email.parentNode.parentNode.classList.remove("has-success");
            email.parentNode.parentNode.classList.add("has-error");
        } else {
            email.parentNode.parentNode.classList.remove("has-error");
            email.parentNode.parentNode.classList.add("has-success");
        }

        var message = document.getElementById("message");
        if (message.value == "") {
            ok = false;
            message.parentNode.parentNode.classList.remove("has-success");
            message.parentNode.parentNode.classList.add("has-error");
        } else {
            message.parentNode.parentNode.classList.remove("has-error");
            message.parentNode.parentNode.classList.add("has-success");
        }
        if (ok == true) {
            var msg = nom.value + " " + prenom.value + "<br/> " + tel.value + " <br/>" + email.value + "<br/>" + message.value;
            document.querySelector('#resultat').innerHTML = msg;
        }
    })
}

function isAlpha(val){
	var ok = false;
	if(val!=''){
		var regex = /^[a-zA-Z\-]*$/;
		ok = regex.test(val);
		
	}
    return ok;
}

function isNumerique(val){
	var ok = false;
	if(val!=''){
		var regex = /^[0-9\.]*$/;
		ok = regex.test(val);
	}
	return ok;
}

function isEmail(val){
	var ok = false;
	if(val!=''){
		var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
		ok = regex.test(val);
	}
    return ok;
}