var currentPage=1;

function clickPrevButton(data){
    let prevBtn=document.createElement('button');
    prevBtn.innerText="Prev";
    prevBtn.id="prev";
    
    prevBtn.addEventListener('click',function(event)
    {
        event.preventDefault();
        updatePrevItems(data);
    });
    return prevBtn;
}

function updatePrevItems(data){
    if(currentPage>=2){
        currentPage-=1;
        console.log("currentPage -->",currentPage);
        generateRecords(data.prevPageToken);
    }
}

function clickNextButton(data){

    let nextBtn=document.createElement('button');
    nextBtn.innerText="Next";
    nextBtn.id="next";

    nextBtn.addEventListener('click',function(event){
        event.preventDefault();
        updateNextItems(data);
    });

    return nextBtn;
}

function updateNextItems(data){
    currentPage+=1;
    console.log("currentPage -->",currentPage);
    generateRecords(data.nextPageToken);
}




function apply_pagination(wrapper,data) {
    
    wrapper.innerHTML="";

    let prevBtn=clickPrevButton(data);
    wrapper.appendChild(prevBtn);


    let button=document.createElement("button");
    button.innerText=currentPage;
    button.setAttribute("class","button");
    wrapper.appendChild(button);
    let nextBtn=clickNextButton(data);
    wrapper.appendChild(nextBtn);
}



