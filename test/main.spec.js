
describe("search button functionality", () => {
    let searchBtn, searchInput;
  
    beforeEach(() => {
      
      searchBtn = document.createElement("button");
      searchInput = document.createElement("input");
      searchInput.classList.add("search-input");
      document.body.appendChild(searchBtn);
      document.body.appendChild(searchInput);
    });
  
    afterEach(() => {
      
      searchBtn.remove();
      searchInput.remove();
    });
  
    
    it("should get the search input value", () => {
     
      searchInput.value = "foo";
      const result = getElement(".search-input");
      expect(result).toEqual(searchInput);
    });
  
    it("should call the displayData function with the search input value", () => {
      
      searchInput.value = "bar";
      const displayData = jasmine.createSpy("displayData");
  
      searchBtn.addEventListener("click", function(event){
        event.preventDefault();
        let searchText=getElement(".search-input").value;
        displayData(searchText);
      });
      searchBtn.click();
      expect(displayData).toHaveBeenCalledWith("bar");
    });
  });
  