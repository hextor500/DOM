/*
aqua = index 0
emocion = index 1
alegria = index 2
frescura = index 3
*/

const preciosProductos = [200, 180, 160, 150];

let vendedorForm = null;
let productoForm = null;
let cantidadForm = null;

const pedro = [[],[],[],[]];
const juana = [[],[],[],[]];

document.getElementById("form").addEventListener("submit",function(e){
//Prevenir que se guarda datos:
e.preventDefault();
  
//Get your input value
vendedorForm = document.getElementById("vendedor").value;
productoForm = document.getElementById("producto").value;
cantidadForm = document.getElementById("cantidad").value;

//Reset the form

document.getElementById("form").reset();

});

//Function to trigger the onClick event and execute the registrarVentas with a delay

function activarOnclick (){
    setTimeout(function (){
        registarVentas(vendedorForm,productoForm,cantidadForm);  
    }, 100)  
}

//Function to save data

function registarVentas (vendedor, producto, cantidad) {
    cantidad = parseInt(cantidad);
    if(typeof(cantidad) == "number" && Number.isNaN(cantidad) == false){
        if(vendedor == "pedro"){
            if (producto == "aqua"){
                pedro[0].push(cantidad);
            } else if (producto == "emocion"){
                pedro[1].push(cantidad);
            } else if (producto == "alegria"){
                pedro[2].push(cantidad);
            } else if (producto == "frescura"){
                pedro[3].push(cantidad);
            }
        } else if (vendedor == "juana"){
            if (producto == "aqua"){
                juana[0].push(cantidad);
            } else if (producto == "emocion"){
                juana[1].push(cantidad);
            } else if (producto == "alegria"){
                juana[2].push(cantidad);
            } else if (producto == "frescura"){
                juana[3].push(cantidad);
            }
        } 
    } else {
        alert("Por favor ingresa un numero")
    }
}

//Function to display all the sales per vendedor

function totalVentas (){
    let ventasProductoPedro = 0;
    let ventasProductoJuana = 0;
    let ventasTotalPedro = 0;
    let ventasTotalJuana = 0;

    for (let i= 0; i < pedro.length; i++) {
        for (let j = 0; j < pedro[i].length; j++) {
            ventasProductoPedro = ventasProductoPedro + pedro[i][j];
            console.log(ventasProductoPedro);
        }
        ventasProductoPedro = ventasProductoPedro * preciosProductos[i];
        console.log(ventasProductoPedro);
        ventasTotalPedro = ventasTotalPedro + ventasProductoPedro;
        ventasProductoPedro = 0;       
    }
    document.getElementById("ventasPedro").innerHTML = `${ventasTotalPedro}`;
    console.log(`ventas totales de Pedro ${ventasTotalPedro}`); 
    for (let i= 0; i < juana.length; i++) {
        for (let j = 0; j < juana[i].length; j++) {
            ventasProductoJuana = ventasProductoJuana + juana[i][j];
            console.log(ventasProductoJuana);
        }
        ventasProductoJuana = ventasProductoJuana * preciosProductos[i];
        console.log(ventasProductoJuana);
        ventasTotalJuana = ventasTotalJuana + ventasProductoJuana;
        ventasProductoJuana = 0;       
    }
    document.getElementById("ventasJuana").innerHTML = `${ventasTotalJuana}`;
    console.log(`ventas totales de Juana ${ventasTotalJuana}`);
}

//Function to konw the employe of the month

function empleadoMes (){
    let ventasPedro = parseInt(document.getElementById("ventasPedro").innerHTML);
    let ventasJuana = parseInt(document.getElementById("ventasJuana").innerHTML);
    
    if(ventasPedro > ventasJuana){
        document.getElementById("vendedorMes").innerHTML = `Pedro es el vendedor del mes con ${ventasPedro} USD en ventas`
    } else if(ventasJuana > ventasPedro){
        document.getElementById("vendedorMes").innerHTML = `Juana es el vendedor del mes con ${ventasJuana} USD en ventas`
    } else if (ventasJuana = ventasPedro){
        document.getElementById("vendedorMes").innerHTML = `Ambos vendedores tuvieron la misma cantidad de ventas.`
    }
}



