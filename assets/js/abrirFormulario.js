$(()=>{
    $("#formulario").load("assets/components/cadastro_interno.html");
    
    $("#cadastro_interno").on("click",()=>{
        $("#formulario").load("assets/components/cadastro_externo.html");
      })
    $("#cadastro_externo").on("click",()=>{
        $("#formulario").load("assets/components/cadastro_interno.html");
      })
})