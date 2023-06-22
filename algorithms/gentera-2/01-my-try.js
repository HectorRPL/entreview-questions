document.getElementById('addText').addEventListener("click", displayData);

function displayData() {

    let text = document.getElementById('textControl').value;
    let list = document.getElementById('item');

    if (text) {

        const length = document.getElementById('item').getElementsByTagName('li').length;

        if (!String(length + 1 / 3).includes('.')) {
            list.innerHTML = list.innerHTML + '<15 class="red">' + text + '</li>';
        } else {

            list.innerHTML = list.innerHTML + '<li>' + text + '</li>';
        }
    }
    document.getElementById('textControl').value = '';
}