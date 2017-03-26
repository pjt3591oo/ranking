/**
 * Created by bagjeongtae on 2017. 3. 26..
 */

module.exports = function(list, userId, cb){
    list.map((item, index)=>{
        if (item.id == userId){
            cb(index+1)
        }
    })
}