const fs = require('fs');
const path = require('path');

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function convertFolderNames(directoryPath) {
    // Leer el contenido del directorio
    fs.readdirSync(directoryPath).forEach(file => {
        const filePath = path.join(directoryPath, file);
        
        // Verificar si es un directorio
        if (fs.statSync(filePath).isDirectory()) {
            // Convertir el nombre del directorio a minúsculas y sin acentos
            const newName = removeAccents(file.toLowerCase());
            const newFilePath = path.join(directoryPath, newName);
            
            // Renombrar el directorio
            fs.renameSync(filePath, newFilePath);
            console.log(`Directorio renombrado: ${newName}`);
            
            // Llamar recursivamente a la función para procesar los subdirectorios
            convertFolderNames(newFilePath);
        }
    });
}

// Ruta del directorio principal
const directoryPath = 'C:\\app\\udemy-java-andres-guzman';

// Llamar a la función para cambiar los nombres de las carpetas
convertFolderNames(directoryPath);