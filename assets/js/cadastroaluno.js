$(()=>{
    $("#content").load("assets/components/alunos/dashboard_alunos.html");
  
    $("#insert").on("click",()=>{
      $("#content").load("assets/components/alunos/cadastro_aluno.html");
    })
    $("#update").on("click",()=>{
      $("#content").load("assets/components/alunos/alterar_aluno.html");
    })
    $("#delete").on("click",()=>{
      $("#content").load("assets/components/alunos/deletar_aluno.html");
    })
    $("#dashboard").on("click",()=>{
      $("#content").load("assets/components/alunos/dashboard_alunos.html");
    })
    
  
  })