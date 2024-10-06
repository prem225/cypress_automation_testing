pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        CYPRESS_BASE_URL = 'https://your-app-url.com'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/prem225/cypress_automation_testing.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    nodejs('NodeJS_16') {
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

    post {
        always {
            // Clean up the workspace after the pipeline completes
            cleanWs()
        }
    }
}
