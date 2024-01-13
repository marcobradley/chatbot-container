# OpenAI ChatGPT Integration Example

This is a basic example demonstrating how to create a simple webpage that interacts with OpenAI's ChatGPT using a Node.js backend.

## Prerequisites

- Node.js installed on your machine.
- OpenAI API key. Obtain it from the [OpenAI website](https://beta.openai.com/signup/).

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/marcobradley/chatgpt-chatbot-container.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your OpenAI API key:

    The API key is pulled from the environment variable `OPENAI_API_KEY`
    
4. Start the server:

    ```bash
    node index.js
    ```

    The server will run at http://localhost:3000.

5. Open your browser and navigate to http://localhost:3000 to see the example webpage.

## Usage

1. Enter a prompt in the input field on the webpage.

2. Click the "Submit" button to send the prompt to the server.

3. The server communicates with OpenAI's API and returns the response, displaying it on the webpage.

## Styling

The example webpage is styled using a CSS file. The styles are defined in `styles.css`. This file is linked in the HTML file to enhance the appearance of the page.

## Folder Structure

- **index.js:** Node.js server code.
- **your-html-file.html:** HTML file with the example webpage.
- **styles.css:** CSS file for styling.
- **README.md:** Documentation.

## Notes

- This is a basic example for educational purposes and may lack certain features for production use.
- Implement proper error handling, input validation, and security measures before deploying in a production environment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
