// Função para formatar o tempo no formato MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  // Função para atualizar o timer a cada segundo
  function startTimer() {
    let seconds = 900; // Timer iniciando com 15 minutos
    const timerElement = document.getElementById("timer");

    function updateTimer() {
      timerElement.textContent = formatTime(seconds);

      // Reduz o tempo em 1 segundo
      seconds--;
    }

    // Chama a função updateTimer a cada segundo
    const timerInterval = setInterval(updateTimer, 1000);
  }

  // Inicia o timer quando a página carrega
  window.onload = startTimer;
