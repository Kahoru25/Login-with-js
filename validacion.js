function validation(){
    let usuario = [
        {user: "pruebafront@coex.com", pass: " "}
    ]
    let u = document.getElementById("floatingInput");
    let p = document.getElementById("floatingPassword");

    for (let i=0; i< usuario.length; i++){

        if(u.value==usuario[i].user && p.value == usuario[i].pass){
            window.location.replace("./exitoso.html")
    }else{
        alert("Invalido")
    }
    }

}