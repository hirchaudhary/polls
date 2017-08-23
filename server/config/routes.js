let path = require('path');
let beltController = require("../controllers/beltController.js");

module.exports = function(app){
    app.post("/createUser", beltController.createUser);
    app.post("/addPoll", beltController.newPoll);
    app.get("/getUser", beltController.getUser);
    app.get("/getStatus", beltController.getStatus);
    app.get("/logout", beltController.logout);
    app.get("/getQuestions", beltController.getQuestions);
    app.get("/question/:id", beltController.getQuestionWithAnswers);
    app.put("/increaseVotes", beltController.increaseVotes);
    app.put("/delete", beltController.delete);
    app.get('*', function(request, response) {
        response.sendFile(path.resolve("./static/dist/index.html"))
    })
}