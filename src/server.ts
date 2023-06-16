import express from 'express';
import morgan from 'morgan';
import cors  from 'cors';

class ServerBooststrap {

    public app: express.Application = express();
    private port: number = 8000;

    /**
     * This constructor execute first configurations required for server start within problems. 
     */

    constructor(){
        //Initialize dependences
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //Address to home page
        this.app.get("/api/", (req, res) => {  
                res.status(200).json({
                    message:"Hola mundo"
                })
        })
        this.listen();
    }

    /**
     * This method initialize my app. Invoce one method from my Express app
     */

    public listen(): void {
        this.app.listen(this.port, () => 
        {
            console.log(`Server listening on port ${this.port}, url: localhost:${this.port}`)
        });
    }

}

new ServerBooststrap();



