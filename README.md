# React Portfolio Application

This is a React-based portfolio application that includes a login page, a main page with a dashboard, about section, project section, and contact section. The application also features a responsive navbar with menu and handles authentication using React Context and `localStorage`.

## Features

- **Responsive Design**: Fully responsive design with a sticky navbar.
- **Authentication**: Users must log in to access the main portfolio page.
- **Protected Routes**: Users are redirected to the login page if they try to access protected routes without authentication.
- **Persistent Authentication**: Authentication state is persisted across page refreshes using `localStorage`.
- **Logout Functionality**: Users can log out, which clears their authentication state.

## Demo

Include a link or a gif/screenshot of the project here (if available).

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/portfolio-assignment.git
    cd portfolio-assignment
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm start
    ```

    The application will start on `http://localhost:3000`.

## Project Structure
portfolio-assignment/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── login/
│ │ │ └── Login.js
│ │ ├── main-page/
│ │ │ └── MainPage.js
│ │ ├── navbar/
│ │ │ └── Navbar.js
│ │ ├── dashboard/
│ │ │ └── Dashboard.js
│ │ ├── about/
│ │ │ └── About.js
│ │ ├── projects/
│ │ │ └── Projects.js
│ │ ├── contact/
│ │ │ └── Contact.js
│ │ └── card/
│ │ └── Card.js
│ ├── contexts/
│ │ └── AuthContext.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── .gitignore
├── package.json
└── README.md


## Usage

### Authentication

1. **Login**: Navigate to the login page and enter the credentials to log in. If the credentials are valid, you will be redirected to the portfolio page.
2. **Protected Routes**: Accessing the `/portfolio` route directly without being authenticated will redirect you to the login page.
3. **Logout**: Click the logout button in the navbar to log out and clear the authentication state.

### Adding New Components

- To add new components, create a new file in the `src/components` directory.
- Import and use the new component in the appropriate parent component.

### Customizing Styles

- The main CSS file is located at `src/App.css`.
- Each component has its own CSS file in the same directory as the component.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- Your Name: Vipin Kumar Singh
- Email: contact.vipinkumarsingh@gmail.com

Feel free to reach out if you have any questions or need further assistance!
