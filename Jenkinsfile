pipeline {
    agent any

    environment {
        IMAGE_NAME = "maryamsohail123/jenkins"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning GitHub repository..."
                git branch: 'main', url: 'https://github.com/MaryamS5/jenkies.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Logging into Docker Hub and pushing image..."
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                        echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }
    }

    post {
        success {
            echo " Docker image pushed successfully to Docker Hub!"
        }
        failure {
            echo " Build failed — check console output."
        }
    }
}
