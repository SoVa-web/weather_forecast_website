import dotenv from 'dotenv';
import express from 'express';
import request from 'request';
import ParserMaster from './routers/parserMaster'


dotenv.config({
  path: '.env'
});


class Server {
  public app = express();
  public parser = ParserMaster;
}


const server = new Server();
server.app.use('/api', server.parser);


((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();



