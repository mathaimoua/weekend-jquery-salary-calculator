$(document).ready(readyNow);

let empData = [];
let monthlyCost = 0;

function readyNow(){
  console.log('readyNow!');
  $('#inputsTable').on('click', submitData);
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
  $('#monthlyCostField').text('$'+Number(monthlyCost));
  $('#tableBotRow').remove();
  $('#mainTable').append(`<tr>
                            <td class="trtd">`+empData[0]+`</td>
                            <td class="trtd">`+empData[1]+`</td>
                            <td class="trtd">`+empData[2]+`</td>
                            <td class="trtd">`+empData[3]+`</td>
                            <td class="salSpace">$`+" "+Number(empData[4])+`</td>
                            <td class="delBtnSpace"><button id="delBtn">Delete</button></td></tr>
                            <tr id="tableBotRow"><td id="emptyBotRow" colspan="6"></td></tr>`);
  // $('.empRow').append(`<tr>`);
  // $('.empRow').append(`<td class="trtd">`+empData[0]+`</td>`);
  // $('.empRow').append(`<td class="trtd">`+empData[1]+`</td>`);
  // $('.empRow').append(`<td class="trtd">`+empData[2]+`</td>`);
  // $('.empRow').append(`<td class="trtd">`+empData[3]+`</td>`);
  // $('.empRow').append(`<td class="salSpace">$`+" "+Number(empData[4])+`</td>`);
  // $('.empRow').append(`<td class="delBtnSpace"><button id="delBtn">Delete</button></td></tr>`);
  } else {
    console.log('Fill all boxes!');
    return -1;
  }
  console.log(monthlyCost);
}

function deleteRow(){
  // console.log($(this).closest('tr').find('.salSpace').text().slice(2));
  let numberSubtract = Number($(this).closest('tr').find('.salSpace').text().slice(2));
  monthlyCost -= numberSubtract
  // console.log(monthlyCost);
  $('#monthlyCostField').text('$'+Number(monthlyCost));
  $(this).closest('tr').remove();
}
