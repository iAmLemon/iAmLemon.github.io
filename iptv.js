new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
       
        quality: [
            {
                name: 'CCTV1',
                url: '26533.m3u8',
                type: 'hls',
            },
            {
                name: '凤凰中文',
                url: 'http://116.199.5.52:8114/index.m3u8?Fsv_chan_hls_se_idx=190&FvSeid=1&Fsv_ctype=LIVES&Fsv_otype=1&Provider_id=&Pcontent_id=.m3u8',
                type: 'hls',
            },
        ],

        defaultQuality: 0,
        
        
        
    },
 
});
