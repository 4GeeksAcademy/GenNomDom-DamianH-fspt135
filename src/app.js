//import "bootstrap";
//import "./style.css";


//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};
const dominios = () => {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        console.log('for: ' + pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + '.com')
      }
    }
  }
}
//dominios()

const dominioseach = () => {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  pronoun.forEach((Element1) => {
    adj.forEach((Element2) => {
      noun.forEach((Element3) => {
        console.log('ForEach: ' + Element1 + Element2 + Element3 + '.com')
      })
    })
  })
}
//dominioseach ()


const contarLetras = (str) => {
  const dividirStr = str.split('');
  const sumaLetra = {};
  dividirStr.forEach((letra) => {
    if (sumaLetra[letra] === undefined){
        sumaLetra[letra] = 1;
        return;
    }
    sumaLetra[letra] = sumaLetra[letra] + 1;
  }); 
    return sumaLetra;
  
};

console.log(contarLetras('abcedaaadd')); 