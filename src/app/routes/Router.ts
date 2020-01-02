import LoginController from '../controllers/LoginController';

export default class Router {

    public static listenMethods = (app)=>{
        app.post('/signup', LoginController.createUsers);
        app.post('/signin', LoginController.loginAuth);

    }
}

