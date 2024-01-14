pipeline {
    agent any

    environment {
        // Specify the Node.js version you want to use
        NODEJS_VERSION = '14.17.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use Node.js environment specified above
                    withEnv(["PATH+NODEJS=${tool 'NodeJS'}"]) {
                        // Install Node.js dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your Node.js tests
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Your deployment steps here
                    // For example, start your Node.js application
                    sh 'npm start'
                }
            }
        }
    }
}
