import UserBuisness from '../buisness/userBuisness'
import promise from 'promise';
import LocationBuisness from '../buisness/locationBuisness'
import RoleBuisness from '../buisness/roleBuisness'
class UserController {
    static login(req,res,next){
        
        UserBuisness.generateToken(req.body)
        .then((token)=>{
            res.status(200).send(token)
        })
        .catch((err)=>{
            res.status(404).send(err);
        })
    }

    static userSignup(req,res,next){
        
        UserBuisness.userSignup(req.body)
        .then((token)=>{
          
            res.status(200).send({"token":token})
        })
        .catch((err)=>{
            if(err=="Duplicate"){
                res.status(400).send(err)
                return;
            }   
            res.status(404).send(err);
        }) 
    }

    static listCountry(req,res,next){
        LocationBuisness.getCountry()
        .then((data)=>{
            res.status(200).send(data);
        })
        .catch((err)=>{
            res.status(404).send(err)
        })
    }
    
    static listState(req,res){
        LocationBuisness.getStateOrCities(req.params.id)
        .then((data)=>{
           res.status(200).send(data);
        })
        .catch(err=>res.status(404).send(err))
    }

    static listCities(req,res){
        LocationBuisness.getStateOrCities(req.params.id)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(data))
    }

    static getRoles(req,res){
        RoleBuisness.getAllRoles()
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(err))
    }
    
    static getUsers(req,res){
       
        UserBuisness.getAll(req.body.user)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(err))
    }
    
    
    static updateProfile(req,res){
        UserBuisness.updateImage(req.files,req.body.user)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(err))
    }
    static getProfileImage(req,res){
        UserBuisness.getImage(req.body.user)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(err))
    }
    static getUserData(req,res){
        UserBuisness.getData(req.params.id)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(404).send(err))
    }
}

module.exports = UserController;