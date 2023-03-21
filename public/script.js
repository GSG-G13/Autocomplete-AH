let domElement = (item) => {
  let box = document.createElement("div");
  box.className = "box";
  group.appendChild(box);

  let contentDiv = document.createElement("content");
  contentDiv.className = "content";
  box.appendChild(contentDiv);

  let title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;
  contentDiv.appendChild(title);


  let briefDiv = document.createElement("div");
  briefDiv.className = "brief";
  contentDiv.appendChild(briefDiv);

  let temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = "temperature";
  briefDiv.appendChild(temp);

  let tempSpan = document.createElement("span");
  tempSpan.textContent = item.test; //
  temp.appendChild(tempSpan);

  let wind = document.createElement("p");
  wind.className = "wind ";
  wind.textContent = "wind Spread : ";
  briefDiv.appendChild(wind);

  let windSpan = document.createElement("span");
  windSpan.textContent = item.test;  //
  wind.appendChild(windSpan);
};
