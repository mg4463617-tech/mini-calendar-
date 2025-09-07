const monthName E1= document.getElementById("month-name");
const dayName E1= document.getElementById("day-name");
const dayNum E1= document.getElementById("day-number");
const year E1= document.getElementById("year");

const date= new Date();
const month= date.get month();
monthNameE1.innerText=date.toLocaleString("en",{month:"long"})
dayNameE1.innerText=date.toLocaleString("en",{weekday:"long"})
  dayNumE1.innerText=Date.getdate()
  yearE1.innerText=date.getFullYear()
