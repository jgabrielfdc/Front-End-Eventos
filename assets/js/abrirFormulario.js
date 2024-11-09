function abrirFormulario(elementId,interno){
    let element=document.getElementById(elementId);
    element.className="d-none";
    console.log(element);
    if(interno){
        document.getElementById("login_externo").className="bg-light text-dark border border-dark p-2 rounded w-25 h-auto text-center d-none";
        document.getElementById("login_interno").className="bg-light text-dark border border-dark p-2 rounded w-25 h-auto text-center ";
    }else{
        document.getElementById("login_interno").className="bg-light text-dark border border-dark p-2 rounded w-25 h-auto text-center d-none";
        document.getElementById("login_externo").className="bg-light text-dark border border-dark p-2 rounded w-25 h-auto text-center ";
    }
}