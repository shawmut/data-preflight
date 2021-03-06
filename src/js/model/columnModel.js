var jdenticon = require("jdenticon");

var ColumnModel = function(name) {

    var column = this;

    column.name = name;
    column.preview = {};
    column.attributes = {};
    column.warnings = [];

    column.setAttributes = function(min, max, uniques, unique_characters, types){
        column.attributes.min = min;
        column.attributes.max = max;
        column.attributes.uniques = uniques;
        column.attributes.unique_characters = unique_characters;
        column.attributes.types = types;
    };

    column.setPreview = function(first, middle, last){
        column.preview.first = first;
        column.preview.middle = middle;
        column.preview.last = last;
    };

    column.addWarning = function(warning){
        column.warnings.push(warning);
    };

    column.setHash = function(hash){
        column.hash = hash;
        column.hash_image = jdenticon.toSvg(hash, 34);
    };

};

module.exports = ColumnModel;