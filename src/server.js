function fetchData(url) {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    });
}

function fetchContent(searchText){
    let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY;
    return fetchData(url);
}

function fetchNext(pageToken){
    let searchText=getElement(".search-input");
    if(searchText){
        let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                    +maxResults+"&q="+(searchText.value)+"&type=video&key="+API_KEY+"&pageToken="+pageToken;
        return fetchData(url);
    }
}

async function displayData(searchText){
    let data=await fetchContent(searchText);
    displayVideos(videoList, data);
}

async function generateRecords(pageToken){
    let data=await fetchNext(pageToken);
    displayVideos(videoList, data);
}

function displayVideos(wrapper, data){
    wrapper.innerHTML="";    
    data.items.forEach(item => {
        displayVideo(wrapper,item);
    });
    
    apply_pagination(paginList,data);
}