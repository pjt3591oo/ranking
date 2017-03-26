/**
 * Created by bagjeongtae on 2017. 3. 26..
 */

"use strict";

module.exports = function(sequelize, DataTypes) {
    var userScore = sequelize.define("userScore", {
        score : DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                userScore.belongsTo(models.user)
            }
        }
    })
    ;

    return userScore;
};