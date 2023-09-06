pipeline {
    agent {
        docker {
            image 'node:18.17.1-alpine3.18' 
            args '-p 8080:8080' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm install prisma --global'
                sh 'npx prisma migrate deploy'
                sh 'npx prisma generate'
                sh 'npm build' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm install' 
                sh 'npm install prisma --global'
                sh 'npx prisma migrate deploy'
                sh 'npx prisma generate'
            }
        }
    }
}