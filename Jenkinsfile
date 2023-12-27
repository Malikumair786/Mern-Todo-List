pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    // Build and deploy your MERN stack application
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}