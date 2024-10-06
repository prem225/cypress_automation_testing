pipeline {
    agent any

    environment {
        NODE_ENV = 'production'

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/prem225/cypress_automation_testing.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'NodeJS 16') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'cypress/screenshots/**, cypress/videos/**', allowEmptyArchive: true
                }
            }
        }
    }
}
}