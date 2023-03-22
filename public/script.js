let input = document.querySelector('input')
let group = document.querySelector('.group')
let list = document.querySelector('.list')
let searchForm = document.querySelector('.search')

function fetch(url, cb, parent) {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {

        let data = JSON.parse(xhr.responseText)
        group.innerHTML = ''
        parent.innerHTML = ''
        cb(data)
      } else {
        group.innerHTML = ''
        group.innerHTML = '<h1>OPPS! No Data with This Country Name</h1>'
      }
    }
  }
  xhr.open('GET', url, true)
  xhr.send()
}

input.addEventListener('input', () => {
  if (input.value) {
    fetch(`/search?q=${input.value}`, domListElement, list)
  } else {
    list.innerHTML = ''
  }
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()

  list.innerHTML = ''

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=07975b6284106c9be0051b263f218d66`
  fetch(url, domCardElement, group)

})

let domListElement = (data) => {

  data.forEach(item => {
    let li = document.createElement('li')
    li.className = 'count-item';
    li.textContent = item.name;
    list.appendChild(li)


    li.addEventListener('click', () => {
      input.value = li.textContent;

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=07975b6284106c9be0051b263f218d66`
      fetch(url, domCardElement, group)
      list.innerHTML = ''
    })
  });

};

let domCardElement = (data) => {
  let box = document.createElement("div");
  box.className = "box";
  group.appendChild(box);

  let contentDiv = document.createElement("content");
  contentDiv.className = "content";
  box.appendChild(contentDiv);

  let title = document.createElement("h2");
  title.className = "title";
  title.textContent = data.name || 'OPPS !! Country not found';
  contentDiv.appendChild(title);


  let briefDiv = document.createElement("div");
  briefDiv.className = "brief";
  contentDiv.appendChild(briefDiv);

  let temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = "temperature";
  briefDiv.appendChild(temp);

  let tempSpan = document.createElement("span");
  tempSpan.textContent = `${data.main.temp} k`; //
  temp.appendChild(tempSpan);

  let wind = document.createElement("p");
  wind.className = "wind ";
  wind.textContent = "wind Spread : ";
  briefDiv.appendChild(wind);

  let windSpan = document.createElement("span");
  windSpan.textContent = data.wind.speed;  //
  wind.appendChild(windSpan);
};
