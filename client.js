$(document).ready(readyNow);

let empData = [];
let monthlyCost = 0.00;

function readyNow(){
  console.log('readyNow!');
  $('#submitBtn').on('click', submitData);
  $('#mainTable').on('click', '#delBtn', deleteRow);
}

function submitData(){
  if ($('#fName').val() != '' && $('#lName').val() != '' && $('#idBox').val() != '' && $('#titleBox').val() != '' && $('#salaryBox').val() != ''){
  empData[0] = $('#fName').val();
  empData[1] = $('#lName').val();
  empData[2] = $('#idBox').val();
  empData[3] = $('#titleBox').val();
  empData[4] = $('#salaryBox').val();
  $('#fName').val('');
  $('#lName').val('');
  $('#idBox').val('');
  $('#titleBox').val('');
  $('#salaryBox').val('');
  monthlyCost += Number(empData[4]);
  if (monthlyCost > 20000){
    $('#monthlyCostText').css("background-color","lightcoral");
  }
  $('#monthlyCostField').text('$'+parseFloat(Number(monthlyCost)).toFixed(2));
  $('#tableBotRow').remove();
  $('#mainTable').append(`<tr>
                            <td class="ertd">`+empData[0]+`</td>
                            <td class="ertd">`+empData[1]+`</td>
                            <td class="ertd">`+empData[2]+`</td>
                            <td class="ertd">`+empData[3]+`</td>
                            <td class="salSpace">$`+" "+Number(empData[4])+`</td>
                            <td class="delBtnSpace"><button id="delBtn">Delete</button></td></tr>
                            <tr id="tableBotRow"><td id="emptyBotRow" colspan="6"></td>
                            </tr>`);
  } else {
    console.log('Fill all boxes!');
    alert("Please fill all boxes with information!");
    return -1;
  }
}

function deleteRow(){
  let numberSubtract = Number($(this).closest('tr').find('.salSpace').text().slice(2));
  monthlyCost -= numberSubtract;
  if (monthlyCost <= 20000){
    $('#monthlyCostText').css("background-color", "rgb(255, 249, 211)");
  } else if (monthlyCost > 20000){
    $('#monthlyCostText').css("background-color", "lightcoral");
  }
  $('#monthlyCostField').text('$'+parseFloat(Number(monthlyCost)).toFixed(2));
  $(this).closest('tr').remove();
}
