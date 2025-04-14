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
sudo apt install openjdk-11-jre-headless
```


Install Node.js and NPM
```bash
sudo apt install npm
```


# Step 3: Clone and Build JavaScript Project
Clone the Repository
```bash
git clone https://github.com/Rishitha2707/Build-Tasks.git
```


Navigate to JavaScript Project Directory
```bash
cd Build-Tasks/JS-code/
```

Install Project Dependencies
```bash
npm install
```

Build the Project
```bash
npm run build
```
This compiles or bundles the JavaScript code depending on the project setup (e.g., Webpack or other build tools).


# Step 4: Install and Set Up SonarQube
Download SonarQube
```bash
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-6.7.7.zip
```

List the Directory to Confirm the Download
```bash
ls
```

Install Unzip Utility
```bash
sudo apt install unzip
```


Extract SonarQube
```bash
unzip sonarqube-6.7.7.zip
```


Navigate to SonarQube Binary Folder
```bash
cd sonarqube-6.7.7/bin/linux-x86-64/
```

Start SonarQube Server
```bash
./sonar.sh start
```


Check SonarQube Status
```bash
./sonar.sh status
```


Use cd .. repeatedly to return to your home or project directory after setup.


# Step 5: Access SonarQube in Browser
Open your web browser and go to:
```bash
http://3.85.118.219:9000/
http://<ip-address>:9000/
```


Default SonarQube Credentials:
Username: admin
Password: admin

Upon first login, SonarQube will prompt you to:
Change the password
Create a new project
Select language (JavaScript), OS, and CI method (choose "Manually")


# Step 6: Analyze Project with SonarScanner
Install SonarScanner
SonarScanner isn't included by default — install it with:
```bash
sudo apt install unzip curl
curl -O https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856-linux.zip
unzip sonar-scanner-cli-4.8.0.2856-linux.zip
sudo mv sonar-scanner-4.8.0.2856-linux /opt/sonar-scanner
```


Add it to your path:
```bash
echo 'export PATH=$PATH:/opt/sonar-scanner/bin' >> ~/.bashrc
source ~/.bashrc
```


Run SonarScanner with Token (from UI)
Paste the command provided by SonarQube after project creation:
```bash
sonar-scanner \
  -Dsonar.projectKey=js \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://3.85.118.219:9000 \
  -Dsonar.login=b07b580b495569b149249672fe15c05ce714ecdd
```


✅ Step 7: View Code Quality Report
Return to the SonarQube browser tab.
Refresh the page.

You will now see the project listed.

Click on it to explore:
Bugs
Code Smells
Duplications
Maintainability metrics

