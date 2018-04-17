function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.some(function(val){

      return val.id == goodUsers[0].id;
    })
  };
}

module.exports = checkUsersValid;
