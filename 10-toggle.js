function isToggle(){
  let defaultValue = document.querySelector('.change');

  if(defaultValue.innerHTML === 'ON'){
    defaultValue.innerHTML = 'OFF';
  } else if(defaultValue.innerHTML === 'OFF'){
    defaultValue.innerHTML = 'ON';
  }
  
}