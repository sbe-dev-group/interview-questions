function cipherGenerator(key) {
    return String.fromCharCode(key.charCodeAt(0) + 1);
}
function decipherGenerator(key) {
    return String.fromCharCode(key.charCodeAt(0) - 1);
}
function encoder() {
    const str = document.getElementById('encode').value;
    document.getElementById('encoded').innerHTML = str.split('').map(x => `${this.cipherGenerator(x)}`).join('');
}
function decoder() {
    const str = document.getElementById('decode').value;
    document.getElementById('decoded').innerHTML = str.split('').map(x => `${this.decipherGenerator(x)}`).join('');
}