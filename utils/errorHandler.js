const casosRepository = require("../repositories/casosRepository");

const {validate} = require("uuid");





function errorCasoParametros(corpoCaso){
    let resp = null;
    let erro = {
        "status": 400,
        "message": "Parâmetros inválidos",
        "errors": []
    }
    arrayErro = [];
    
    if(!corpoCaso.titulo){
        arrayErro.push({
            "titulo": "A requisição deve possuir o campo 'titulo'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }
    
    if(!corpoCaso.descricao){
        arrayErro.push({
            "descricao": "A requisição deve possuir o campo 'descricao'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }
    
    if(!corpoCaso.status){
        arrayErro.push({
            "status": "A requisição deve possuir o campo 'status'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }else if(corpoCaso.status != "aberto" && corpoCaso.status != "solucionado"){
        arrayErro.push({
            "status": "O campo 'status' pode ser somente 'aberto' ou 'solucionado'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }
    
    if(!corpoCaso.agente_id){
        corpoCaso.agente_id = null;
    }else{
        if(!validate(corpoCaso.agente_id)){
            arrayErro.push({
                "agente_id": "Formatação de agente_id inválida"
            })
            erro.errors = arrayErro;
            resp = erro;
        }
    }
    return resp;
}

function errorCasoParametrosParciais(corpoCaso){
    let resp = null;

    let erro = {
        "status": 400,
        "message": "Parâmetros inválidos",
        "errors": []
    }

    let arrayErro = [];

    if(corpoCaso.status && (corpoCaso.status != "aberto" && corpoCaso.status != "solucionado")){
        arrayErro.push({
            "status": "O campo 'status' pode ser somente 'aberto' ou 'solucionado'"
        })
        erro.errors = arrayErro;
        resp = erro
    }

    if(corpoCaso.agente_id && !validate(corpoCaso.agente_id)){
        arrayErro.push({
            "agente_id": "Formatação de agente_id inválida"
        })
        erro.errors = arrayErro;
        resp = erro;
    }

    return resp;
}

function isValidDate(s){

    if(s[4] == '-' && s[7] == '-'){
        let arrayData = s.split('-');
        let dia = parseInt(arrayData[2]);
        let mes = parseInt(arrayData[1]);
        if((dia >  0 && dia <= 31) && (mes > 0 && mes <= 12)){
            return true;
        }
    }
    return false;
}

function isValidDateFuturo(s){
    let hoje = new Date();
    let data = new Date(s);
    if(data > hoje){
        return false;
    }
    return true;
}

function errorAgenteParametros(corpoAgente){
    let resp = null;
    let erro = {
        "status": 400,
        "message": "Parâmetros inválidos",
        "errors": []
    }
    arrayErro = [];
    
    if(!corpoAgente.nome){
        arrayErro.push({
            "nome": "A requisição deve possuir o campo 'nome'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }
    
    if(!corpoAgente.dataDeIncorporacao){
        arrayErro.push({
            "dataDeIncorporacao": "A requisição deve possuir o campo 'dataDeIncorporacao'"
        });
        erro.errors = arrayErro;
        resp = erro;
    } else if(!isValidDate(corpoAgente.dataDeIncorporacao)){
        arrayErro.push({
            "dataDeIncorporacao": "Campo dataDeIncorporacao deve seguir a formatação 'YYYY-MM-DD' "
        });
        erro.errors = arrayErro;
        resp = erro;
    } else if(!isValidDateFuturo(corpoAgente.dataDeIncorporacao)){
        arrayErro.push({
            "dataDeIncorporacao": "Campo dataDeIncorporacao não pode ser uma data futura "
        });
        erro.errors = arrayErro;
        resp = erro;
    }


    if(!corpoAgente.cargo){
        arrayErro.push({
            "cargo": "A requisição deve possuir o campo 'cargo'"
        })
        erro.errors = arrayErro;
        resp = erro;
    }

    return resp;
}

function errorAgenteParametrosParciais(corpoAgente){
    let resp = null;

    let erro = {
        "status": 400,
        "message": "Parâmetros inválidos",
        "errors": []
    }

    let arrayErro = [];

    if(corpoAgente.dataDeIncorporacao && !isValidDate(corpoAgente.dataDeIncorporacao)){
        arrayErro.push({
            "dataDeIncorporacao": "Campo dataDeIncorporacao deve seguir a formatação 'YYYY-MM-DD' "
        })
        erro.errors = arrayErro;
        resp = erro;
    } else if(!isValidDateFuturo(corpoAgente.dataDeIncorporacao)){
        arrayErro.push({
            "dataDeIncorporacao": "Campo dataDeIncorporacao não pode ser uma data futura "
        })
        erro.errors = arrayErro;
        resp = erro;
    }

    return resp;
}

module.exports = {
    errorCasoParametros,
    errorCasoParametrosParciais,
    errorAgenteParametros,
    errorAgenteParametrosParciais
}