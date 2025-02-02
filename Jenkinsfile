pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/bgsharath/nodebackendPrisma.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t cicd_app_jen:latest .'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'docker run cicd_app_jen:latest npm test'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        sh 'docker tag cicd_app_jen:latest sharathbg/cicd_app_jen:latest'
                        sh 'docker push sharathbg/cicd_app_jen:latest'
                    }
                }
            }
        }
        // stage('Deploy to EC2') {
        //     steps {
        //         sshagent(['ec2-ssh-key']) {
        //             sh """
        //             ssh -o StrictHostKeyChecking=no ec2-user@your-ec2-instance 'docker pull sharathbg/my-app:latest && docker run -d -p 80:3000 my-dockerhub-username/my-app:latest'
        //             """
        //         }
        //     }
        // }
    }
}
