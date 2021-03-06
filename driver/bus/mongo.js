/*
var Mongoose = require('mongoose').Mongoose;
var fs = require('fs');
var path = require('path');
var mongog = require(path.join(__dirname, "..", "..", "api", "mongog.js"));
var mongoose = new Mongoose();

var CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')))
var stringConexao = 'mongodb://'+ CONFIG.mongo.ip +'/bus';
mongoose.connect(stringConexao);


// ---------------------------------- SCHEMAS ----------------------
var Schema = mongoose.Schema;
var genericSchema = new Schema({
    "domain": String
}, {strict: false});


var genericModel = [];
var genericSchemas = [];

genericSchemas['climas'] = new Schema({
    "ultima_hora": String
}, {strict: false});
genericModel['climas'] = mongoose.model('climas', genericSchemas['climas']);



// ------------------------------------------------------------------

exports.ConsultarSchema = function (schema, req, res) {
    //console.log(schema);
    res.end(JSON.stringify(genericSchemas[schema].paths));
}

exports.ConsultarAsync = function (schema, consulta, sort, params, callback) {
    try {
        mongog.ConsultarAsync(Esquema(schema), schema, consulta, sort, params, callback);
    }catch(e){
        console.error(e.stack);
    }
    /!*var generico = Esquema(schema);
    var limit = 99999;
    if(params.limit != ""){
        limit = parseInt(params.limit);
        //console.error('Novo limite:', limit);
    }
    if(sort == undefined) {
        generico.find(consulta).limit(limit).exec(function (err, docs) {
            try{
                //console.error(consulta);
                //console.log('Total de elemntos aqui', docs.length)
                callback(docs);
            }
            catch(e)
            {
                console.error(e.stack);
            }
        });
    }
    else
    {
        generico.find(consulta).sort(sort).exec(function (err, docs) {
            callback(docs);
        });
    }*!/
}


exports.ConsultarArrayAsync = function (schema, consultas, pos, retornar, req, res, callback) {
    if(pos < consultas.length){
        //console.log('invocando eu');
        var eu = require('./mongoose.js');
        //console.log('ok, consegu..., vou usar a achave:', consultas[pos])
        var generico = Esquema(schema);
        generico.find(consultas[pos], function (err, docs) {
            //console.log(docs);
            pos = pos + 1;
            retornar.push(docs);
            eu.ConsultarArrayAsync(schema, consultas, pos, retornar, req, res, callback);
        });
    }
    else
    {
        callback(req, res, consultas, retornar );
    }
}

exports.DropCollection = function (collection, callback) {
    try {
        //console.log('Aqui dentro, excluir a collection:', collection)
        mongoose.connection.db.dropCollection(collection, function(err, result) {
            callback(result);
        });


    }
    catch (ex) {
        callback(ex.stack);
    }
}

exports.CountArrayAsync = function (schema, consultas, pos, retornar, req, res, callback) {
    if(pos < consultas.length){
        //console.log('invocando eu');
        var eu = require('./mongoose.js');
        //console.log('ok, consegu..., vou usar a achave:', consultas[pos])
        var generico = Esquema(schema);
        generico.count(consultas[pos], function (err, count) {
            pos = pos + 1;
            retornar.push(count);
            eu.CountArrayAsync(schema, consultas, pos, retornar, req, res, callback);
        });
    }
    else
    {
        callback(req, res, consultas, retornar );
    }
}

exports.UpdateAsync = function (schema, chave, data, parametros, callback) {
    try{
        mongog.UpdateAsync(Esquema(schema), schema, chave, data, parametros, callback);
    }
    catch (ex) {
        console.log(ex.stack);
    }
}

exports.Count = function (schema, consulta, params, callback) {
    var generico = Esquema(schema);
    generico.count(consulta, function( err, count){
        //console.log( "Number of users:", count );
        callback({"count" :  count });
    })
}

exports.Drop = function (schema, callback) {
    try {
        mongog.Drop(Esquema(schema), schema, callback);
    }catch(e){
        console.error(e.stack);
    }
}

// Retorna uma variável des schema baseado em um array de collections
function Esquema(schema) {
    if(genericModel[schema] == undefined){
        genericModel[schema] = mongoose.model(schema, genericSchema);
    }
    return genericModel[schema];
}*/
