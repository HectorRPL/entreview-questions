pues básicamente se trataba de una app de react que tenia dos tabs
cada tab tenia que conectar y mostrar un endpoint
había un archivo que se encargaba de recibir el query y regresaba una promesa

script.js
    
    aqui estaba una función que había que llamar desde otros archivo para obtener los datos

script.js

    este era otro archivo que contenía la tab 1 y tab 2, al picarle tenia que mostrar los datos
    recuerdo que este archivo tenia Box y Tabs como componentes me parece que eran los setilos de material
    tambien recuerdo que era un archivo grande y con muchas funciones, pero bueno eso es lo de menos.
    Yo creo que la onda es replicar la app pero usando eso que ellos usaban, recuerdo que no se me hizo
    familiar el uso de apolo, como que solo usban el graphql sin mas, asi pelón

    donde la ultracage fue que no supe como tratar una respuesta tipo promesa, la cual contenia los datos para pintar
    invoque el metodo, le mandé como parametro el gql, y recibí en consola una promesa, ahí el reto se detuvo