
# **express-crud-scaff**

A CLI tool to quickly scaffold a Node.js/Express project with a CRUD structure. Ideal for kickstarting your backend development workflow.

## **Features**
- Automatically generates a pre-configured Node.js/Express project.
- Includes scaffolding for:
  - Routes
  - Controllers
  - Public directory (for static files)
- Automatically installs dependencies (`npm install`).

## **Installation**

### **Global Installation**
Install the package globally via npm:

```bash
npm install -g express-crud-scaff
```

### **Local Development**
If you're working on the development of this package, you can test it locally using:

```bash
npm link
```

This will symlink the package globally for testing.

---

## **Usage**

Once installed, run the following command to create a new Express project:

```bash
express-crud-scaff
```

The CLI will prompt you for the project name. Example:

```bash
? Enter the project name: my-awesome-app
```

The tool will:
1. Create a new directory with the project name.
2. Scaffold the project structure.
3. Install dependencies.

---

## **Generated Project Structure**

Here’s an example of the structure created by the CLI:

```
my-awesome-app/
├── src/
│   ├── app.js
│   ├── routes.js
│   ├── controllers/
│   │   └── exampleController.js
├── public/
│   └── index.html
├── package.json
└── .gitignore
```

### **File Details**
- `src/app.js`: Main entry point for the Express server.
- `src/routes.js`: Defines application routes.
- `src/controllers/`: Contains controller files (e.g., `exampleController.js`).
- `public/`: Directory for static assets.
- `package.json`: Pre-configured with necessary dependencies and scripts.

---

## **Options**
Currently, the CLI only supports the default scaffolding. In future releases, more options will be added for customization (e.g., database integration).

---

## **Contributing**
If you'd like to contribute:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Author**
Created by Ugo de Ughi.
