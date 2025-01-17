const config = require("../config.json");
const { client } = require("../index");
const mongo = require("../mongo");
const chalk = require("chalk");

client.on('ready', async (client) => {
    console.log(`${chalk.greenBright("[BOT]")} Bot ready and logged in as ${client.user.tag}`);
    await mongo().then(() => console.log(chalk.green("[DATABASE]") + " Connected to database successfully!"));
});
