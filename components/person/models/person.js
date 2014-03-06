var path = require("path");
module.exports = function(seq, DataTypes) {
    var Person = seq.define("persona",
        {
            name : { type: DataTypes.STRING, allowNull: false},
            photo: {type: DataTypes.STRING, unique: false},
            info: { type: DataTypes.TEXT, allowNull: true },
            facebook: { type: DataTypes.STRING, allowNull: false},
            twitter: { type: DataTypes.STRING, allowNull: false}
        },
        {
        instanceMethods: {
            getInfo: function() {
                return this.info
            }
        }
    });
    return Person
};
