import mongoose from "mongoose";
import config from "config";
import logger from "./logger"

async function connect() {
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri);
        logger.info('Connect to DB');
    } catch (error) {
        logger.error('Could not connect to db');
        process.exit(1);
    }
}
export default connect;



/*
 
function connect() {
    const dbUri = config.get<string>('dbUri');
    return mongoose.connect(dbUri).then(
        () => {
            console.log('Connect to DB');
        }
    ).catch((error) => {
        console.error('Could not connect to db');
        process.exit(1);
    });
}

 */