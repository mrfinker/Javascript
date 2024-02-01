// 7. Functions

function greet(name){
  if(!name || name === undefined){
    console.log('Hi, there!');
  } else {
    console.log(`Hello ${name}`);
  }
}
greet('caleb');
greet('King');
greet();

function converToFahranheit(celsius){
  let result = (celsius * 9 / 5) + 32
  return console.log(`${result} Degré Celsius`);
}
// converToFahranheit(30);

function converToCelsius(Farhanheit){
  let result = (Farhanheit - 32) * 5 / 9
  return console.log(`${result} Degré Farhanheit`);
}
// converToCelsius(86);

function convertTemperature(degree, unit){
  if(unit === 'C'){
    converToFahranheit(degree)
  } else if(unit === 'F'){
    converToCelsius(degree)
  }
}

convertTemperature(30, 'C')
convertTemperature(40, 'C')
convertTemperature(86, 'F')
