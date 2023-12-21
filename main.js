function caesarCipher(str, shift, action) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let idx = alphabet.indexOf(char);

        if (idx === -1) {
            result += char;
            continue;
        }

        if (action === 'encrypt') {
            idx = (idx + shift) % 26;
        } else if (action === 'decrypt') {
            idx = (idx - shift + 26) % 26;
        }

        result += alphabet[idx];
    }

    return result;
}

function encrypt() {
    let text = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    document.getElementById('result').innerText = caesarCipher(text, shift, 'encrypt');
}

function decrypt() {
    let text = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    document.getElementById('result').innerText = caesarCipher(text, shift, 'decrypt');
}
