import express from 'express';
import cors from 'cors';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {};

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Defined 'public' directory
    this.app.use(express.static('public'));
  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('App listening on port', process.env.PORT);
    });
  }
}

export default Server;
