# Step 1: Connect to Your Ubuntu Server

# Step 2: Update and Install Required Software
Update System Package Index
```bash
sudo apt update
```

Verify Git Installation
git --version
If Git is not installed, run:
```bash
sudo apt install git
```

Install Java Runtime (Required for SonarQube)
```bash
sudo apt install openjdk-17-jdk -y
```


Install Node.js and NPM
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v

```


# Step 3: Clone and Build JavaScript Project
Clone the Repository
```bash
git clone https://github.com/Rakesh121k/newmewjavascript.git
```


Navigate to JavaScript Project Directory
```bash
cd newmewjavascript/
``

Build the Project
```bash
npm run build
```
This compiles or bundles the JavaScript code depending on the project setup (e.g., Webpack or other build tools).


# Step 4: Install and Set Up SonarQube and sonar scanner

 Create a SonarQube user
bash
''''''
sudo adduser --system --no-create-home --group --disabled-login sonar

# Download and extract SonarQube

bash
''''''
cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.4.1.88267.zip
sudo apt install unzip
sudo unzip sonarqube-10.4.1.88267.zip
sudo mv sonarqube-10.4.1.88267 sonarqube
sudo chown -R sonar:sonar sonarqube

# Start SonarQube
bash
''''''
sudo su - sonar
cd /opt/sonarqube/bin/linux-x86-64/
./sonar.sh start
Then access SonarQube at http://your-server-ip:9000.

#  Install SonarScanner
bash
'''''
cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
sudo unzip sonar-scanner-cli-5.0.1.3006-linux.zip
sudo mv sonar-scanner-5.0.1.3006-linux sonar-scanner
3.1 Configure environment
bash
Copy
Edit
echo 'export PATH=$PATH:/opt/sonar-scanner/bin' >> ~/.bashrc
source ~/.bashrc

# Step 5: Access SonarQube in Browser
Open your web browser and go to:
```bash
http://<ip-address>:9000/
http://107.23.115.168:9000/
```


Default SonarQube Credentials:
Username: admin
Password: admin

Upon first login, SonarQube will prompt you to:
Change the password
Create a new project
Select language (JavaScript), OS, and CI method (choose "Manually")


# Step 6: Analyze Project with sonarqube
Run SonarScanner with Token (from UI)
Paste the command provided by SonarQube after project creation:
```bash
sonar-scanner \
  -Dsonar.projectKey=javascript \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://107.23.115.168:9000 \
  -Dsonar.token=sqp_dc17afe17184f1cea14bd4e53a096c4c252b0a99

```
==> Added a file sonar.properties file in code where package.json and index.html are located.
like
vi  sonar.properties
# Unique key for your project in SonarQube
sonar.projectKey=newmewjavascript

# Project name as it will appear in SonarQube
sonar.projectName=NewMewJavaScript

# Optional: version of your project
sonar.projectVersion=1.0

# The source code directory to analyze
sonar.sources=.

# SonarQube server URL
sonar.host.url=http://107.23.115.168:9000

# Authentication token (replace with your actual token)
sonar.login=sqp_dc17afe17184f1cea14bd4e53a096c4c252b0a99


✅ Step 7: View Code Quality Report
Return to the SonarQube browser tab.
Refresh the page.

You will now see the project listed.

Click on it to explore:
Bugs
Code Smells
Duplications
Maintainability metrics

