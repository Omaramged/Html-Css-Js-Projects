const inputField = document.getElementById('qrInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');
const resultSection = document.getElementById('result');
const errorMessage = document.getElementById('error');
const qrImage = document.getElementById('qrImage');

const QR_API_URL = 'https://api.qrserver.com/v1/create-qr-code/';

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function hideResult() {
    resultSection.classList.add('hidden');
}

function showResult() {
    resultSection.classList.remove('hidden');
}

function getQrUrl(text, size = 300) {
    const encodedText = encodeURIComponent(text);
    return `${QR_API_URL}?size=${size}x${size}&data=${encodedText}`;
}

function generateQrCode() {
    const inputValue = inputField.value.trim();

    hideError();
    hideResult();

    if (!inputValue) {
        showError('Please enter some text or a URL');
        return;
    }

    const qrUrl = getQrUrl(inputValue);
    qrImage.src = qrUrl;
    
    qrImage.onload = () => {
        showResult();
    };

    qrImage.onerror = () => {
        showError('Failed to generate QR code. Please try again.');
    };
}

function downloadQrCode() {
    const inputValue = inputField.value.trim();
    const filename = inputValue.substring(0, 20) || 'qr-code';
    
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = `${filename}.png`;
    link.click();
}

function clearAll() {
    inputField.value = '';
    hideResult();
    hideError();
    inputField.focus();
}

generateBtn.addEventListener('click', generateQrCode);
downloadBtn.addEventListener('click', downloadQrCode);
clearBtn.addEventListener('click', clearAll);

inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateQrCode();
    }
});
