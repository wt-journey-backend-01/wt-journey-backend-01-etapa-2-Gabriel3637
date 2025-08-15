const z = require('zod');
const errorHandler = require('./errorHandler');

function validateAgenteFullBody(req, res, next){
    const validateObj = req.body;
    let result = errorHandler.schemeBaseAgente.strict().safeParse(validateObj);
    if(!result.success){
        result = z.treeifyError(result.error)
        console.log(JSON.stringify(result, null, 2))
        let errors = Object.fromEntries(
            Object.entries(result.properties).map(([chave, valor]) => {
                return [chave, valor.errors[0]]
            })
        )
        return res.status(400).json({
            status: 400,
            message: "Parâmetros inválidos",
            errors: errors
        })
    }else{
        return next();
    }
}

function validateAgentePartialBody(req, res, next){
    const validateObj = req.body;
    let result = errorHandler.schemeBaseAgente.partial().strict().safeParse(validateObj);
    if(!result.success){
        result = z.treeifyError(result.error)
        console.log(JSON.stringify(result, null, 2))
        let errors = Object.fromEntries(
            Object.entries(result.properties).map(([chave, valor]) => {
                return [chave, valor.errors[0]]
            })
        )
        return res.status(400).json({
            status: 400,
            message: "Parâmetros inválidos",
            errors: errors
        })
    }else{
        return next();
    }
}

function validateCasoFullBody(req, res, next){
    const validateObj = req.body;
    let result = errorHandler.schemeBaseCaso.strict().safeParse(validateObj);
    if(!result.success){
        result = z.treeifyError(result.error)
        console.log(JSON.stringify(result, null, 2))
        let errors = Object.fromEntries(
            Object.entries(result.properties).map(([chave, valor]) => {
                return [chave, valor.errors[0]]
            })
        )
        return res.status(400).json({
            status: 400,
            message: "Parâmetros inválidos",
            errors: errors
        })
    }else{
        return next();
    }
}

function validateCasoPartialBody(req, res, next){
    const validateObj = req.body;
    let result = errorHandler.schemeBaseCaso.partial().strict().safeParse(validateObj);
    if(!result.success){
        result = z.treeifyError(result.error)
        console.log(JSON.stringify(result, null, 2))
        let errors = Object.fromEntries(
            Object.entries(result.properties).map(([chave, valor]) => {
                return [chave, valor.errors[0]]
            })
        )
        return res.status(400).json({
            status: 400,
            message: "Parâmetros inválidos",
            errors: errors
        })
    }else{
        return next();
    }
}

module.exports={
    validateAgenteFullBody,
    validateAgentePartialBody,
    validateCasoFullBody,
    validateCasoPartialBody
}