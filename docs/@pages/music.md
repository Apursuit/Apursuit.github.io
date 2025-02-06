---
title: 音乐
date: 2024-9-8 13:28:01
permalink: /music/
article: false
comment: false
---

<style>
/* 极简白风格播放器容器 */
.mp3-list {
    padding: 0;
    margin: 20px 0;
    list-style: none;
}

/* 列表项优化 */
.mp3-list li {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    margin: 8px 0;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #eee;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(4px);
}

.mp3-list li:hover {
    background: #f8f8f8;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
}

/* 播放器控件容器 */
#audioPlayer {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 播放器控制面板 */
#audioPlayer::-webkit-media-controls-panel {
    background: linear-gradient(145deg, #ffffff, #f8f8f8);
    border-radius: 8px;
}

/* 进度条统一样式 */
#audioPlayer::-webkit-media-controls-timeline {
    background-color: #eee;
    border-radius: 2px;
    height: 4px; /* 合并新增属性 */
}

#audioPlayer::-webkit-slider-container {
    --track-height: 4px;
    --thumb-size: 12px;
}

/* 播放按钮样式 */
#audioPlayer::-webkit-media-controls-play-button {
    filter: brightness(0.9);
}

/* 时间显示样式 */
#audioPlayer::-webkit-media-controls-current-time-display,
#audioPlayer::-webkit-media-controls-time-remaining-display {
    color: #666;
}

/* 自定义滑块 */
#audioPlayer::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background: #3498db;
    border-radius: 50%;
    opacity: 1;
    margin-top: calc((var(--track-height) - var(--thumb-size)) / 2);
    transition: all 0.2s ease;
}

/* 悬停状态 */
#audioPlayer:hover::-webkit-media-controls-timeline {
    height: 6px;
}

#audioPlayer:hover::-webkit-slider-thumb {
    transform: scale(1.2);
}

/* 控制按钮容器 */
.control-btns {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
}

/* 按钮基础样式 */
.control-btn {
    padding: 8px 24px;
    background: rgba(52, 152, 219, 0.9);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.25s ease;
    backdrop-filter: blur(4px);
}

.control-btn:hover {
    background: rgba(41, 128, 185, 0.95);
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

.control-btn.active {
    background: rgba(231, 76, 60, 0.9);
}

/* 当前播放标题 */
#currentTrack {
    color: #444;
    font-size: 1.1em;
    margin: 15px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
}


</style>

<!-- 保持原有HTML结构不变 -->
<h3 id="currentTrack">当前播放：</h3>
<div class="control-btns">
    <button class="control-btn" id="singleLoopBtn">单曲循环</button>
</div>
<br>
<audio id="audioPlayer" controls>
    <source id="audioSource" src="" type="audio/mp3">
</audio>
<ul class="mp3-list"></ul>

> 如果没有显示歌单，请尝试刷新页面

![鼠鼠](https://the0n3.top/medias/zz-meme/mouse.jpg)
