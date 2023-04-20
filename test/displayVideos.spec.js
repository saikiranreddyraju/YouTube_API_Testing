describe('displayVideo', () => {

    it('should call fetchData with the correct URL', async () => {
      spyOn(window, 'fetchData').and.returnValue(Promise.resolve({ items: [] }));
      spyOn(window,'videoTemplate');
      const wrapper = document.createElement('div');
      const item = { id: { videoId: '12345' } };
      await displayVideo(wrapper, item);
      expect(fetchData).toHaveBeenCalledWith(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${item.id.videoId}&part=snippet,statistics`);
      expect(videoTemplate).toHaveBeenCalled();
      wrapper.remove();
    });
  
    it('should display the video template when fetchData returns data', async () => {
      const statsData = {
        items: [{ statistics: { viewCount: '1000' } }]
      };
      spyOn(window, 'fetchData').and.returnValue(Promise.resolve(statsData));
      const wrapper = document.createElement('div');
      const item = {
        id: { videoId: '12345' },
        snippet: {
          title: 'Test Video',
          publishedAt: '2022-01-01',
          channelTitle: 'Test Channel',
          description: 'This is a test video',
          thumbnails: { medium: { url: 'https://example.com/thumbnail.jpg' } }
        }
      };
      await displayVideo(wrapper, item);
      expect(wrapper.innerHTML).toContain('Test Video');
      expect(wrapper.innerHTML).toContain('This is a test video');
      expect(wrapper.innerHTML).toContain('Test Channel');
      expect(wrapper.innerHTML).toContain('2022-01-01');
      expect(wrapper.innerHTML).toContain('Views : 1000');
      wrapper.remove();
    });
});