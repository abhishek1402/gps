import conn from '../config/database';
import promise from 'promise';

class GoalBuisness {
    static insertGoal(data){
        console.log(data);
        if(data.actualTime!=undefined){
            return new promise((resolve,reject)=>{
                let sql =  `UPDATE goal SET actual_time='${data.actualTime}' WHERE id='${data.goalId}';`
                conn.query(sql,(err,result)=>{
                    if(err)
                    {
                        reject(err);
                        return;
                    }
                    resolve("success");
                })
            })
        }
        return new promise((resolve,reject)=>{
            let sql =  `INSERT INTO gps.goal ( goal_name, goal_description,expected_time, user_id,company_id,date) VALUES 
            ( '${data.txtGoal}', '${data.txtGoalDescription}', '${data.expected_time}','${data.user.result[0].id}',
            '${data.user.result[0].company_id}','${data.chosenDate}');`
            conn.query(sql,(err,result)=>{
                if(err)
                {
                    reject(err);
                    return;
                }
                resolve({goalid:result.insertId});
            })
        })
    }
}
module.exports = GoalBuisness