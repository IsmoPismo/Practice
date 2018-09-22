new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function(){
      this.monsterHealth -= this.calculateDamage(3, 10);
      if(this.checkIfWon()){
        return;
      }

      this.playerHealth -= this.calculateDamage(5, 13);
      this.checkIfWon();
    },
    specialAttack: function(){

    },
    heal: function(){

    },
    giveUp: function(){

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
        }
        this.monsterHealth = 0;
        return true
      } else if (this.playerHealth <= 0){
        if(confirm('You lost. Do you want to start a new game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        this.playerHealth = 0;
        return true
      }
      return false
    }
  }
})
