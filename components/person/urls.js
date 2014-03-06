var views = require("./views").views;

exports.dispatch = function(app){
    return [
        {"/person/:id" :  {
            "get": views.getEntity,
            "post": views.updateEntity,
            "put" : views.updateEntity,
            "delete" : views.removeEntity
        }}
    ]
};
