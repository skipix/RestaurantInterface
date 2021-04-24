var price = 0;
var menu = new Map();

menu.set('base', null);
menu.set('meat',null);
// menu.set('test',frog)

var prices = new Map([['udon', 2.5], ['ramen', 3],['soba', 2.5], ['rice', 3],['hokkien', 2.5], ['shirataki', 3.5],['chicken', 1.5], ['shrimp', 2],['pork', 1.5], ['fish', 2],['beef', 1.5], ['frog', 3]]);



function select(string,type) {

    console.log(string + ' à la place de ' + menu.get(type));



    if (menu.get(type) != string){
        
    document.getElementById(string).style.opacity = 0.3;
    document.getElementById("svgName").innerHTML = string;
    localStorage.setItem(type,string);
    let p = prices.get(string) + localStorage.getItem('price');
    localStorage.setItem('price',p);
    



        if (menu.get(type)) {
        document.getElementById(menu.get(type)).style.opacity = 1;}

    menu.set(type,string);
    document.getElementById('next_btn').style.visibility = 'visible';

        
    } else {
        document.getElementById(string).style.opacity = 1;
        menu.set(type, null)
        document.getElementById('next_btn').style.visibility = 'hidden';
        document.getElementById("svgName").innerHTML = 'Choose a topping for your wok';
        localStorage.setItem(type,null);
    
        
        }

     

        var src = document.getElementById("svgTopping");

while (src.hasChildNodes()){
src.removeChild(src.lastChild) 
}

// for (const [key, value] of menu) {
//     console.log(`${key} = ${value}`);
    if (localStorage.getItem('base')){
    var img = document.createElement("img");
    img.src = "images/"+ localStorage.getItem('base') +'.svg';
    img.style.height= "100px";
    src.appendChild(img);
    }
    if (localStorage.getItem('meat')){
      var img = document.createElement("img");
      img.src = "images/"+ localStorage.getItem('meat') +'.svg';
      img.style.height= "100px";
      src.appendChild(img);
      }
    
  
      let pbase = 0;
      if(localStorage.getItem('base')) {pbase = prices.get(localStorage.getItem('base'))}
      let pmeat = 0;
      if(localStorage.getItem('meat')) {pmeat = prices.get(localStorage.getItem('meat'))} 
      localStorage.setItem('price', pbase + pmeat);

document.getElementById('price').innerHTML = 'Price : '+  localStorage.getItem('price')+ '€';

}

function where(b) {

    if (b) {
        document.getElementById('take').style.opacity = 0.3;
        document.getElementById('here').style.opacity = 1;
        
    }
    else {
        document.getElementById('take').style.opacity = 1;
        document.getElementById('here').style.opacity = 0.3;

    }
}

function showWok() {
    if (localStorage.getItem('base')) {
    // document.getElementById('wok1').style.visibility = 'visible';
    let base = localStorage.getItem('base')
    document.getElementById('wok-text').innerHTML = base;

    }
}