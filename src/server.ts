import express from 'express';
import morgan from 'morgan';
import cors  from 'cors';

class ServerBooststrap {

    public app: express.Application = express();
    private port: number = 8000;

    constructor(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.get("/api/", (req, res) => {
            try{
                
                res.status(200).json({
                    message:"Hola mundo"
                })
            } catch (e){
                throw new Error(`Error to initialize server. HTTP code: ${res.status}`)
            }
        })
        this.listen();
    }

    public listen(): void {
        this.app.listen(this.port, () => 
        {
            console.log(`Server listening on port ${this.port}, url: localhost:${this.port}`)
        });
    }

}

new ServerBooststrap();



