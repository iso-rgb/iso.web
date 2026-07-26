let currentMode = 0; 

function switchMode(targetMode) {
  const terminal = document.getElementById('terminal-screen');
  const portfolio = document.getElementById('portfolio-screen');
  const hud = document.getElementById('hud-screen');
  const btn = document.getElementById('toggle-view-btn');

  if (targetMode !== undefined) {
    currentMode = targetMode;
  } else {
    currentMode = (currentMode + 1) % 3;
  }

  if (terminal) terminal.style.display = 'none';
  if (portfolio) portfolio.style.display = 'none';
  if (hud) hud.style.display = 'none';

  if (currentMode === 0) {
    if (terminal) terminal.style.display = 'block';
    if (btn) btn.innerText = '[ 🖼️ GUI Moda Geç ]';
  } else if (currentMode === 1) {
    if (portfolio) portfolio.style.display = 'block';
    if (btn) btn.innerText = '[ 🖥️ HUD Moda Geç ]';
  } else if (currentMode === 2) {
    if (hud) hud.style.display = 'block';
    if (btn) btn.innerText = '[ >_ Terminale Dön ]';
  }
}

function toggleView() {
  switchMode();
}
