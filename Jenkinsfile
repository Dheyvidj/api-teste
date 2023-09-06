pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Clona o repositório Git
                checkout scm
            }
        }
        
        stage('Deploy') {
            steps {
                // Execute comandos de deploy aqui (ex: Kubernetes, Docker Compose, etc.)
                sh 'docker-compose up -d'
            }
        }
    }
}
