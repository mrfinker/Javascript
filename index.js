function isToggle(){
  let defaultValue = document.querySelector('.change').innerHTML;
  console.log(document.querySelector('.change').innerHTML);
  console.log(defaultValue);
  console.log(2+2);
  if(defaultValue === 'ON'){
    defaultValue.innerHTML = 'OFF'
  } else {
    defaultValue.innerHTML = 'ON'
  }
}