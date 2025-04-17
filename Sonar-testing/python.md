# Step 1: Connect to Ubuntu Server
🔸 Update Ubuntu
sudo apt update && sudo apt upgrade -y

🔸 Install Java (required for SonarQube)
sudo apt install openjdk-17-jdk -y
java -version
You must see something like openjdk version "17".

# STEP 2: Install SonarQube Server

🔸 Create SonarQube user
sudo adduser --system --no-create-home --group --disabled-login sonarqube
🔸 Download and extract SonarQube

cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.4.1.88267.zip
sudo apt install unzip -y
sudo unzip sonarqube-10.4.1.88267.zip
sudo mv sonarqube-10.4.1.88267 sonarqube
sudo chown -R sonarqube:sonarqube sonarqube
🔸 Start SonarQube

cd /opt/sonarqube/bin/linux-x86-64
sudo ./sonar.sh start

Now open browser and visit: http://<your-server-ip>:9000  

# STEP 3: Install SonarScanner
🔸 Download and install

cd /opt
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
unzip sonar-scanner-cli-5.0.1.3006-linux.zip
mv sonar-scanner-5.0.1.3006-linux sonar-scanner

🔸 Add to PATH

echo 'export PATH=$PATH:/opt/sonar-scanner/bin'
export SONAR_TOKEN=sqp_72ed6a8e3316d1122f1d45ddb0632941541bf041
sonar-scanner -Dsonar.token=sqp_72ed6a8e3316d1122f1d45ddb0632941541bf041
 
source ~/.bashrc

🔸 Test installation

sonar-scanner -v

# Step 4: Access SonarQube Web Interface
In your browser, go to:
```bash
http://107.20.12.96:9000
Default login: admin / admin (you’ll be asked to change the password)

```
 # Step 5: Add Unit Tests and Coverage
 
sudo apt install python3-pip
sudo apt install python3-pytest
  
# step 6 : clone the code from Git Repository

git clone https://github.com/Rakesh121k/sample-python-codedeploy.git
cd sample-python-codedeploy/

# In sample-python-codedeploy we added a file called sonar-project.properties
and added this content

sonar.projectKey=sample-python-code
sonar.projectName=Sample Python Code
sonar.projectVersion=1.0
sonar.sources=src
#sonar.tests=tests
sonar.language=py
sonar.sourceEncoding=UTF-8
sonar.python.coverage.reportPaths=coverage.xml
sonar.host.url=http://107.20.12.96:9000
sonar.token=sqp_f9c3fb3f7dc4cacbace465d28f154565a308c66a



# Step 6: Run Sonar Analysis on Python Project

SonarQube will provide you with a command after project setup. It will look like this:
```bash
sonar-scanner \
  -Dsonar.projectKey=sample-python-cde \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://107.20.12.96:9000
```
Run this command from within your Python project directory (Build-Tasks/Python-code/)


# Step 7: View Results in SonarQube Dashboard
Go back to the browser
Refresh the SonarQube page
You should now see your Python project listed

Click it to view:
Bugs
Vulnerabilities
Code smells

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/c9b1b273-c9b8-4a5b-be37-62aa57190338" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/fe6eca49-bf7c-4665-bb15-124aee9aeed2" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/1417aa5a-9da1-4d7a-9079-e1a394c713f1" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/e395d9b3-8304-45cd-8b95-5b48e8e40907" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/782f0135-e915-4287-be44-23bcee471b21" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/9cc2bb40-c724-43d6-aa40-8b78778a74a3" />

