#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log(chalk.green("Welcome to My Express CRUD Scaffolding CLI!"));

  // Prompt per il nome del progetto
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      default: "my-node-app"
    }
  ]);

  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.log(chalk.red("Error: Directory already exists!"));
    process.exit(1);
  }

  // Copia dei file di template
  const templatePath = path.join(__dirname, "../templates");
  fs.mkdirSync(projectPath, { recursive: true });

  const copyFolder = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyFolder(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  copyFolder(templatePath, projectPath);
  console.log(chalk.green(`Project ${projectName} created successfully!`));

  // Installazione delle dipendenze
  console.log(chalk.yellow("Installing dependencies..."));
  execSync("npm install", {
    cwd: projectPath,
    stdio: "inherit"
  });

  console.log(chalk.green("Setup complete!"));
})();