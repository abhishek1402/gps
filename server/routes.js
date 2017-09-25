import UserController  from './controllers/UserController';
import CompanyController from './controllers/CompanyController';
import GoalController from './controllers/goalController'
import PasswordAuth from './auth/pwdAuth';
import CheckToken from './auth/checkToken';
export default (app) =>{
    app.post('/users/updateProfile',CheckToken.verify,UserController.updateProfile);
    app.get('/users/getData/:id',UserController.getUserData);
    app.post('/users/login',PasswordAuth.checkPassword,UserController.login);
    app.post('/users/signup',PasswordAuth.passwordHash,UserController.userSignup);
    app.get('/users/getAllRoles',UserController.getRoles);
    app.post('/users/getAllUsers',CheckToken.verify,UserController.getUsers);
    app.get('/location',UserController.listCountry);
    app.get('/location/:id',UserController.listState);
    app.get('/location/cities/:id',UserController.listCities);
    app.get('/users/getProfileImage',CheckToken.verify,UserController.getProfileImage);
    app.post('/company/signup',PasswordAuth.passwordHash,CompanyController.companySignup)
    app.post('/goal',CheckToken.verify,GoalController.inputGoal)
}   