import { Sequelize } from "sequelize-typescript";
import envConfig from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string, {
    models: [__dirname + '/models']
})

try {
    sequelize.authenticate()
    .then(() => {
        console.log("Authenticated!");
    })
    .catch(err => {
        console.log("Error !!", err);
    })
} catch(error) {
    console.log(error);
}

sequelize.sync({force : false, alter : true}).then(()=> {
    console.log('synced');
})

export default sequelize
