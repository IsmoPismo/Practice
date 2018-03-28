var playLockout = false;
       var gamePlay = false;
       var sb = document.getElementById('start');
       var message = document.getElementById('message');
       var score = document.getElementById('score');
       var gameBoard = document.getElementById('gameboard');
       sb.addEventListener('click', startGame);

       function startGame() {
           // hide start button
           message.innerHTML = "Its working" + gamePlay;
           if (!gamePlay) {
               gamePlay = true;
               // build array for tiles
               // shuffle tiles
               // buildboard
           }
       }
