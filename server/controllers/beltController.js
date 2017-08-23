var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Option = mongoose.model('Option');

module.exports = {
    createUser: function(request, response) {
        var user = new User(request.body)
        user.save(function(error) {
            if(!error) {
                request.session._id = user._id;
                request.session.name = user.name;
                response.json(user);
            }else{
                console.log(error);
                response.status(400).json(errors, error);
            }
        })
    },

    getUser:function(request, response){
        User.findOne({_id:request.session._id}, function(error, user){
            if(error) {
                console.log(error);
            } else {
                response.json(user);
            }
        })
    },

    logout: function(request, response){
        if(request.session._id != null){
            request.session._id = null;
            request.session.name = null;
            response.json("logged out")
        }else{
            response.json("not logged in")
        }
    },

    getStatus: function(request, response){
        if(request.session._id != null){
            response.json(true)
        }else{
            response.json(false)
        }
    },

    newPoll: function(request, response) {
        var que = new Question(request.body.que)
        que.user = request.session.name;
        que.save(function(error) {
            if(error) {
                response.json(error);
            }else{
                var opt = new Option(request.body.opt)
                opt.vote_one = 0;
                opt.vote_two = 0;
                opt.vote_three = 0;
                opt.vote_four = 0;
                opt._question = que._id;
                opt.save(function(err){
                    if(err){
                        response.json(err)
                    }else{
                        response.json(que)
                    }
                })
            }
        })
    },

    getQuestions:function(request, response){
        Question.find({}, function(error, questions){
            if(error) {
                console.log(error);
            } else {
                response.json(questions);
            }
        })
    },

    getQuestionWithAnswers:function(request, response){
        Question.findOne({_id:request.params.id}, function(error, question){
            Option.findOne({_question:request.params.id}, function(err, options){
                if(error) {
                    console.log(error);
                } else {
                    response.json({question:question, options:options});
                }
            })
        })
    },

    increaseVotes: function(request, response){
        if(request.body.vote==="one"){
            Option.findOneAndUpdate({ _id: request.body.id }, { $inc: { vote_one: 1 } },function(error){
                if(error){
                    response.status(400).json(error)
                }else{
                    response.json(true)
                }
            }) 
        }else if(request.body.vote==="two"){
            Option.findOneAndUpdate({ _id: request.body.id }, { $inc: { vote_two: 1 } },function(error){
                if(error){
                    response.status(400).json(error)
                }else{
                    response.json(true)
                }
            }) 
        }else if(request.body.vote==="three"){
            Option.findOneAndUpdate({ _id: request.body.id }, { $inc: { vote_three: 1 } },function(error){
                if(error){
                    response.status(400).json(error)
                }else{
                    response.json(true)
                }
            }) 
        }else if(request.body.vote==="four"){
            Option.findOneAndUpdate({ _id: request.body.id }, { $inc: { vote_four: 1 } },function(error){
                if(error){
                    response.status(400).json(error)
                }else{
                    response.json(true)
                }
            }) 
        } 
    },

    delete:function(request,response){
        console.log(request.body.id)
        Question.remove({_id:request.body.id}, function(error){
            if(!error) {
                response.json(true)
            }else{
                console.log(error)
                response.json(error)
            }
        })
    },
}
