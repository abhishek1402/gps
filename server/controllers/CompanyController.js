import CompanyBuisness from '../buisness/companyBuisness';
import promise from 'promise';
import async from 'async';
class CompanyController {
    static companySignup(req,res,next){
        CompanyBuisness.signup(req.body)
        .then(data=>{console.log(data);res.status(200).send(data)})
        .catch((err)=>{
            if(err.errno==1062){
              res.status(405).send(err);
                return;
            }   
            res.status(404).send(err);
        }) 
    }
}

module.exports = CompanyController;