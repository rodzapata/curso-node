function saludar(nombre) {
  return `saludo a ${nombre}`;
}

function saludarHolaMundo() {
  return `hola mundo`;
}
//console.log(saludar("rodney"));

//console.log(module.exports);

//exportamos de la manera antigua
/*
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;
*/

// exportamos de la nueva forma
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
};
//console.log(module.exports);
