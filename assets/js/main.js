var sectionStudent =document.getElementsByClassName("students")[0];
var titleh=document.createElement("h1");
var guion=document.createElement("div");
var names=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori"];
titleh.innerHTML="Nuestras Coders";
guion.setAttribute("class","guion");
titleh.appendChild(guion);
sectionStudent.appendChild(titleh);
var ruta="assets/img/";
function boxes(ruta,names){
  for(var i=0;i<names.length;i++){
    var divBox=document.createElement("div");
    divBox.setAttribute("class","box");
    var imgCoder=document.createElement("img");
    imgCoder.setAttribute("src",ruta+(i+1)+".png");
    imgCoder.setAttribute("alt",names[i]);
    var spanName=document.createElement("span");
    spanName.innerHTML=names[i];
    divBox.appendChild(spanName);
    divBox.appendChild(imgCoder);
    sectionStudent.appendChild(divBox);

  }
}
boxes(ruta,names);
