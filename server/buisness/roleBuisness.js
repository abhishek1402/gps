import conn from '../config/database';

class RoleBuisness{
    static insertRole(userData){
        let sql = `SELECT * FROM users WHERE users.email = '${userData.txtEmail}'`
        conn.query(sql,(err,result)=>{
            let query =  `INSERT INTO user_role ( user_id, role_id, company_id) VALUES (${result[0].id}, '${userData.txtRole}', '${result[0].company_id}')`
            conn.query(query,(err,res)=>{
                return;
            })
        })
    }
    static getAllRoles(){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM role`;
            conn.query(sql,(err,result)=>{
                if(err)
                {
                    reject(err)
                    return;
                }
                resolve(result);
            })
        })
    }
}
module.exports = RoleBuisness;