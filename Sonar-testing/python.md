# Step 1: Connect to Ubuntu Server

# Step 2: Update and Install Required Software
Update System Package List
```bash
sudo apt update
```

Install Git (if not already installed)
git --version
```bash
sudo apt install git
```


Install Python and pip
```bash
sudo apt install python3 python3-pip
```


# Step 3: Clone and Prepare Python Project
Clone Your GitHub Repository
```bash
git clone https://github.com/Ai-TechNov/example-voting-app.git
```


Navigate to Python Project Folder
```bash
cd example-voting-app/vote/
```

Set Up Virtual Environment
```bash
sudo apt install python3-venv
python3 -m venv venv
source venv/bin/activate
```


Install Dependencies (if requirements.txt exists)
```bash
pip install -r requirements.txt
```


# Step 4: Install and Start SonarQube
Download SonarQube
```bash
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-6.7.7.zip
```


Install Unzip Utility
```bash
sudo apt install unzip
```


Extract SonarQube Archive
```bash
unzip sonarqube-6.7.7.zip
```


Navigate to the SonarQube Binaries Directory
```bash
cd sonarqube-6.7.7/bin/linux-x86-64/
```


Start the SonarQube Server
```bash
./sonar.sh start
```

Check the Status
```bash
./sonar.sh status
```


Use cd .. to return to your base directory when finished.

# Step 5: Access SonarQube Web Interface
In your browser, go to:
```bash
http://3.85.118.219:9000/
```


Default Login Credentials
Username: admin
Password: admin

# Step 6: Analyze Python Code with SonarScanner
Install Java (if not already installed)
```bash
sudo apt install openjdk-11-jre-headless
```


Install SonarScanner
```bash
curl -O https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856-linux.zip
unzip sonar-scanner-cli-4.8.0.2856-linux.zip
sudo mv sonar-scanner-4.8.0.2856-linux /opt/sonar-scanner
```

Add SonarScanner to PATH
```bash
echo 'export PATH=$PATH:/opt/sonar-scanner/bin' >> ~/.bashrc
source ~/.bashrc
```


# Step 7: Run Sonar Analysis on Python Project
SonarQube will provide you with a command after project setup. It will look like this:
```bash
sonar-scanner \
  -Dsonar.projectKey=python \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://3.85.118.219:9000 \
  -Dsonar.login=b07b580b495569b149249672fe15c05ce714ecdd
```
Run this command from within your Python project directory (Build-Tasks/Python-code/)


✅ Step 8: View Results in SonarQube Dashboard
Go back to the browser
Refresh the SonarQube page
You should now see your Python project listed

Click it to view:
Bugs
Vulnerabilities
Code smells
