pipeline {
   agent any

   tools {
      // Install the Maven version configured as "M3" and add it to the path.
      maven "Mvn 3.3.9"
   }

   stages {
      stage('Build') {
         steps {
            // Get some code from a GitHub repository
            git 'https://github.com/cwiechmann/imagine-api-demo.git'

            // Run Maven on a Unix agent.
            sh "mvn clean exec:java"

            // To run Maven on a Windows agent, use
            // bat "mvn -Dmaven.test.failure.ignore=true clean package"
         }
      }
   }
}
