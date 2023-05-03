 const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

const tempSelected = document.getElementById
("temp_diff");
const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

// Celsius to Fahrenheit
const celtofah = (cel) => {
    let Fahrenheit= ((cel * 9 / 5) + 32).toFixed(1);
    return Fahrenheit;
}

// Fahrenheit to  Celsius 
const fahtocel = (fah) => {
    let Celsius= ((fah-32) * 5 / 9).toFixed(1);
    return Celsius;
}

if(valueTemp == 'cel')
{
    document.getElementById("result").innerHTML = celtofah
    (inputTemp)+ "&#176; Fahrenheit";
}

else {
    document.getElementById("result").innerHTML = fahtocel
    (inputTemp)+ "&#176; Celsius";
}
}

/*
let celciusInput = document.querySelector('#celcius > input')

let fahrenhiteInput = document.querySelector('#fahrenhite > input')

*/