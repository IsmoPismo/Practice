new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    damageLog: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      this.monsterHealth -= this.calculateDamage(2, 10);
      if(this.checkGame()){
        return;
      }

      this.playerHealth -= this.calculateDamage(4, 11);
      this.checkGame();
    },
    specialAttack: function() {
      this.playerHealth -= this.calculateDamage(4, 11);
      this.monsterHealth -= this.calculateDamage(6, 17);
      // this.checkGame();
    },
    heal: function() {
      this.playerHealth += this.calculateDamage(2, 12);
      this.playerHealth -= this.calculateDamage(4, 11);
      // this.checkGame();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.ceil(Math.random() * max), min)
    },
    checkGame: function() {
      if (this.monsterHealth < 1) {
        // this.monsterHealth = 0;
        if(confirm('You won! Do you want to play a new game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth < 1) {
        // this.playerHealth = 0;
        if(confirm('You lost... Do you want to play a new game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})
