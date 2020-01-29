function Account(name, initDeposit) {
  this.name = name,
  this.initDeposit = initDeposit
}

Account.prototype.withdrawal = function(amount) {
  this.initDeposit -= amount;
  } 
  Account.prototype.deposit = function (amount) {
  this.initDeposit += amount;
  }

$(document).ready(function() {
  var name = $("#name").val();
  var initDeposit = parseInt($("#initDeposit").val());
  var withdrawal = parseInt($("#withdrawal").val());
  var deposit = parseInt($("#deposit").val());
  var newAccount = new Account(name, initDeposit);
  var balance = initDeposit + deposit - withdrawal; 

  $("form#registerForm").submit(function(event) {
    event.preventDefault();
    
    $("#result").append(initDeposit);
    console.log(newAccount)


  });


  $("form#transactionForm").submit(function(event) {
    event.preventDefault();

    newAccount.withdrawal(withdrawal);
    newAccount.withdrawal(deposit);

    console.log(newAccount);

    $("#result").text(newAccount);
  });


});