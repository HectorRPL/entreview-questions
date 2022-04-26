// import User from './user.js'; remember is default export, and you can set your own creativity name
import
    U,
    {
        printAge,
        printName as printUserName
    } from './user.js';

const user = new U('Hec', 37);
printAge(user);
printUserName(user);
