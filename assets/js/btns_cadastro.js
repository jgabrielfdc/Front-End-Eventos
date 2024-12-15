$(document).ready(function(){
    $("#participante_interno").on("click",function(){
        $("#content").load("assets/components/alunos/interno/cadastro_aluno.html")
    })
    $("#participante_externo").on("click",function(){
        $("#content").load("assets/components/alunos/externo/cadastro_aluno.html")
    })

    $("#altera_externo").on("click",function(){
        $("#content").load("assets/components/alunos/externo/alterar_aluno.html")
    })
    $("#altera_interno").on("click",function(){
        $("#content").load("assets/components/alunos/interno/alterar_aluno.html")
    })
})