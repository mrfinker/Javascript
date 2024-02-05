function isToggle(){
  let defaultValue = document.querySelector('.change').innerHTML;
  console.log(document.querySelector('.change').innerHTML);
  console.log(defaultValue);
  if(defaultValue === 'ON'){
    defaultValue.innerHTML = 'OFF'
  } else {
    defaultValue.innerHTML = 'ON'
  }
}