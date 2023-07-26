document.getElementById('addText').addEventListener("click", displayData);

function displayData() {

    let text = document.getElementById('inputText').value;
    let list = document.getElementById('list');

    if (text) {
        const length = document
            .getElementById('list')
            .getElementsByTagName('li').length + 1;

        if (length % 3 === 0) {
            list.innerHTML = list.innerHTML + '<li class="red">' + text + '</li>';
        } else {
            list.innerHTML = list.innerHTML + '<li>' + text + '</li>';
        }

    }
    document.getElementById('inputText').value = '';
}