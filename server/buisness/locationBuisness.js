import conn from '../config/database';

class LocationBuisness {
    static getCountry(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM locations where location_type = 0 '
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
    static getStateOrCities(id){

        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM locations where parent_id = '${id}'`
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

module.exports = LocationBuisness