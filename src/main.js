var API_KEY="AIzaSyAG7u_sQGo1CcN0nWpaFdtqDXgTO5cL2G0";
var maxResults=15;

var videoList=getElement("#videos");
var paginList=getElement("#pagination");
var search_btn=getElement(".search-btn");


if(search_btn)
search_btn.addEventListener('click',function(event){
        event.preventDefault();
        let searchText=getElement(".search-input").value;
        displayData(searchText);
});

function getElement(id){
    return document.querySelector(id);
}
