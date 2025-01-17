function playSong(songPath, songTitle) {
    // Display the music player
    const musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.style.display = 'block';

    // Update the song title
    const nowPlaying = document.getElementById('nowPlaying');
    nowPlaying.textContent = `Now Playing: ${songTitle}`;

    // Set the audio source and play
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    audioSource.src = songPath; // Set the song path
    audioPlayer.load();         // Load the audio
    audioPlayer.play();         // Play the audio
}
//1st song
function downloadSongPerabhawesong() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'Malwaram _ Raini Charuka - R_B Cover by Thirathi Amoda(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Perabhawe.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//2nd song
function downloadSongNubataliyanne() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/1.mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Nubata liyanne.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//3rd song
function downloadSongMalwaram() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Malwaram _ Raini Charuka - R_B Cover by Thirathi Amoda(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Nubata liyanne.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}