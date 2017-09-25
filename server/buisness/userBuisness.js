import conn from '../config/database';
import jwt from 'jsonwebtoken';
import transporter from '../config/mail';
import RoleBuisness from './roleBuisness'
import promise from 'promise';

class UserBuisness{
    static generateToken(userdata){
        return new Promise((resolve,reject)=>{

                let sql = `SELECT * FROM users WHERE email = '${userdata.txtEmail}'`;
                conn.query(sql,(err,result)=>{
                   
                    if(err)
                        { reject(err);
                        return;}
         
                    if(result.length == 0)
                        {   
                            reject(new Error('undefinded')) 
                            return;                                
                        }
                    let query = `SELECT role_id FROM user_role WHERE user_id = '${result[0].id}' `;
                    conn.query(query,(err,data)=>{
                        let token = jwt.sign({result},process.env.SECRET);
                        resolve({token:token,role:data[0].role_id,name:result[0].first_name,id:result[0].id});
                    })
                    })
            })
            
    }

    static userSignup(userdata){
       
        return new promise((resolve,reject)=>{
                this.userEmail(userdata).
                then(userdataWithRole=>{
                    let sql = `SELECT id FROM gps.company_profile WHERE email = '${userdataWithRole.compoanyEmail}' `
                 
                    conn.query(sql,(err,data)=>{ 
                                                
                        let sql = `INSERT INTO gps.users (first_name, last_name, email, pwd, mobile, company_id, country, state,city,image) 
                        VALUES ( '${userdataWithRole.txtFirstName}','${userdataWithRole.txtLastName}','${userdataWithRole.txtEmail}',
                        '${userdataWithRole.password}','${userdataWithRole.txtMobile}', '${data[0].id}', '${userdataWithRole.txtCountry}',
                        '${userdataWithRole.txtState}','${userdataWithRole.txtCity}','http://localhost:4000/uploads/default.png')`
                        conn.query(sql,(err,result)=>{
                            if(err){
                                if(err.errno == 1062)
                                    {  
                                        let error = new Error("Duplicate")
                                        reject(error);
                                        return;
                                    }
                                reject(error);
                                return;
                            } 

                            if(result.affectedRows==1){
                                resolve(result.affectedRows)
                                RoleBuisness.insertRole(userdataWithRole);
                                this.sendMail(userdataWithRole);
                            }
                        })
                    })
                })
                
        })
    }

    static userEmail(data){
       
        return new promise((resolve,reject)=>{
            let compoanyEmail;
            if(data.token != undefined ){
                
                jwt.verify(data.token,process.env.SECRET,(err,dataToken)=>{
                    compoanyEmail = dataToken.result[0].email;
                    data.compoanyEmail = compoanyEmail;
                   
                    resolve(data)
                })
            }

            else{
               
                data.compoanyEmail = data.txtEmail;
                data.txtRole = 1;
                resolve(data)
            }
        })
    }
    static sendMail(userdata){
        var mailOptions = {
            from: '"GPS " <abhisheks@qexon.com>', 
            to: `${userdata.txtEmail}`, 
            subject: 'Credentials of your Gps Id ', 
            
            html: `<span>Your user id  ${userdata.txtEmail}</span><br><span>Your password is ${userdata.confirmpassword}</span>
            <b>You can change your password here </b><br><button><a href="http://localhost:4200/subscribe/signup-user">
            Password</a></button>` 
        };

        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
    static getAll(data){
        
         return new promise((resolve,reject)=>{
             let sql = `SELECT * FROM users WHERE company_id = '${data.result[0].company_id}'`
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
    
    static updateImage(file,user){
         return new promise((resolve,reject)=>{
            console.log(file)
            let sampleFile = file.avatar;
            console.log(sampleFile)
             // Use the mv() method to place the file somewhere on your server
            sampleFile.mv(`server/uploads/${sampleFile.name}`, function(err) {
                if (err)
                    return res.status(500).send(err);
                let sql = `UPDATE users SET image = 'http://localhost:4000/uploads/${sampleFile.name}' WHERE id = '${user.result[0].id}'`
                console.log(sql) 
                conn.query(sql,(err,result)=>{
                    if(err)
                    {
                        reject(err)
                        return;
                    }
                    resolve(result);
                })
             });
            
        })
    }

    static getImage(user){
        return new promise((resolve,reject)=>{
            let sql = `SELECT image FROM users WHERE id = '${user.result[0].id}'`
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
    static getData(id){
        return new promise((resolve,reject)=>{
            let sql = `SELECT city,country,email,first_name,mobile,state FROM users WHERE id = '${id}'`
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

module.exports = UserBuisness