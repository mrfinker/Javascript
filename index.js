function isToggle(){
  let defaultValue = document.querySelector('.change').innerHTML;
  console.log(defaultValue);
  if(defaultValue === 'ON'){
    defaultValue = 'OFF'
    console.log(defaultValue);
  } else if(defaultValue === 'OFF'){
    defaultValue.innerHTML = 'ON'
    console.log(defaultValue);
  }
}