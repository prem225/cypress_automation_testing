pipeline {
    agent any

    tools{
        nodejs('16.20.1')
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the code from the GitHub repository
                git url: 'https://github.com/prem225/cypress_automation_testing.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure NodeJS is set up as a Global Tool in Jenkins and replace with correct installation name
                        sh 'npm install'
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

    post {
        always {
            cleanWs()
        }
    }
}
