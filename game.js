let enemyHP = 10;
let gold = 0;
let damage = 1;
let upgradeCost = 10;

function attackEnemy() {
  enemyHP -= damage;
  if (enemyHP <= 0) {
    gold += 5;
    enemyHP = 10 + Math.floor(Math.random() * 5); // aumenta um pouco a vida
  }
  updateUI();
}

function upgrade() {
  if (gold >= upgradeCost) {
    gold -= upgradeCost;
    damage++;
    upgradeCost = Math.floor(upgradeCost * 1.5); // aumenta custo
    updateUI();
  }
}

function updateUI() {
  document.getElementById("enemyHP").textContent = enemyHP;
  document.getElementById("gold").textContent = gold;
  document.getElementById("damage").textContent = damage;
  document.getElementById("upgradeCost").textContent = upgradeCost;
}

// Inicializa a UI
updateUI();

