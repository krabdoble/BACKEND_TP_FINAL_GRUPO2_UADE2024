const express= require('express');
const app= express();

//PARA PODER PROCESAR JSON
//app.use(express.JSON());
app.use(express.json());

//LLAMAR A LA RUTAS
const proveedorroutes= require('./routes/proveedorRoute');
const clienteroutes= require('./routes/clienteRoute');
const productoroutes= require('./routes/productoRoute');
const pedidoroutes= require('./routes/pedidoRoute');


const PORT = process.env.PORT || 3000;

app.use('/api/proveedor',proveedorroutes)
app.use('/api/cliente',clienteroutes)
app.use('/api/producto',productoroutes)
app.use('/api/pedido',pedidoroutes)

app.listen(PORT,() =>{
    console.log('listening on port '+PORT);
});