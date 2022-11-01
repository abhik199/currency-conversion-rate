const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the dome
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  const api = "https://api.exchangerate-api.com/v4/latest/USD"

  // fetch(`https://api.exchangerate-api.com/v4/rates${currency_one}`)
  fetch(`${api}`)
  .then((res) => res.json()) // converting json formate
    .then((data) => {    // storing data for data

        // console.log(data.rates);
        data.rates[currency_one]
      const rate = data.rates[currency_two];   // storing data  data conversion_
      console.log(rate)

      // for div class id rateE1
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();

//  today time managenet system in javascript
// simple adding idea for like p text 
const curdata = document.getElementById('date')

// now creating array for day
const getcurrentday = ()=>{
    var weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thusrday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    let currenttime = new Date()
    const day = weekday[currenttime.getDay()]
    return day
}

// creating month using json
const getcurrenttime = ()=>{    // this is fat arrow funcation 
    var months = [
        "January",
        "February", 
        "March", 
        "April", 
        "May", 
        "June",
        "July", 
        "August", 
        "September", 
        "October", 
        "November",
    ]
    // for the months
    var now = new Date()
    var month = months[now.getMonth() + 1]

    // for the date
    var date = now.getDate()

    //for the Hours 
    let Hours = now.getHours()

    // for the minutes
    let minutes = now.getMinutes()

    // for the secound
    let secound = now.getSeconds()

    // for year 
    let year = now.getFullYear()
   

    // now Am or pm condition cheak
    let periods = "AM"
    if(Hours>11){
        periods = "PM"
        if(Hours>12) Hours -= 12
    }
    if(minutes<10){
        minutes = "0" +minutes
    }

    return `${date} ${month} ${year} | ${Hours}:${minutes}${periods}`
}

// now calling this funcation
curdata.innerHTML=getcurrenttime() + " | " + getcurrentday()

