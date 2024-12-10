
function animateNumbers(id, target, duration) {
  const element = document.getElementById(id);
  const start = 0;
  const startTime = performance.now();

  function easeOutQuad(time, startValue, changeInValue, duration) {
    time /= duration;
    return -changeInValue * time * (time - 2) + startValue;
  }

  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
      const progress = easeOutQuad(elapsedTime, start, target, duration);
      element.textContent = Math.floor(progress) + "+";
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = target + "+"; // Garante o valor final exato
    }
  }

  // Inicia a animação
  requestAnimationFrame(updateNumber);

  // Adiciona o efeito de esmaecimento
  element.classList.add("visible");
}

// Inicia as animações ao carregar a página
window.addEventListener("load", () => {
  animateNumbers("num1", 100, 2000); // Anima até 100 em 2 segundos
  animateNumbers("num2", 50, 2000);  // Anima até 50 em 2 segundos
  animateNumbers("num3", 500, 2000); // Anima até 500 em 2 segundos
});

function animateNumber(id, target, duration) {
  const element = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 16); // Calcula o incremento para cada frame (~60fps)

  // Adiciona o efeito de esmaecer
  element.classList.add("visible");

  function updateNumber() {
    start += increment;
    if (start >= target) {
      element.textContent = Math.floor(target) + "+"; // Garante que o número final seja exato
    } else {
      element.textContent = Math.floor(start) + "+"; // Atualiza o número
      requestAnimationFrame(updateNumber); // Solicita o próximo frame
    }
  }

  updateNumber(); // Inicia a animação
}

// Inicia a animação quando a página carrega
window.addEventListener("load", () => {
  animateNumber("num", 32, 2000); // Anima o número até 32 em 2 segundos
});

