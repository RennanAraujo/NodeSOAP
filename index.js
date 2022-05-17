/*
 * https://www.luiztools.com.br/post/lidando-com-soap-em-node-js/#2
 * Dilbert site is deactivated. Error in SSL connection
 */

const soap = require('soap');

const url =
  'https://server.fincs.com.br/motores/distributiondata/MarketData.svc?singleWsdl';

soap.createClient(url, function (err, client) {
  //configurar para aceitar tipo texto
  if (err) return console.log(err);
});

/* const url =
  'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?WSDL';

soap.createClient(url, function (err, client) {
  client.consultaCEP({ cep: '01401000' }, (err, resp) => {
    if (err) return console.log(err);
    console.log(JSON.stringify(resp, null, 2));
  });
}); */

/*const url = 'http://www.dneonline.com/calculator.asmx?wsdl';
  soap.createClient(url, function (err, client) {
  client.Multiply({ intA: 999, intB: 2 }, function (err, result) {
    if (err) return console.log(err);
    console.log(result.MultiplyResult);
  });
}); */

/* 
  const url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';
  soap.createClient(url, function (err, client) {
  client.DailyDilbert({ ADate: '2019-11-02' }, function (err, result) {
    if (err) return console.log(err);
    console.log(result.DailyDilbertResult);
  });
}); */
//https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?WSDL

//client.consultaCEP({cep: '80730000'}, (err, resp) => {console.log(JSON.stringify(resp, null, 2))})
