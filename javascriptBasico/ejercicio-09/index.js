const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


const funcionError = val =>{
    if(val > 5){
        return console.log("el valor es mayor que 5 y es numerico")
    }
    throw new Error("el numero debe ser mayor a 5 y debe ser numerico")
}
const numero = 3;

try{
    const mayorque = funcionError(numero)
    console.log(mayorque)
}catch(e){
    logger.error(`El valor de e es: ${e}`)
    
}