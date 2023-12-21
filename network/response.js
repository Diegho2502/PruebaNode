// Manejador de mensajes de exito.
const success = function (req, res, message, status){
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

// Manejador de mensajes de error.
const error = function (req, res, message, status,details){
    console.error(details);
    res.status(status || 500).send({
        error: message,
        body:''
    });
}

export default {
    success,
    error
}