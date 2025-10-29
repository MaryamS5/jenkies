pipeline {
    agent any

    environment {
        // Use the ID you created earlier in Jenkins
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = "maryamsohail123/jenkins"
    }

    stages {
        stage('Pull from GitHub') {
            steps {
                git 'https://github.com/MaryamS5/jenkies.git'  // <-- my  repo
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                    docker push $IMAGE_NAME
                    '''
                }
            }
        }
    }
}
