# My Portofolio

# Steps Of Portofolio

### (1) Install TailwindCss

    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

### (2) Install craco

    npm install @craco/craco

### (3) Edit Configuration In Package.json

    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "craco eject"
    }

### (4) Create [craco.config.js] At Root Of Project

    ```js
        // craco.config.js
        module.exports = {
            style: {
            postcss: {
                plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                ],
            },
            },
        }
    ```

### (5) Create Tailwind Config File

    npx tailwindcss-cli@latest init

### (6) Set This In [index.css]

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### (7) Install Styled components Library

    npm i --save styled-components

### (8) Install React Router

    npm i react-router-dom

### (9) Install FontAwesome

    npm install --save font-awesome