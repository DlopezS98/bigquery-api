import { Application as ExpressApp, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default class Application {
    private app: ExpressApp;

    constructor(app: ExpressApp) {
        this.app = app;
    }

    public start(): ExpressApp {
        // settings...
        this.app.set('port', process.env.PORT || 3000);

        // Middlewares...
        this.app.use(cors());
        // this.app.use(urlencoded());
        this.app.use(morgan('dev'));
        // Routes...
        this.app.get('/', (req, res) => {
            res.send('Hello World Again!!!!');
        });

        return this.app;
    }
}