const baseURL = "http://gateway.marvel.com/v1/public/characters?&limit=40&offset="
const apikey = "ts=1&apikey=2479ac670ffd22a005793a85e2cd6556&hash=148c15d91ce2f088e7a99e28892d0da2" 
//&offset="
//let offsetValue;
// public key = 2479ac670ffd22a005793a85e2cd6556
// private key = 91d05a807b99f651cba97f04a0a29f9e4fd858bd
function getData(page, cb) {
    var xhr = new XMLHttpRequest();
    

    xhr.open("GET", baseURL + offsetValue + apikey );
    xhr.send();

    xhr.onreadystatechange = function () {
        //console.dir(data);
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}


let page = 0;
let items = 40;

function nextPage(currentPage, items_per_page) {


    let el = document.getElementById("data");
    let elName = document.getElementById("data-name");
    
    el.innerHTML = "";
    elName.innerHTML ="";
    currentPage = page++
    items_per_page = items

    offsetValue = currentPage * items_per_page;
    

    getData(page, function (data) {
        
        data = data.data.results;
        for (item of data ){
           if (item.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"  || item.thumbnail.extension === "gif"){
               continue;    
           }
           el.innerHTML += `<div class="itemWrapper">
           
           <img src='${item.thumbnail.path + "/portrait_fantastic." + item.thumbnail.extension}' />
           
           <a target="_blank" href="${item.urls[0].url}">${item.name}</a>
           </div>`;
        console.log(item);
             
        }
        
    });
}













