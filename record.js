// fill in javascript code here
let rows = document.createElement("tr")
document.querySelector("tbody").append(rows);
var nam = document.querySelector("#name").value
var empl = document.querySelector("#employeeID").value
var dep = document.querySelector("#department").value
var expe = document.querySelector("#exp").value
var mail = document.querySelector("#email").value
var mob = document.querySelector("#mbl").value
console.log(nam, empl, dep, expe, mail, mob);
var tr=document.createElement("tr")
var td1=document.createElement("td");
td1.innerText=nam;
var td2=document.createElement("td");
td2.innerText=empl;
var td3=document.createElement("td");
td3.innerText=dep;
var td4=document.createElement("td");
td4.innerText=expe;
var td5=document.createElement("td");
td5.innerText=mail;
var td6=document.createElement("td");
td6.innerText=mob;
var td7=document.createElement("td");
if(td4.innerText>5){
    td7.innerText="Senior";
}
else if(td4.innerText<=5 && td4.innerText>=2){
    td7.innerText="Junior"
}
else if(td4.innerText<=1){
    td7.innerText="Fresher"
}
var td8=document.createElement("td");
var but = document.createElement("button").innerText="Delete";
td8.append(but);
tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
document.querySelector("tbody").append(tr);
} 