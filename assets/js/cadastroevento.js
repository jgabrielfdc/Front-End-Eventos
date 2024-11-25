$(()=>{
  $("#content").load("assets/components/eventos/dashboard_eventos.html");

  $("#insert").on("click",()=>{
    $("#content").load("assets/components/eventos/cadastro_evento.html");
  })
  $("#update").on("click",()=>{
    $("#content").load("assets/components/eventos/alterar_evento.html");
  })
  $("#delete").on("click",()=>{
    $("#content").load("assets/components/eventos/deletar_evento.html");
  })
  $("#dashboard").on("click",()=>{
    $("#content").load("assets/components/eventos/dashboard_eventos.html");
  })
  

})