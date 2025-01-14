//1st song
function downloadSongPerabhawesong() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'https://drive.google.com/file/d/1FYOj0YJPv3s6p17A9YrfYTujBzhwvw_4/view?usp=drivesdk';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
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