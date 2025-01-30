document.getElementById('btn1').addEventListener('click', copyLetter = () => {
    const button = document.getElementById('btn1');
    const storage = document.createElement('textarea');

    storage.value = button.innerText;
    button.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 1);
    document.execCommand('copy');
    button.removeChild(storage);
});

document.getElementById('btn2').addEventListener('click', copyLetter = () => {
    const button = document.getElementById('btn2');
    const storage = document.createElement('textarea');

    storage.value = button.innerText;
    button.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 1);
    document.execCommand('copy');
    button.removeChild(storage);
});

document.getElementById('btn3').addEventListener('click', copyLetter = () => {
    const button = document.getElementById('btn3');
    const storage = document.createElement('textarea');

    storage.value = button.innerText;
    button.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 1);
    document.execCommand('copy');
    button.removeChild(storage);
});

document.getElementById('btn4').addEventListener('click', copyLetter = () => {
    const button = document.getElementById('btn4');
    const storage = document.createElement('textarea');

    storage.value = button.innerText;
    button.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 1);
    document.execCommand('copy');
    button.removeChild(storage);
});



/* onclick="copyLetter(this.getAttribute('data-target'))"

    const copyLetter = (target) => {
    const button = document.getElementById(target);
    const storage = document.createElement('textarea');

    storage.value = button.innerText;
    button.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 1);
    document.execCommand('copy');
    button.removeChild(storage);
} */