let input = document.querySelector('input')
let group = document.querySelector('.group')

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

// btnSearch.click > /serach/value
let domElement = (data) => {
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
