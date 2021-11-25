const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');

cron.schedule('*/2 * * * *',async()=>{
  console.log(`Datos cargados en la BD fecha: ${new Date().toLocaleString()}`);
  const html = await axios.get('http://localhost:3000/');
  const $ = cheerio.load(html.data);
  const filas = $("tbody tr");
  const arreglo = [];



  //Obtener las filas 
  filas.each((i, e)=>{
    const fila = $(e).text().toString().trim();
    const datos = fila.split('\n');
    const contable = {
      Secuencia: datos[0].trim(),
      Detalle: datos[1].trim(),
      Usuario: datos[2].trim(),
      Debe: datos[3].trim(),
      Haber: datos[4].trim(),
      Tipo: datos[5].trim(),
    }
    arreglo.push(contable);
  });

  //Agregamos a la DataBase
  await arreglo.forEach(async(e) =>{
    await axios.post('http://localhost:5000/api', e)
  })
})
