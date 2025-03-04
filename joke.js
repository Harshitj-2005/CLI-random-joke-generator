import https from "https";
import chalk from "chalk"
import { error } from "console";

const get_joke = () => {
    const url = `https://official-joke-api.appspot.com/jokes/random`;
    https.get(url, (response) => {
        let data = "";
        response.on('data', (chunk) =>{
            data += chunk
        });

        response.on("end", () =>{
            const joke = JSON.parse(data)
            console.log(`Here is a random ${joke.type} joke`)
            console.log(chalk.green(`${joke.setup}`))
            console.log(chalk.red(`${joke.punchline}`))

        })
        response.on("error", (err) => {
            console.log("Error fetching the joke")
        })
    })
}

get_joke();