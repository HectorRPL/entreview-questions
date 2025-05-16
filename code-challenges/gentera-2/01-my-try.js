document.getElementById('addText').addEventListener("click", displayData)
const inputText  = document.getElementById('inputText')
inputText.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) displayData()
})

const displayDataAndFocus = () => inputText.focus()
function displayData() {
    displayDataAndFocus()
    let text = document.getElementById('inputText').value
    let list = document.getElementById('list')
    if (!!!text) return

    const length = document
        .getElementById('list')
        .getElementsByTagName('li').length + 1

    if (length % 3 === 0) list.innerHTML = list.innerHTML + '<li class="red">' + text + '</li>'
    else list.innerHTML = list.innerHTML + '<li>' + text + '</li>'

    document.getElementById('inputText').value = ''

}
