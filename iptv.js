new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
       
        quality: [
            {
                name: '',
                url: '',
                type: 'hls',
            },
            {
                name: '',
                url: '',
                type: 'hls',
            },
        ],

        defaultQuality: 0,
        
        
        
    },
 
});
