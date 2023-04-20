async function displayVideo(wrapper,item){
    let videoId=item.id.videoId;
    
    //Network call to api to get the view Count for every video:
    let url="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+
                "&id="+videoId+"&part=snippet,statistics";

    let statsData= await fetchData(url);
    let viewCount=statsData.items[0]?statsData.items[0].statistics.viewCount : 0;
    console.log("viewCount "+viewCount);

    let videoData= videoTemplate(item,viewCount);
    if(videoData){
        wrapper.innerHTML+=videoData;
    }
}

function videoTemplate(item,viewCount){

    let title=item.snippet.title;
    let publishedAt=item.snippet.publishedAt.toString().slice(0,10);
    let channelTitle=item.snippet.channelTitle;
    let description=item.snippet.description;
    let videoId=item.id.videoId;
    let thumbnail=item.snippet.thumbnails.medium.url;


    return `<div class="video-style">
    <img class="video-img" src="${thumbnail}"/>
    <div>
    <h4>
    <a href=https://www.youtube.com/watch?v=${videoId}>${title}</a>
    </h4>
    <p>${description}</p>
    <h4><em>${channelTitle}</em></h4>
    <p><strong>Published At ${publishedAt}</strong></p>
    <p>Views : ${viewCount}</p>
    </div>
    </div>`;

}