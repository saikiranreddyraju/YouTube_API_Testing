
describe("pagination functionality", () => {
    let wrapper, data;
  
    beforeEach(() => {
      wrapper = document.createElement("div");
        data = {
        nextPageToken: "abc",
        prevPageToken: "xyz"
      };
    });
  
    afterEach(() => {
      wrapper.remove();
    });
  
    it("should create a previous button with correct text and event listener", () => {
      const result = clickPrevButton(data);
  
      expect(result.tagName).toBe("BUTTON");
      expect(result.innerText).toBe("Prev");
    });
  
    it("should update previous items and generate records when previous button is clicked", () => {
      currentPage = 2;
      spyOn(window,"generateRecords");
      updatePrevItems(data);
      
      expect(currentPage).toBe(1);
      expect(generateRecords).toHaveBeenCalledWith("xyz");
    });
  
    it("should create a next button with correct text and event listener", () => {
      const result = clickNextButton(data);
  
      expect(result.tagName).toBe("BUTTON");
      expect(result.innerText).toBe("Next");
  
    });
  
    it("should update next items and generate records when next button is clicked", () => {
      
      spyOn(window,"generateRecords");
      updateNextItems(data);
     
      expect(currentPage).toBe(2);
      expect(generateRecords).toHaveBeenCalledWith("abc");
    });
  
    it("should apply pagination to the wrapper element", () => {
     
      apply_pagination(wrapper, data);
      expect(wrapper.querySelectorAll("button").length).toBe(3);
      expect(wrapper.querySelector("#prev").innerText).toBe("Prev");
      expect(wrapper.querySelector(".button").innerText).toBe(currentPage.toString());
      expect(wrapper.querySelector("#next").innerText).toBe("Next");
    });
  });
  