const teams =["Livrpool", "Dortmun", "Chelsea"];

setTimeout (()=> console.log('tarea asincrona'));

console.log ('Sigue ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}

function asincGetTeams(){
    setTimeout( () => teams,2000);
}

console.log(getTeams());
console.log('final de codigo');

console.log(asincGetTeams());
console.log('Termina el llamado de funcion');