const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.webhook2 = functions.https.onRequest((request, response) => {

    console.log("Request.body.queryResult.parameters: ", request.body.queryResult.parameters);

    let params = request.body.queryResult.parameters;

    response.send({
        fulfillmentText: `Señor(a) ${params.given_name}, su reserva de habitacion tipo: ${params.tipo_habitacion} queda agendada para 
            ${params.number} personas, nos contactaremos con usted al correo: ${params.email} pronto.`
    });
});