# Random Joke Generator

This is a simple Node.js application that fetches and displays a random joke from the Official Joke API. The joke is formatted using the `chalk` library for better visibility in the console.

## 📌 Features
- Fetches a random joke from an API.
- Uses `chalk` to color the joke setup and punchline.
- Handles API errors gracefully.

## 🛠️ Installation
To use this project, follow these steps:

1. Clone the repository or create a new directory:
   ```sh
   git clone <your-repo-url>
   cd your-project-folder
   ```

2. Initialize a Node.js project (if not already initialized):
   ```sh
   npm init -y
   ```

3. Install dependencies:
   ```sh
   npm install chalk
   ```

## 🚀 Usage
To run the joke generator, execute the following command:
```sh
node index.js
```

## 📄 Code Explanation
The `index.js` file contains the following logic:
- Uses the `https` module to fetch a joke from [Official Joke API](https://official-joke-api.appspot.com/jokes/random).
- Parses the API response and displays the joke setup and punchline.
- Uses `chalk` to style the console output.
- Handles errors gracefully.

## 📌 Dependencies
- [Node.js](https://nodejs.org/) (Required to run the script)
- [`chalk`](https://www.npmjs.com/package/chalk) (For colored console output)

## 🔥 Example Output
```sh
Here is a random programming joke
Why did the developer go broke?
Because he used up all his cache!
```

## 🛠️ Contributing
If you want to contribute:
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push the branch (`git push origin feature-branch`)
5. Open a pull request

## 📜 License
This project is open-source and available under the MIT License.

---

Happy coding! 😊

