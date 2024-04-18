document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const lyricsDisplay = document.getElementById('lyricsDisplay');

    generateButton.addEventListener('click', function () {
        // Generate random rap lyrics here
        lyricsDisplay.textContent = generateRandomLyrics();
    });

    function generateRandomLyrics() {
        // Implement the logic to generate random rap lyrics here
        // For now, let's return a placeholder text
        return "Yo, I'm spittin' fire like a dragon in the sky!";
    }
});
