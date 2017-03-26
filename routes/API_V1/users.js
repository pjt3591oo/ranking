var express = require('express');
var router = express.Router();

var indexOf = require('../../utils/indexOf');
var hash = require('../../utils/hash');

const {user, userScore} = require('../../models');

// 1. 유저등록   post
// 2. 유저 리스트(유저와 점수 보기) get
// 3. 유저 랭킹 보기

router.get('/crypto', (req, res)=>{
    let test = req.query.test;
    hash(test, (hashed) => {
        res.end(hashed);
    })
})

router.get('/', function(req, res, next) {

    user.findAll({
        include:[{ // inner join
            model: userScore
        }]
        // SELECT *FROM user INNER JOIN userScore as us on ;
    }).then(findedUser=>{
        console.log(findedUser);
        res.status(200).json({message: '', users: findedUser});
    }, (err)=>{
        console.log(err);
        res.status(504).json({message: '서버와 연결을 할 수 없습니다'})
    })
});

router.post('/', function(req, res, next) {
    let userName = req.body.userName;

    user.findOrCreate({
        where: {
            userName: userName
        },
        defaults: {
            userName: userName,
            score: 0
        }
    }).spread( (findedUser, isCreated) => {
        if(isCreated){
            res.status(201).json({message:'created'});
        }else{
            res.status(200).json({message:'already exists'});
        }
    })
});

router.get('/rank/:userId', (req, res)=>{
    user.findAll({
        order: [
            ['score', 'DESC']
        ]
    }).then(findedUsers=>{
        indexOf(findedUsers, req.params.userId, function(rank){
            res.status(200).json({users: findedUsers, rank: rank});
        })
    })
})

module.exports = router;
