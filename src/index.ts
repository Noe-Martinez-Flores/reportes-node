import app from './config/express';

const port = process.env.PORT || 3000;

const main = () => {
    try {
        app.listen( port );
        console.log( `Server running on port ${ port }`, `http://localhost:${port}` );
    }catch( e ) {
        console.error( e );
    }
}

main();