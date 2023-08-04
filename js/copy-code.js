function copyTextareaContent() {
  // Seleciona o conteúdo do código Pix
  const textarea = document.getElementById("codePIX");
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand("copy");

  // Alerta de código copiado
  alert("Código copiado!");
}
