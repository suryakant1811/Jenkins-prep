// pipeline {
//     agent any

//     stages {

//         stage('clone repo') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/suryakant1811/Jenkins-prep'
//             }
//         }

//         stage('create docker image') {
//             steps {
//                 sh 'docker build -t suryasuraj/march-ui ./client'
//                 sh 'docker build -t suryasuraj/march-backend ./server'
//             }
//         }

//         stage('push images to dockerhub') {
//             steps {
//                 withCredentials([usernamePassword(
//                     credentialsId: 'dockerhubPass',
//                     usernameVariable: 'DOCKER_USER',
//                     passwordVariable: 'DOCKER_PASS'
//                 )]) {

//                     sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
//                     sh 'docker push suryasuraj/march-ui'
//                     sh 'docker push suryasuraj/march-backend'
//                 }
//             }
//         }

//         stage('deploy code') {
//             steps {
//                 sh 'docker compose down'
//                 sh 'docker compose pull'
//                 sh 'docker compose up -d'
//             }
//         }
//     }
// }

pipeline{

    agent any

    stages{
        stage("test"){
            steps{sh 'echo surya chala'}
        }
        stage("done"){
            steps{  sh 'echo byeeee'}
        }
        stage("complete"){
            steps{ sh 'echo completed successfully' }
        }
        stage("email notification"){
            steps { sh 'echo adding the mail sysytem now' }
        }
    }

   post {

        success {
            emailext(
                subject: "Pipeline Success",
                body: "Pipeline build SUCCESS",
                to: "surajdwivedi644@gmail.com"
            )
        }

        failure {
            emailext(
                subject: "Pipeline Failed",
                body: "Pipeline build FAILED",
                to: "surajdwivedi644@gmail.com"
            )
        }

    }
}
