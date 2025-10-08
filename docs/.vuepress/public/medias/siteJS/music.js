// 判断是否是 music 页面
function isMusicPage() {
    return window.location.pathname.includes('/music/');
}

if (isMusicPage()) {
    // 获取DOM元素
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const currentTrackDisplay = document.getElementById('currentTrack');
    const singleLoopBtn = document.getElementById('singleLoopBtn');
    const mp3List = document.querySelector('.mp3-list');

    // 判断元素是否存在
    if (!audioPlayer || !audioSource || !currentTrackDisplay || !singleLoopBtn) {
        console.error('播放器核心组件缺失，初始化中止');
        throw new Error('播放器核心组件缺失');
    }
    if (!mp3List) console.warn('音乐列表容器不存在');

    // 播放器状态控制
    let currentTrackIndex = -1;
    let isSingleLoop = false;

    // 音频资源配置
    const baseURL = "https://raw.githubusercontent.com/Apursuit/songList/main/";
    const tracks = [
        { title: "Love Love Love", url: `${baseURL}lovelovelove.mp3` },
        { title: "一直很安静", url: `${baseURL}一直很安静.mp3` },
        { title: "一路向北", url: `${baseURL}一路向北.mp3` },
        { title: "七里香", url: `${baseURL}七里香.mp3` },
        { title: "下雨天", url: `${baseURL}下雨天.mp3` },
        { title: "不能说的秘密", url: `${baseURL}不能说的秘密.mp3` },
        { title: "传奇", url: `${baseURL}传奇.mp3` },
        { title: "倒带", url: `${baseURL}倒带.mp3` },
        { title: "倒数", url: `${baseURL}倒数.mp3` },
        { title: "兰亭序", url: `${baseURL}兰亭序.mp3` },
        { title: "再见", url: `${baseURL}再见.mp3` },
        { title: "十年", url: `${baseURL}十年.mp3` },
        { title: "半句再见", url: `${baseURL}半句再见.mp3` },
        { title: "半岛铁盒", url: `${baseURL}半岛铁盒.mp3` },
        { title: "反方向的钟", url: `${baseURL}反方向的钟.mp3` },
        { title: "句号", url: `${baseURL}句号.mp3` },
        { title: "告白气球", url: `${baseURL}告白气球.mp3` },
        { title: "因为爱情", url: `${baseURL}因为爱情.mp3` },
        { title: "多远都要在一起", url: `${baseURL}多远都要在一起.mp3` },
        { title: "夜曲", url: `${baseURL}夜曲.mp3` },
        { title: "天黑黑", url: `${baseURL}天黑黑.mp3` },
        { title: "妥协", url: `${baseURL}妥协.mp3` },
        { title: "寂寞沙洲冷", url: `${baseURL}寂寞沙洲冷.mp3` },
        { title: "富士山下", url: `${baseURL}富士山下.mp3` },
        { title: "年轮", url: `${baseURL}年轮.mp3` },
        { title: "开始懂了", url: `${baseURL}开始懂了.mp3` },
        { title: "忘记时间", url: `${baseURL}忘记时间.mp3` },
        { title: "我怀念的", url: `${baseURL}我怀念的.mp3` },
        { title: "我是如此相信", url: `${baseURL}我是如此相信.mp3` },
        { title: "手写的从前", url: `${baseURL}手写的从前.mp3` },
        { title: "执着", url: `${baseURL}执着.mp3` },
        { title: "把回忆拼好给你", url: `${baseURL}把回忆拼好给你.mp3` },
        { title: "搁浅", url: `${baseURL}搁浅.mp3` },
        { title: "日不落", url: `${baseURL}日不落.mp3` },
        { title: "明年今日", url: `${baseURL}明年今日.mp3` },
        { title: "明明就", url: `${baseURL}明明就.mp3` },
        { title: "晴天", url: `${baseURL}晴天.mp3` },
        { title: "暗号", url: `${baseURL}暗号.mp3` },
        { title: "最后一页", url: `${baseURL}最后一页.mp3` },
        { title: "最长的电影", url: `${baseURL}最长的电影.mp3` },
        { title: "枫", url: `${baseURL}枫.mp3` },
        { title: "求佛", url: `${baseURL}求佛.mp3` },
        { title: "泡沫", url: `${baseURL}泡沫.mp3` },
        { title: "爱在西元前", url: `${baseURL}爱在西元前.mp3` },
        { title: "爱情转移", url: `${baseURL}爱情转移.mp3` },
        { title: "相信", url: `${baseURL}相信.mp3` },
        { title: "稻香", url: `${baseURL}稻香.mp3` },
        { title: "等你下课", url: `${baseURL}等你下课.mp3` },
        { title: "红玫瑰", url: `${baseURL}红玫瑰.mp3` },
        { title: "给我一首歌的时间", url: `${baseURL}给我一首歌的时间.mp3` },
        { title: "绿光", url: `${baseURL}绿光.mp3` },
        { title: "花海", url: `${baseURL}花海.mp3` },
        { title: "蒲公英的约定", url: `${baseURL}蒲公英的约定.mp3` },
        { title: "说爱你", url: `${baseURL}说爱你.mp3` },
        { title: "轨迹", url: `${baseURL}轨迹.mp3` },
        { title: "逆光", url: `${baseURL}逆光.mp3` },
        { title: "遇见", url: `${baseURL}遇见.mp3` },
        { title: "雨天", url: `${baseURL}雨天.mp3` },
        { title: "青花瓷", url: `${baseURL}青花瓷.mp3` },
        { title: "风衣", url: `${baseURL}风衣.mp3` },
        { title: "黄昏", url: `${baseURL}黄昏.mp3` },
        { title: "Mine mine", url: `${baseURL}Minemine.mp3` },
        { title: "The Truth That You Leave", url: `${baseURL}TheTruthThatYouLeave.mp3` },
        { title: "你比从前快乐", url: `${baseURL}你比从前快乐.mp3` },
        { title: "单车", url: `${baseURL}单车.mp3` },
        { title: "发如雪", url: `${baseURL}发如雪.mp3` },
        { title: "回到过去", url: `${baseURL}回到过去.mp3` },
        { title: "园游会", url: `${baseURL}园游会.mp3` },
        { title: "圣诞星", url: `${baseURL}圣诞星.mp3` },
        { title: "安静", url: `${baseURL}安静.mp3` },
        { title: "小幸运", url: `${baseURL}小幸运.mp3` },
        { title: "开不了口", url: `${baseURL}开不了口.mp3` },
        { title: "当冬夜渐暖", url: `${baseURL}当冬夜渐暖.mp3` },
        { title: "我不配", url: `${baseURL}我不配.mp3` },
        { title: "我不难过", url: `${baseURL}我不难过.mp3` },
        { title: "我也很想他", url: `${baseURL}我也很想他.mp3` },
        { title: "我落泪情绪零碎", url: `${baseURL}我落泪情绪零碎.mp3` },
        { title: "我要的幸福", url: `${baseURL}我要的幸福.mp3` },
        { title: "断了的弦", url: `${baseURL}断了的弦.mp3` },
        { title: "珊瑚海", url: `${baseURL}珊瑚海.mp3` },
        { title: "甜甜的", url: `${baseURL}甜甜的.mp3` },
        { title: "第一天", url: `${baseURL}第一天.mp3` },
        { title: "蒲公英的约定", url: `${baseURL}蒲公英的约定.mp3` },
        { title: "说好的幸福呢", url: `${baseURL}说好的幸福呢.mp3` },
        { title: "越来越不懂", url: `${baseURL}越来越不懂.mp3` },
        { title: "退后", url: `${baseURL}退后.mp3` },
        { title: "阴天快乐", url: `${baseURL}阴天快乐.mp3` },
        { title: "龙卷风", url: `${baseURL}龙卷风.mp3` }
    ];

    // 洗牌函数：Fisher-Yates 算法
    function shuffleTracks() {
        for (let i = tracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tracks[i], tracks[j]] = [tracks[j], tracks[i]];  // 交换位置
        }
    }

    // 动态创建列表容器（如果需要）
    function ensureListContainer() {
        if (!mp3List) {
            const container = document.createElement('ul');
            container.className = 'mp3-list';
            document.body.appendChild(container);
            return container;
        }
        return mp3List;
    }

    // 渲染歌曲列表
    function displayTracks() {
        const listElement = ensureListContainer();
        listElement.innerHTML = '';

        tracks.forEach(track => {
            const listItem = document.createElement('li');
            listItem.textContent = track.title;
            listItem.dataset.file = track.url;
            listItem.className = 'song-li';
            listItem.onclick = () => playMusic(track.url);
            listElement.appendChild(listItem);
        });
    }

    // 安全播放机制
    function safePlay() {
        try {
            const playPromise = audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('播放被阻止:', error);
                    currentTrackDisplay.textContent = '播放失败：请点击列表歌曲手动播放';
                });
            }
        } catch (error) {
            console.error('播放器异常:', error);
            currentTrackDisplay.textContent = '播放器初始化失败';
        }
    }

    // 核心播放功能
    function playMusic(url) {
        if (!url || !tracks.some(track => track.url === url)) {
            console.warn('无效的音频地址:', url);
            currentTrackDisplay.textContent = '无效的歌曲地址';
            return;
        }

        audioSource.src = url;
        audioPlayer.load();
        
        const trackIndex = tracks.findIndex(track => track.url === url);
        currentTrackIndex = trackIndex >= 0 ? trackIndex : -1;
        
        if (currentTrackIndex !== -1) {
            currentTrackDisplay.textContent = `当前播放：${tracks[currentTrackIndex].title}`;
        }
        
        safePlay();
    }

    // 播放控制功能
    function playPause() {
        audioPlayer.paused ? safePlay() : audioPlayer.pause();
    }

    function previousTrack() {
        if (tracks.length === 0) return;
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playMusic(tracks[currentTrackIndex].url);
    }

    function nextTrack() {
        if (tracks.length === 0) return;
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playMusic(tracks[currentTrackIndex].url);
    }

    // 循环模式控制
    function toggleSingleLoop() {
        isSingleLoop = !isSingleLoop;
        audioPlayer.loop = isSingleLoop;
        singleLoopBtn.classList.toggle('active', isSingleLoop);
        singleLoopBtn.textContent = isSingleLoop ? '取消循环' : '单曲循环';
    }

    // 事件监听器
    function initEventListeners() {
        // 自动下一曲
        audioPlayer.addEventListener('ended', () => {
            if (!isSingleLoop) nextTrack();
        });

        // 循环模式切换
        singleLoopBtn.addEventListener('click', toggleSingleLoop);

        // 全局键盘控制（可选）
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') playPause();
            if (e.code === 'ArrowLeft') previousTrack();
            if (e.code === 'ArrowRight') nextTrack();
        });
    }

    // 初始化入口
    function initMusicPlayer() {
        try {
            shuffleTracks();  // 打乱歌曲顺序
            displayTracks();
            initEventListeners();
            if (tracks.length > 0) {
                playMusic(tracks[0].url); // 自动播放第一首（根据需要注释）
            }
        } catch (error) {
            console.error('播放器初始化失败:', error);
            currentTrackDisplay.textContent = '播放器加载失败';
        }
    }

    // 启动播放器
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
}
