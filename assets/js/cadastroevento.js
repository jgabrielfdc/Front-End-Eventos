function abrirPaginaCadastro() {
    document.getElementById('formularioCadastro').style.display = 'block';
    document.getElementById('formularioAlterar').style.display = 'none';
    document.getElementById('confirmarDelecao').style.display = 'none';
  }
  
  function alterarEvento() {
    document.getElementById('formularioCadastro').style.display = 'none';
    document.getElementById('formularioAlterar').style.display = 'block';
    document.getElementById('confirmarDelecao').style.display = 'none';
  }
  
  function deletarEvento() {
    document.getElementById('formularioCadastro').style.display = 'none';
    document.getElementById('formularioAlterar').style.display = 'none';
    document.getElementById('confirmarDelecao').style.display = 'block';
  }
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
    } else {
      sidebar.style.display = 'block';
    }
  }