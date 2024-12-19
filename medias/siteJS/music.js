// 检查当前页面是否为 music 页面
function isMusicPage() {
    return window.location.pathname.includes('/music/');
}

if (isMusicPage()) {
// 声明变量
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const currentTrackDisplay = document.getElementById('currentTrack');
let currentTrackIndex = -1;

// 定义音频文件的 URL 数组
const tracks = [
    { title: "Love Love Love", url: "https://raw.githubusercontent.com/Apursuit/songList/main/lovelovelove.mp3" },
    { title: "一直很安静", url: "https://raw.githubusercontent.com/Apursuit/songList/main/一直很安静.mp3" },
    { title: "一路向北", url: "https://raw.githubusercontent.com/Apursuit/songList/main/一路向北.mp3" },
    { title: "七里香", url: "https://raw.githubusercontent.com/Apursuit/songList/main/七里香.mp3" },
    { title: "下雨天", url: "https://raw.githubusercontent.com/Apursuit/songList/main/下雨天.mp3" },
    { title: "不能说的秘密", url: "https://raw.githubusercontent.com/Apursuit/songList/main/不能说的秘密.mp3" },
    { title: "传奇", url: "https://raw.githubusercontent.com/Apursuit/songList/main/传奇.mp3" },
    { title: "倒带", url: "https://raw.githubusercontent.com/Apursuit/songList/main/倒带.mp3" },
    { title: "倒数", url: "https://raw.githubusercontent.com/Apursuit/songList/main/倒数.mp3" },
    { title: "兰亭序", url: "https://raw.githubusercontent.com/Apursuit/songList/main/兰亭序.mp3" },
    { title: "再见", url: "https://raw.githubusercontent.com/Apursuit/songList/main/再见.mp3" },
    { title: "十年", url: "https://raw.githubusercontent.com/Apursuit/songList/main/十年.mp3" },
    { title: "半句再见", url: "https://raw.githubusercontent.com/Apursuit/songList/main/半句再见.mp3" },
    { title: "半岛铁盒", url: "https://raw.githubusercontent.com/Apursuit/songList/main/半岛铁盒.mp3" },
    { title: "反方向的钟", url: "https://raw.githubusercontent.com/Apursuit/songList/main/反方向的钟.mp3" },
    { title: "句号", url: "https://raw.githubusercontent.com/Apursuit/songList/main/句号.mp3" },
    { title: "告白气球", url: "https://raw.githubusercontent.com/Apursuit/songList/main/告白气球.mp3" },
    { title: "因为爱情", url: "https://raw.githubusercontent.com/Apursuit/songList/main/因为爱情.mp3" },
    { title: "多远都要在一起", url: "https://raw.githubusercontent.com/Apursuit/songList/main/多远都要在一起.mp3" },
    { title: "夜曲", url: "https://raw.githubusercontent.com/Apursuit/songList/main/夜曲.mp3" },
    { title: "天黑黑", url: "https://raw.githubusercontent.com/Apursuit/songList/main/天黑黑.mp3" },
    { title: "妥协", url: "https://raw.githubusercontent.com/Apursuit/songList/main/妥协.mp3" },
    { title: "寂寞沙洲冷", url: "https://raw.githubusercontent.com/Apursuit/songList/main/寂寞沙洲冷.mp3" },
    { title: "富士山下", url: "https://raw.githubusercontent.com/Apursuit/songList/main/富士山下.mp3" },
    { title: "年轮", url: "https://raw.githubusercontent.com/Apursuit/songList/main/年轮.mp3" },
    { title: "开始懂了", url: "https://raw.githubusercontent.com/Apursuit/songList/main/开始懂了.mp3" },
    { title: "忘记时间", url: "https://raw.githubusercontent.com/Apursuit/songList/main/忘记时间.mp3" },
    { title: "我怀念的", url: "https://raw.githubusercontent.com/Apursuit/songList/main/我怀念的.mp3" },
    { title: "我是如此相信", url: "https://raw.githubusercontent.com/Apursuit/songList/main/我是如此相信.mp3" },
    { title: "手写的从前", url: "https://raw.githubusercontent.com/Apursuit/songList/main/手写的从前.mp3" },
    { title: "执着", url: "https://raw.githubusercontent.com/Apursuit/songList/main/执着.mp3" },
    { title: "把回忆拼好给你", url: "https://raw.githubusercontent.com/Apursuit/songList/main/把回忆拼好给你.mp3" },
    { title: "搁浅", url: "https://raw.githubusercontent.com/Apursuit/songList/main/搁浅.mp3" },
    { title: "日不落", url: "https://raw.githubusercontent.com/Apursuit/songList/main/日不落.mp3" },
    { title: "明年今日", url: "https://raw.githubusercontent.com/Apursuit/songList/main/明年今日.mp3" },
    { title: "明明就", url: "https://raw.githubusercontent.com/Apursuit/songList/main/明明就.mp3" },
    { title: "晴天", url: "https://raw.githubusercontent.com/Apursuit/songList/main/晴天.mp3" },
    { title: "暗号", url: "https://raw.githubusercontent.com/Apursuit/songList/main/暗号.mp3" },
    { title: "最后一页", url: "https://raw.githubusercontent.com/Apursuit/songList/main/最后一页.mp3" },
    { title: "最长的电影", url: "https://raw.githubusercontent.com/Apursuit/songList/main/最长的电影.mp3" },
    { title: "枫", url: "https://raw.githubusercontent.com/Apursuit/songList/main/枫.mp3" },
    { title: "求佛", url: "https://raw.githubusercontent.com/Apursuit/songList/main/求佛.mp3" },
    { title: "泡沫", url: "https://raw.githubusercontent.com/Apursuit/songList/main/泡沫.mp3" },
    { title: "爱在西元前", url: "https://raw.githubusercontent.com/Apursuit/songList/main/爱在西元前.mp3" },
    { title: "爱情转移", url: "https://raw.githubusercontent.com/Apursuit/songList/main/爱情转移.mp3" },
    { title: "相信", url: "https://raw.githubusercontent.com/Apursuit/songList/main/相信.mp3" },
    { title: "稻香", url: "https://raw.githubusercontent.com/Apursuit/songList/main/稻香.mp3" },
    { title: "等你下课", url: "https://raw.githubusercontent.com/Apursuit/songList/main/等你下课.mp3" },
    { title: "红玫瑰", url: "https://raw.githubusercontent.com/Apursuit/songList/main/红玫瑰.mp3" },
    { title: "给我一首歌的时间", url: "https://raw.githubusercontent.com/Apursuit/songList/main/给我一首歌的时间.mp3" },
    { title: "绿光", url: "https://raw.githubusercontent.com/Apursuit/songList/main/绿光.mp3" },
    { title: "花海", url: "https://raw.githubusercontent.com/Apursuit/songList/main/花海.mp3" },
    { title: "蒲公英的约定", url: "https://raw.githubusercontent.com/Apursuit/songList/main/蒲公英的约定.mp3" },
    { title: "说爱你", url: "https://raw.githubusercontent.com/Apursuit/songList/main/说爱你.mp3" },
    { title: "轨迹", url: "https://raw.githubusercontent.com/Apursuit/songList/main/轨迹.mp3" },
    { title: "逆光", url: "https://raw.githubusercontent.com/Apursuit/songList/main/逆光.mp3" },
    { title: "遇见", url: "https://raw.githubusercontent.com/Apursuit/songList/main/遇见.mp3" },
    { title: "雨天", url: "https://raw.githubusercontent.com/Apursuit/songList/main/雨天.mp3" },
    { title: "青花瓷", url: "https://raw.githubusercontent.com/Apursuit/songList/main/青花瓷.mp3" },
    { title: "风衣", url: "https://raw.githubusercontent.com/Apursuit/songList/main/风衣.mp3" },
    { title: "黄昏", url: "https://raw.githubusercontent.com/Apursuit/songList/main/黄昏.mp3" }
];

// 打乱数组顺序的函数
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // 当还有元素可以打乱时
    while (currentIndex !== 0) {
        // 随机选择一个元素
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // 交换当前元素与随机选择的元素
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// 打乱歌曲列表
const shuffledTracks = shuffle([...tracks]);

// 添加歌曲到页面的函数
function displayTracks() {
    const listElement = document.querySelector('.mp3-list');
    if (!listElement) {
        console.error('音乐列表元素未找到');
        return;
    }
    listElement.innerHTML = '';

    shuffledTracks.forEach(track => {
        const listItem = document.createElement('li');
        listItem.textContent = track.title;
        listItem.dataset.file = track.url;
        listItem.className = 'song-li';
        listItem.onclick = () => playMusic(track.url);
        listElement.appendChild(listItem);
    });
}

// 页面加载时显示歌曲列表
document.addEventListener('DOMContentLoaded', function() {
    displayTracks();
});

// 播放音乐的函数
function playMusic(url) {
    audioSource.src = url;
    audioPlayer.load();
    audioPlayer.play();
    currentTrackIndex = shuffledTracks.findIndex(track => track.url === url);

    // 更新当前播放的歌曲名
    document.querySelector('h3').innerText = `当前播放：${shuffledTracks[currentTrackIndex].title}`;
}

// 播放/暂停的函数
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// 上一首歌的函数
function previousTrack() {
    if (shuffledTracks.length > 0) {
        currentTrackIndex = (currentTrackIndex - 1 + shuffledTracks.length) % shuffledTracks.length;
        playMusic(shuffledTracks[currentTrackIndex].url);
    }
}

// 下一首歌的函数
function nextTrack() {
    if (shuffledTracks.length > 0) {
        currentTrackIndex = (currentTrackIndex + 1) % shuffledTracks.length;
        playMusic(shuffledTracks[currentTrackIndex].url);
    }
}

// 播放结束后自动播放下一首歌
audioPlayer.addEventListener('ended', function() {
    nextTrack();
});
}