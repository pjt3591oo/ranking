var express = require('express');
var router = express.Router();

const {user, userScore} = require('../../models');

// 점수 등록 : post /
// 해당 유저의 히스토리 : get /history

router.get('/history/:userId', (req, res)=>  {
    let userId = req.params.userId;

    userScore.findAll({
        where:{
            userId: userId
        }
    }).then(findedUsers=>{
        res.status(200).json({users: findedUsers});
    })
});

router.post('/:userId', (req, res) => {
    let userId = req.params.userId
    ,   score = req.body.score;

    user.findOne({
        where: {
            id: userId
        },
        raw: true
    }).then(finded => {

        if (! finded){
            return res.status(404).json({message: 'not founded users'})
        }

        userScore.create({
            userId: userId,
            score: score
        }).then(()=>{
            user.update({
                    score: score
                },
                {
                    where: {
                        id : userId
                }
            }).then(()=>{

                res.status(201).json({message: '점수 저장 완료'});

            })
        })

    });

});


module.exports = router;
