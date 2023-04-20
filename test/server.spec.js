
describe("To test the fetch data from Youtube API",function(){
    let data;
    beforeAll(async function(){
        data = await fetchContent("javascript");
    });

    it("fetch Data from API using search Text",function(){
        expect(data.items).not.toEqual([]);
        expect(data.items[0].kind).toEqual("youtube#searchResult");
        expect(data.items[0].id.kind).toEqual("youtube#video");
        expect(data.items[4].id.kind).toEqual("youtube#video");
    });

    it("fetch Data from API with nextPageToken",async function(){
        let data1 = await fetchNext(data.nextPageToken);
        if(data1){
            expect(data1.items).not.toEqual([]);
            expect(data1.items[0].id.kind).toEqual("youtube#video");
            expect(data1.items[4].id.kind).toEqual("youtube#video");
        }
    });


    it("should check whether the fetchData is called in fetchContent", function(){
        spyOn(window,"fetchData");
        fetchContent("Javascript");
        
        expect(fetchData).toHaveBeenCalled();
    });

    it("should check whether the fetchContent and displayVideos is called in displayData",async function(){
        spyOn(window,"fetchContent");
        spyOn(window,"displayVideos");
        displayData("Javascript");
        await Promise.resolve();
        expect(fetchContent).toHaveBeenCalled();
        expect(displayVideos).toHaveBeenCalled();
    });

    it("should check whether the fetchData is called in fetchContent",function(){
        spyOn(window,"apply_pagination");
        spyOn(window,"displayVideo");
    
        let wrapper=document.createElement("div");
        displayVideos(wrapper,data);
        expect(apply_pagination).toHaveBeenCalled();
        expect(displayVideo).toHaveBeenCalled();
        wrapper.remove();
    });

});
