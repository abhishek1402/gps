import jwt from 'jsonwebtoken';
class CheckToken{
    static verify(req,res,next){
        jwt.verify(req.headers.authorization,process.env.SECRET,(err,result)=>{
            req.body.user = result;
            next();
        })
    }
}

module.exports = CheckToken;