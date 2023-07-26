# Express js File structure and use Middleware

## directory **structure (directory Name):**

- app
- middleware
- controller
- models
- service
- logs
- util
- error
- public
- db

## root file Name:

- index.js
- .env
- .gitignore
- packages.json

## **Technology setup:**

- express → micro library for node
- dotenv
- cors - (cross-platform enable to client to server)(middleware)
- morgan - logs my all request middleware
- response-time (optional)

## Middleware:

if all property use to same middleware then use = app.use( middlware array )

- CORS
- MORGAN
- express.json()
- response-time
- express.router()

## How to get an express template?

1. Open your terminal (command prompt, PowerShell, or terminal emulator).
2. Navigate to the directory where you want to clone the repository. You can use the **`cd`** command to change directories. For example:
    
    ```bash
    
    cd /path/to/your/desired/directory
    
    ```
    
3. Now, enter the following command to clone the repository:
    
    ```bash
    
    git clone https://github.com/rayhanmujumdar/Node_Express_file_structure-_template.git
    
    ```
    
    This will create a new directory called "Node_Express_file_structure-_template" and clone the repository into it.
    
4. After the cloning process is complete, change the directory to the cloned project:
    
    ```bash
    
    cd Node_Express_file_structure-_template
    
    ```
    
5. Finally, open the project in Visual Studio Code using the **`code`** command:
    
    ```bash
    
    code .
    
    ```
    
    This will open the project in Visual Studio Code, allowing you to start working on it immediately.