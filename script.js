
fetch('https://raw.githubusercontent.com/reginaHuPeifeng/HW1/main/data.json')
  .then(function(response){
    return response.json();
  })
  .then(function(JsonData){
    console.log(JsonData);
    getSection2(JsonData);
    getSection3(JsonData);
    getSection4(JsonData);
  }).catch();

function getSection2(JsonData){
data = JsonData.section2;

for (var i = 0; i < 3; i++){
  var obj = data[i];
  const a = document.createElement("div");

  a.className = "card";
  const b = document.createElement("div");

  b.className = "image";

  const c = document.createElement("img");
  c.src = obj.image;
  b.appendChild(c);

  const d = document.createElement("div");
  d.className = "text";

  const e = document.createElement("h1");
  const f = document.createTextNode(obj.heading);
  e.appendChild(f);

  const g = document.createElement("p");
  const h = document.createTextNode(obj.text);
  g.appendChild(h);

  d.appendChild(e);
  d.appendChild(g);
  a.appendChild(b).appendChild(d);
  document.getElementById("ccc").appendChild(a);
};
}

function getSection3(JsonData){
  data = JsonData.section3.text;
  const a = document.createElement("p");
  const b = document.createTextNode(data[0]);
  a.appendChild(b);
  const c = document.createElement("p");
  const d = document.createTextNode(data[1]);
  c.appendChild(d);
  document.getElementById("part3").appendChild(a).appendChild(c);
}

function getSection4(JsonData){
  data = JsonData.section4;
  const b = document.createElement("div");

  b.className = "image3";

  const c = document.createElement("img");
  c.src = data[0].image;
  b.appendChild(c);

  const d = document.createElement("div");
  d.className = "text3";

  const e = document.createElement("h1");
  const f = document.createTextNode(data[0].heading);
  e.appendChild(f);

  const g = document.createElement("p");
  const h = document.createTextNode(data[0].text);
  g.appendChild(h);

  d.appendChild(e);
  d.appendChild(g);

  const d1 = document.createElement("div");
  d1.className = "text4";

  const e1 = document.createElement("h1");
  const f1 = document.createTextNode(data[1].heading);
  e1.appendChild(f1);

  const g1 = document.createElement("p");
  const h1 = document.createTextNode(data[1].text);
  g1.appendChild(h1);

  d1.appendChild(e1);
  d1.appendChild(g1);

  const b1 = document.createElement("div");

  b1.className = "image4";

  const c1 = document.createElement("img");
  c1.src = data[1].image;
  b1.appendChild(c1);
  document.getElementById("part4").appendChild(b);
  document.getElementById("part4").appendChild(d);
  document.getElementById("part4").appendChild(d1);
  document.getElementById("part4").appendChild(b1);
}
