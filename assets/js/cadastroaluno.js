$(()=>{
    $("#content").load("assets/components/alunos/dashboard_alunos.html");
  
    $("#insert").on("click",function(){
      $("#content").load("assets/components/alunos/cadastro_opt.html")
    })
   
    $("#update").on("click",()=>{
      $("#content").load("assets/components/alunos/altera_opt.html");
    })
    $("#delete").on("click",()=>{
      $("#content").load("assets/components/alunos/deletar_aluno.html");
    })
    $("#dashboard").on("click",()=>{
      $("#content").load("assets/components/alunos/dashboard_alunos.html");
    })
    
  
  })