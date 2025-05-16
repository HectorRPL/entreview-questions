// Inicializa la lista de contactos
window.contactsList = window.contactsList || [{
    name: 'Admin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
}]

// Flag para controlar el orden de clasificación
let sortAscending = true

// Función para validar el nombre
const validateName = (name) => /^[a-zA-Z\s]{1,20}$/.test(name)
// Función para validar el número móvil
const validateMobile = (mobile) => /^\d{10}$/.test(mobile)

// Función principal para validar el email
const validateEmail = (email) => {
    return isRequired(email) &&
        startsWithLetter(email) &&
        onlyContainsValidCharactersBeforeAt(email) &&
        isBetween2And10CharsBeforeAt(email) &&
        isAlphabeticAndBetween2And10CharsBetweenAtAndDot(email) &&
        isAlphabeticAndBetween2And10CharsAfterDot(email)
}

// Verifica si el email es requerido
const isRequired = (email) => email.length > 0

// Verifica que el email comience con una letra
const startsWithLetter = (email) => /^[a-zA-Z]/.test(email)

// Verifica que solo contenga letras, dígitos y puntos antes del '@'
const onlyContainsValidCharactersBeforeAt = (email) => {
    const localPart = email.split('@')[0]
    return /^[a-zA-Z0-9.]+$/.test(localPart)
}

// Verifica que la parte local tenga entre 2 y 10 caracteres
const isBetween2And10CharsBeforeAt = (email) => {
    const localPart = email.split('@')[0]
    return localPart.length >= 2 && localPart.length <= 10
}

// Verifica que entre '@' y '.' tenga entre 2 y 10 caracteres alfabéticos
const isAlphabeticAndBetween2And10CharsBetweenAtAndDot = (email) => {
    const domainPart = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'))
    return /^[a-zA-Z]{2,10}$/.test(domainPart)
}

// Verifica que después del '.' tenga entre 2 y 10 caracteres alfabéticos
const isAlphabeticAndBetween2And10CharsAfterDot = (email) => {
    const topLevelDomain = email.split('.').pop()
    return /^[a-zA-Z]{2,10}$/.test(topLevelDomain)
}

// Función para agregar un nuevo contacto a la lista y actualizar la tabla
const addContact = () => {

    let name = document.getElementById('name').value
    let mobile = document.getElementById('mobile').value
    let email = document.getElementById('email').value

    // Detiene la función si la validación falla
    if (!validateName(name) || !validateMobile(mobile) || !validateEmail(email)) {
        document.getElementById('error').style.display = 'block' // Muestra el mensaje de error
        return
    } else {
        document.getElementById('error').style.display = 'none' // Oculta el mensaje de error
    }

    let newContact = {
        name: name,
        mobile: mobile,
        email: email
    }

    window.contactsList.push(newContact)

    document.getElementById('name').value = ''
    document.getElementById('mobile').value = ''
    document.getElementById('email').value = ''

    updateTable()
}

// Función para actualizar los datos mostrados en la tabla
const updateTable = (filteredContacts = window.contactsList) => {
    let tbody = document.getElementById('summaryTable').getElementsByTagName('tbody')[0]
    tbody.innerHTML = ''

    filteredContacts.forEach(function (contact) {
        let row = tbody.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        cell1.textContent = contact.name
        cell2.textContent = contact.mobile
        cell3.textContent = contact.email
    })
}

// Función para ordenar la tabla por nombre
const sortByName = () => {
    window.contactsList.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return sortAscending ? -1 : 1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return sortAscending ? 1 : -1
        return 0
    })

    // Cambia la dirección del sort para el próximo clic
    sortAscending = !sortAscending

    // Actualiza la tabla con la nueva ordenación
    updateTable()
}

// Función para buscar contactos por número móvil
const searchByMobile = () => {
    let searchText = document.getElementById('search').value
    let filteredContacts = window.contactsList.filter((contact) => contact.mobile.includes(searchText))
    updateTable(filteredContacts)
}

// Asegúrate de que la tabla y los eventos están configurados correctamente al cargar la página
document.addEventListener('DOMContentLoaded',  () => {
    updateTable()

    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault()
        addContact()
    })

    document.getElementById('nameColumn').addEventListener('click', sortByName)

    document.getElementById('search').addEventListener('input', searchByMobile)

})