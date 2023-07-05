function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("time").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();

const calcIcon = document.querySelector('#calculatorIcon')
const closeCalcBtn = document.querySelector('.calculator--close__button')

const dadJokes = document.querySelector('.dadjokes')
const dadJokesIcon = document.querySelector('#dadJokesIcon')
const closeDadJokesBtn = document.querySelector('#closeDadJokesBtn')

calcIcon.addEventListener('click', () => {
  calculator.showModal()
})
closeCalcBtn.addEventListener('click', () => {
  calculator.close()
})


dadJokesIcon.addEventListener('click', () => {
  dadJokes.showModal()
})

closeDadJokesBtn.addEventListener('click', () => {
  dadJokes.close()
})

const weatherApp = document.querySelector('.weather__app')
const weatherAppIcon = document.querySelector('#weatherAppIcon')
const closeWeatherAppBtn = document.querySelector('#closeWeatherAppBtn')

weatherAppIcon.addEventListener('click', () => {
  weatherApp.showModal()
})

closeWeatherAppBtn.addEventListener('click', () => {
  weatherApp.close()
})