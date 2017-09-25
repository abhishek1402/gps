import GoalBuisness from '../buisness/goalBuisness'
class GoalController {
   static inputGoal(req,res){
    console.log(req.headers);
    GoalBuisness.insertGoal(req.body)
    .then(data => res.status(200).send({data}))
    .catch(err=> res.status(404).send(err))
   } 
}

module.exports = GoalController