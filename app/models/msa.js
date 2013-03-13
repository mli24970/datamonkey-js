var mongoose = require('mongoose');

var Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var Msa = new Schema({
    contents    : {type: String, require: true},  
    msaid       : {type: String},
    datatype    : Number,
    partitions  : Number,
    sites       : Number,
    rawsites    : Number,
    sequences   : Number,
    gencodeid   : Number,
    goodtree    : Number,
    nj          : String,
    mailaddr    : String,
    timestamp   : { type: String, default: (new Date()).getTime() }
});

Msa.index( { "id": 1 } );

var PartitionInfo = new Schema({
    _creator : { type: Schema.Types.ObjectId, ref: 'Msa' },
    partition   : Number,
    startcodon  : Number,
    endcodon    : Number,
    span        : Number,
    usertree    : String
});

var Sequences = new Schema({
    _creator : { type: Schema.Types.ObjectId, ref: 'Msa' },
    seqindex : Number,
    name     : String
});

module.exports = mongoose.model('Msa', Msa);
