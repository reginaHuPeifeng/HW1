
fetch('C:/Users/hupei/OneDrive/Desktop/USC/CSCI571/HW1/data.json')
  .then(function(response){
    return response.json();
  })
  .then(function(JsonData){
    console.log(JsonData);
    getSection2(JsonData);
    getSection4(JsonData);
  }).catch();

function getSection2(JsonData){
data = JsonData.section2;

for (var i = 0; i < 3; i++){
  var obj = data[i];
  const a = document.createElement("div");

  a.className = "card";
  const b = document.createElement("div");

  c.className = "image";

  const c = document.createElement("img");
  c.src = obj[image];
  b.appendChild(c);

  const d = document.createElement("div");
  d.className = "text";

  const e = document.createElement("h1");
  const f = document.createTextNode(obj[heading]);
  e.appendChild(f);

  const g = document.createElement("p");
  const h = document.createTextNode(obj[text]);
  g.appendChild(h);

  d.appendChild(e);
  d.appendChild(g);
  a.appendChild(b).appendChild(d);
  document.getElementById("ccc").appendChild(a);
};
}
