let url;

let input = document.querySelector('input')
let conatin = document.querySelector('.conatin')

let xhr = new XMLHttpRequest()

input.addEventListener('input', () => {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=07975b6284106c9be0051b263f218d66`
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText)
      let countryName = data.name;
      let countryTep = `${data.main.temp} k`;
      let countryWind = data.wind.speed;
console.log(data);
    }
  }
  xhr.open('GET', url, true)
  xhr.send()
})


