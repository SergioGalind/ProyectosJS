const datos =[1, 2, 3, 4, 5];

const getDataPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() =>{
           // resolve(datos);
           reject('No se pudo :c ');
        },3000);
    }
);

//console.log (getDataPromise);

getDataPromise.then((result) =>{
    console.log(result);
    console.log('Termina Promesa');
}).catch(error => console.log(error));