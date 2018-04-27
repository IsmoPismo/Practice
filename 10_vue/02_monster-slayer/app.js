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
      this.damageLog = [];
    },
    attack: function() {
      let dmg = this.calculateDamage(2, 10);
      this.damageLog.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + dmg});
      this.monsterHealth -= dmg;
      if(this.checkGame()){
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function() {
      let dmg = this.calculateDamage(12, 22);
      this.damageLog.unshift({
        isPlayer: true,
        text: 'Player\'s Special attack causes ' + dmg + ' damage!'});
      this.monsterHealth -= dmg;
      if(this.checkGame()){
        return;
      }
      this.monsterAttack();
    },
    heal: function() {
      if (this.playerHealth >=90){
        this.playerHealth = 100;
        this.damageLog.unshift({
          isPlayer: true,
          text: 'Player heals to full health'});
      } else {
        this.playerHealth += 10;
        this.damageLog.unshift({
          isPlayer: true,
          text: 'Player heals himself for 10'});
      }
      this.monsterAttack();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.ceil(Math.random() * max), min)
    },
    monsterAttack: function(){
      let dmg = this.calculateDamage(4, 11);
      this.damageLog.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + dmg});
      this.playerHealth -= dmg;
      this.checkGame();
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
  },
  beforeUpdate: function(){
    if(this.playerHealth < 0){
      this.playerHealth = 0;
    }
    if(this.monsterHealth < 0){
      this.monsterHealth = 0;
    }
  }
});
