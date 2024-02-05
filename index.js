function isToggle(){
  let defaultValue = document.querySelector('.change');
  console.log(defaultValue.innerHTML);
  if(defaultValue.innerHTML === 'ON'){
    defaultValue.innerHTML = 'OFF';
  } else if(defaultValue.innerHTML === 'OFF'){
    defaultValue.innerHTML = 'ON';
  }
}