const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

stopBtn.addEventListener('click', function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

rewindBtn.addEventListener('click', function() {
    audioPlayer.currentTime -= 10;
});

forwardBtn.addEventListener('click', function() {
    audioPlayer.currentTime += 10;
});

audioPlayer.addEventListener('ended', function() {
    playPauseBtn.textContent = 'Play';
});