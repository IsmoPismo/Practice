new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack: function(){
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player deals ${damage} damage`
      })
      if(this.checkIfWon()){
        return;
      }

      this.monsterAttacks();
    },
    specialAttack: function(){
      let damage = this.calculateDamage(9, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player lands a critical hit: ${damage} damage`
      })
      if(this.checkIfWon()){
        return;
      }

      this.monsterAttacks();
    },
    heal: function(){
      if(this.playerHealth < 90){
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: `Player uses light of bright`
      })
      this.monsterAttacks();
    },
    giveUp: function(){
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      let damage = this.calculateDamage(5, 13);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster deals ${damage} damage`
      })
      this.checkIfWon();
    },
    calculateDamage(min, max){
      return Math.max((Math.ceil(Math.random() * max)), min);
    },
    checkIfWon(){
      if(this.monsterHealth <= 0){
        if(confirm('You won! Do you want to start a new game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
          this.monsterHealth = 0;
        }
        return true
      } else if (this.playerHealth <= 0){
        if(confirm('You lost. Do you want to start a new game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
          this.playerHealth = 0;
        }
        return true
      }
      return false
    }
  }
})
