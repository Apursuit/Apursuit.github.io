---
title: 音乐
date: 2024-9-8 13:28:01
permalink: /music/
article: false
comment: false
---

<style>
.mp3-list {
    padding: 0;
    margin: 0;
    color: #333;
    list-style-type: none;
}

.mp3-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 8px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0; /* Subtle border */
    border-radius: 8px; /* Rounded corners */
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.mp3-list li:hover {
    background-color: #fafafa; /* Lighter hover effect */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
    transform: translateY(-2px); /* Slight lift effect */
}

#audioPlayer {
    width: 100%;
    border: none; /* Remove border for minimalism */
    background-color: transparent;
}

.control-btns {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.control-btn {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.control-btn:hover {
    background-color: #2980b9;
}

.control-btn.active {
    background-color: #e74c3c;
}

img {
    width: 50%;
    margin-top: 20px;
}
</style>

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

<img src="https://the0n3.top/medias/zz-meme/mouse.jpg" alt="鼠鼠">