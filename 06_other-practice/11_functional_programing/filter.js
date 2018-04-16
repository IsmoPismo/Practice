function getShortMessages(messages) {
      return messages.filter(function(val){
        return val.message.length < 50
      }).map(function(msg){
        console.log(msg);
        return msg.message;
      });
    }

    module.exports = getShortMessages
