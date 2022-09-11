// https://www.omnicalculator.com/finance/turnover-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const turnoverrateRadio = document.getElementById('turnoverrateRadio');
const averagenumberofemployeesRadio = document.getElementById('averagenumberofemployeesRadio');
const numberofemployeeswholeftRadio = document.getElementById('numberofemployeeswholeftRadio');

let turnoverrate;
let averagenumberofemployees = v1;
let numberofemployeeswholeft = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

turnoverrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Average number of employees';
  variable2.textContent = 'Number of employees who left';
  averagenumberofemployees = v1;
  numberofemployeeswholeft = v2;
  result.textContent = '';
});

averagenumberofemployeesRadio.addEventListener('click', function() {
  variable1.textContent = 'Turnover rate';
  variable2.textContent = 'Number of employees who left';
  turnoverrate = v1;
  numberofemployeeswholeft = v2;
  result.textContent = '';
});

numberofemployeeswholeftRadio.addEventListener('click', function() {
  variable1.textContent = 'Turnover rate';
  variable2.textContent = 'Average number of employees';
  turnoverrate = v1;
  averagenumberofemployees = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(turnoverrateRadio.checked)
    result.textContent = `Turnover rate = ${computeturnoverrate().toFixed(2)}`;

  else if(averagenumberofemployeesRadio.checked)
    result.textContent = `Average number of employees = ${computeaveragenumberofemployees().toFixed(2)}`;

  else if(numberofemployeeswholeftRadio.checked)
    result.textContent = `Number of employees who left = ${computenumberofemployeeswholeft().toFixed(2)}`;
})

// calculation

function computeturnoverrate() {
  return (Number(numberofemployeeswholeft.value) / Number(averagenumberofemployees.value)) * 100;
}

function computeaveragenumberofemployees() {
  return Number(numberofemployeeswholeft.value) / (Number(turnoverrate.value) / 100);
}

function computenumberofemployeeswholeft() {
  return Number(averagenumberofemployees.value) * (Number(turnoverrate.value) / 100);
}