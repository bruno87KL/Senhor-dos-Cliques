// Jogador
let player = {
  gold: 0,
  damage: 1,
  level: 1,
  upgradeCost: 10,
  goldMultiplier: 1,
  goldUpgradeCost: 20
};

// Inimigos
let enemies = [
  { name: "🐉 Dragão", maxHP: 15, reward: 5 },
  { name: "🦇 Morcego Gigante", maxHP: 20, reward: 8 },
  { name: "🧟 Zumbi", maxHP: 10, reward: 3 }
];
let currentEnemyIndex = 0;
let enemy = { ...enemies[currentEnemyIndex], hp: enemies[currentEnemyIndex].maxHP };

// Missões
let quests = [
  "Derrote 3 inimigos!",
  "Ganhe 50 de ouro!",
  "Suba para nível 5!"
];
let currentQuest = 0;

// Atualiza interface
function updateUI() {
  document.getElementById("enemy-name").textContent = enemy.name;
  const hpPercent = (enemy.hp / enemy.maxHP) * 100;
  document.getElementById("enemy-hp-bar").style.width = hpPercent + "%";
  document.getElementById("enemy-hp-text").textContent = `HP: ${enemy.hp} / ${enemy.maxHP}`;
  document.getElementById("gold").textContent = player.gold;
  document.getElementById("damage").textContent = player.damage;
  document.getElementById("level").textContent = player.level;
  document.getElementById("upgradeCost").textContent = player.upgradeCost;
  document.getElementById("goldUpgradeCost").textContent = player.goldUpgradeCost;
  document.getElementById("quest-text").textContent = quests[currentQuest];
}

// Atacar inimigo
function attackEnemy() {
  enemy.hp -= player.damage;
  if (enemy.hp <= 0) {
    player.gold += enemy.reward * player.goldMultiplier;
    player.level += 1;

    // Passa para o próximo inimigo (loop)
    currentEnemyIndex = (currentEnemyIndex + 1) % enemies.length;
    enemy = { ...enemies[currentEnemyIndex], hp: enemies[currentEnemyIndex].maxHP };

    // Atualiza missão
    currentQuest = (currentQuest + 1) % quests.length;
  }
  updateUI();
}

// Upgrade de dano
function upgrade() {
  if (player.gold >= player.upgradeCost) {
    player.gold -= player.upgradeCost;
    player.damage += 1;
    player.upgradeCost = Math.floor(player.upgradeCost * 1.5);
    updateUI();
  }
}

// Upgrade de ouro
function upgradeGold() {
  if (player.gold >= player.goldUpgradeCost) {
    player.gold -= player.goldUpgradeCost;
    player.goldMultiplier += 0.5;
    player.goldUpgradeCost = Math.floor(player.goldUpgradeCost * 1.7);
    updateUI();
  }
}

// Inicializa
updateUI();
