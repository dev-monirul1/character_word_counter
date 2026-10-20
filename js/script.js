const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    charCount.textContent = text.length;
    let word = text.trim().split(/\s+/);

    if (text.trim() === "") {
        wordCount.innerText = 0;
    }else {
        wordCount.innerText = word.length;
    }
});