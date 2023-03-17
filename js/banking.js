//handle deposite button
document.getElementById('deposite-button').addEventListener
('click', function(){
  const depositeInput = document.getElementById('deposite-input');
  const newDepositeAmountText =depositeInput.value;
  const newDepositeAmount =parseFloat(newDepositeAmountText);
  // console.log(depositeAmount);
  const depositeTotal =document.getElementById('deposite-total');
  const previousDepositeText = depositeTotal.innerText;
  const previousDepositeAmount =parseFloat(previousDepositeText);
  const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

  depositeTotal.innerText =newDepositeTotal
  const balanceTotal =document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal =previousBalanceTotal + newDepositeAmount;
  balanceTotal.innerText = newBalanceTotal;
  //clear the deposite field
  depositeInput.value ='';
});

document.getElementById('withdraw-button').addEventListener('click',function()
{
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount =parseFloat(withdrawAmountText);
  
  const withdrawTotal =document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
   const previousWithdrawTotal =parseFloat(previousWithdrawText);

   const newwithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText =newwithdrawTotal;

   const balanceTotal =document.getElementById('balance-total');
   const previousBalanceText =balanceTotal.innerText;
   const previousBalanceTotal =parseFloat(previousBalanceText);
   const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;

   balanceTotal.innerText =newBalanceTotal;
   
   withdrawInput.value ='';
})
