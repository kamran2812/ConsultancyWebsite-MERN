# ConsultancyWebsite-MERN

## Description
ConsultancyWebsite-MERN is a beautiful and interactive MERN stack consultancy website featuring over 15 pages. This web application provides a user-friendly interface, allowing users to navigate easily through various sections. The project utilizes Mail.js to implement a newsletter subscription feature, enabling users to subscribe and receive updates directly to their email. Additionally, the application allows users to contact the consultancy team, making it easy for potential clients to get in touch.

## Note: The master branch is the main branch of this repository, containing the project structure, including the client and server folders.


## Features
- **User Contact:** Users can get in touch with the consultancy team.
- **Newsletter Subscription:** Subscribe to receive updates via email.
- **Interactive Design:** A beautiful and responsive interface for easy navigation.
- **Multi-Page Layout:** Over 15 pages of content for a comprehensive user experience.

## Installation

### Prerequisites
- Node.js
- MongoDB
- Git

### Cloning the Repository
To get started, clone the repository to your local machine:

```bash
git clone https://github.com/kamran2812/ConsultancyWebsite-MERN.git
cd ConsultancyWebsite-MERN
```

### Environment Variables
Create a file named `config.env` in the root of the `server` folder and add the following configuration:

```plaintext
# Server configuration
PORT=5000

# Database configuration
DATABASE=mongodb://royalconsultantinn:Royal369@ac-4s40ver-shard-00-00.ivulp4j.mongodb.net:27017,ac-4s40ver-shard-00-01.ivulp4j.mongodb.net:27017,ac-4s40ver-shard-00-02.ivulp4j.mongodb.net:27017/royalconsultant?ssl=true&replicaSet=atlas-igj9se-shard-0&authSource=admin&retryWrites=true&w=majority
```

## Running the Application

### Server
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Client
1. Navigate back to the root folder:
   ```bash
   cd ..
   ```
2. Navigate to the `my-app` (client) folder:
   ```bash
   cd my-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the client:
   ```bash
   npm start
   ```

## Folder Structure
```plaintext
CONSALTANCYWEB/
├── my-app/         # React front-end application (client)
├── server/         # Node.js back-end application
├── config.env      # Configuration file for environment variables
└── .gitignore      # Files and directories to be ignored by Git
```

## Technologies Used
- **Front-End:** React.js, HTML, CSS, JavaScript
- **Back-End:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git

## License
This project is licensed under the MIT License.
