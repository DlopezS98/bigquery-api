import { Application as ExpressApp, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import listRoutes, { endpoint as ListEndpoint } from './routes/list.routes';

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
        this.app.use(morgan('dev'));
        this.app.use(json());

        // Routes...
        this.app.get('/', (req, res) => {
            res.send('Hello World Again!!!!');
        });
        this.app.use(ListEndpoint, listRoutes);

        return this.app;
    }
}