var expectedJson ={
    "data": {
        "response": {
            "catalogue": [
                {
                    "code": "M",
                    "description": "Multianual"
                },
                {
                    "code": "A",
                    "description": "Anual"
                }
            ]
        },
        "informedParams": {
            "vehUseCd": "0",
            "catalogue": "VIGENCIAS"
        }
    },
    "axaHeaderRes": {
        "resultado": {
            "codigo": "6",
            "mensaje": "Transaccion exitosa",
            "subcodigo": "200"
        },
        "fechaHora": "2023-12-04T05:17:48-06:00",
        "sistemald": "HSBC",
        "usuario": "MXS00102030A",
        "UUID": "c87dc3e1-eaef-444a-bb4f-37daf528d3c3"
    }
}
var jsonResponse ={
    "data": {
        "response": {
            "catalogue": [
                {
                    "code": "M",
                    "description": "Multianual"
                },
                {
                    "code": "A",
                    "description": "Anual"
                }
            ]
        },
        "informedParams": {
            "vehUseCd": "0",
            "catalogue": "VIGENCIAS"
        }
    },
    "axaHeaderRes": {
        "resultado": {
            "codigo": "6",
            "mensaje": "Transaccion exitosa",
            "subcodigo": "200"
        },
        "fechaHora": "2023-12-04T05:17:48-05:00",
        "sistemald": "HSBC",
        "usuario": "MXS00102030A",
        "UUID": "c87dc3e1-eaef-444a-bb4f-37daf528dasdasdasdasd3c3"
    }
}

function areObjectsEqual(obj1, obj2) {
    // Función para comparar dos objetos recursivamente
    function deepEqual(a, b) {
        if (a === b) return true;

        if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;

        const keysA = Object.keys(a).filter(key => key !== 'UUID' && key !== 'fechaHora');
        const keysB = Object.keys(b).filter(key => key !== 'UUID' && key !== 'fechaHora');

        if (keysA.length !== keysB.length) return false;

        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }

        return true;
    }

    // Comparar los objetos omitiendo las propiedades "UUID" y "fechaHora"
    return deepEqual(obj1, obj2);
}

console.log(areObjectsEqual(expectedJson, jsonResponse))