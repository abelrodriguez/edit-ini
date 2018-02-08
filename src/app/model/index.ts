import "reflect-metadata";
import {createConnection} from "typeorm";
import { Items } from "./entities/items.entity";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    const item = new Items();
    item.item_name = "Nombre";
    await connection.manager.save(item);
    console.log("Item saved: " + item.item_pk);
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    //
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    console.log("Succefully! You´re a crack");

}).catch(error => console.log(error));

// export * from './entities/items.entity'
// export * from './entities/groups.entity'
