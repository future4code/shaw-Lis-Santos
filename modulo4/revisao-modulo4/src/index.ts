// import app from "./app";
// import { createCharacter } from "./endpoints/createCharacter";
// import { deleteCharacter } from "./endpoints/deleteCharacter";
// import getAllCharacters from './endpoints/getAllCharacters'

// app.get("/character", getAllCharacters)
// app.put("/character", createCharacter)
// app.delete("/character/:id", deleteCharacter)


let data = new Date();
let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
console.log(dataFormatada);