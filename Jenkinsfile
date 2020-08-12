pipeline {
   agent any

   tools {
      // Install the Maven version configured as "M3" and add it to the path.
      maven "Mvn 3.3.9"
   }

   stages {
      /*stage('Docker image') {
         steps {
            echo 'Starting to build docker image'
            script {
               dockerImage = docker.build("weather-api:${env.BUILD_ID}", "-f api-builder/weather-impl-service/Dockerfile .")
               //customImage.push()
            }
         }
      }*/

      stage('Deploy API') {
         steps {
            // Run Maven on a Unix agent.
            sh "mvn clean exec:java"

            // To run Maven on a Windows agent, use
            // bat "mvn -Dmaven.test.failure.ignore=true clean package"
         }
      }
   }
}
