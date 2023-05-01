import * as http from 'http';
import app from './app';

const proxy = http.createServer(app);

proxy.listen(8080, () => {
    console.log("server start at port 3000. Code Typescript");
});