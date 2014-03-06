var views = require("./views").views;

exports.dispatch = function(app){
    return [
        {"/event/person/:personid" :  {
            "get": views.getRelatedEntity
        }},
        {"/event/:id" :  {
            "get": views.getEntity,
            "post": views.updateEntity,
            "put" : views.updateEntity,
            "delete" : views.removeEntity
        }}
    ]
};
