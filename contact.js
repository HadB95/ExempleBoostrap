var Contact = {
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    message: "",
    ok: true,

    // Setters
    setNom: function (e) {
        if (this.isAlpha(e.value)) {
            this.nom = e.value;
            this.success(e);
        }
        else {
            this.error(e);
            this.ok = false;
        }
    },
    setPrenom: function (e) {
        if (this.isAlpha(e.value)) {
            this.prenom = e.value;
            this.success(e);
        }
        else {
            this.error(e);
            this.ok = false;
        }
    },
    setTel: function (e) {
        if (this.isNumerique(e.value)) {
            this.tel = e.value;
            this.success(e);
        }
        else {
            this.error(e);
            this.ok = false;
        }
    },

    setEmail: function (e) {
        if (this.isEmail(e.value)) {
            this.email = e.value;
            this.success(e);
        }
        else {
            this.error(e);
            this.ok = false;
        }
    },
    setMessage: function (e) {
        if (e.value != "") {
            this.message = e.value;
            this.success(e);
        }
        else {
            this.error(e);
            this.ok = false;
        }
    },

    setOk: function(val){
        this.ok = val;
    },

    // Erreurs
    error: function (e) {
        e.parentNode.parentNode.classList.remove("has-success");
        e.parentNode.parentNode.classList.add("has-error");
    },
    success: function (e) {
        e.parentNode.parentNode.classList.remove("has-error");
        e.parentNode.parentNode.classList.add("has-success");
    },

    // RegEx
    isAlpha: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[a-zA-Z\-]*$/;
            ok = regex.test(val);

        }
        return ok;
    },

    isEmail: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
            ok = regex.test(val);
        }
        return ok;
    },

    isNumerique: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[0-9\.]*$/;
            ok = regex.test(val);
        }
        return ok;
    },


    // Affichage
    afficher: function () {
        if (this.ok) {
            var msg = this.nom + " " + this.prenom + "<br/>" + this.tel + " <br/>" + this.email + "<br/>" + this.message;
            document.querySelector('#resultat').innerHTML = msg;
        }
    }
}