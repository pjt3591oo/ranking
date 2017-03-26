/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
/**
 * Created by bagjeongtae on 2017. 3. 26..
 */

"use strict";

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        userName :   DataTypes.STRING,
        score:       DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                user.hasMany(models.userScore)

            }
        }
    })
    ;

    return user;
};