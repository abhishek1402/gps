import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
export default (app) =>{
    app.use(bodyParser({limit: '50mb'}));
    app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));
    
    app.use(bodyParser());
    app.use(fileUpload());
    app.use(cors());
}