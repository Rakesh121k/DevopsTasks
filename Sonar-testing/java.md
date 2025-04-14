# Step 1: Connect to Ubuntu Server

# Step 2: Update and Install Required Software
Update System Packages
```bash
sudo apt update
```
  
Check Git Installation
```bash
git --version
```
  
If Git is not installed, install it using:
```bash
sudo apt install git
```

Install Java (JRE)
```bash
sudo apt install openjdk-11-jre-headless
```

Install Maven
```bash
sudo apt install maven
```


# Step 3: Clone and Build Java Project
Clone Git Repository
```bash
git clone https://github.com/Rishitha2707/Build-Tasks.git
```

Navigate to Java Project Directory
```bash
cd Build-Tasks/Java-code/
```


Build the Project with Maven
```bash
mvn package
```
This command compiles the code and builds a .jar file using Maven.

# Step 4: Install and Setup SonarQube
Download SonarQube (v6.7.7)
```bash
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-6.7.7.zip
```


List Directory to Confirm Download
```bash
ls
```


Install unzip if not already available
```bash
sudo apt install unzip
```


Extract the SonarQube Archive
```bash
unzip sonarqube-6.7.7.zip
```


Navigate to SonarQube Binaries
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


# Step 5: Access SonarQube Web Interface
Open a browser and navigate to:
```bash
http://<your-server-ip>:9000/
http://3.85.118.219:9000/
```


Default SonarQube Credentials:
Username: admin
Password: admin



# Step 6: Configure and Run Analysis
After login, it will prompt you to create a new project.
Fill in the project name, language (Java), and operating system (Linux).
It will generate:
1.A project key
2.A token
3.A Maven command like this:
```bash
mvn sonar:sonar \
  -Dsonar.host.url=http://100.26.59.12:9000 \
  -Dsonar.login=0a990aa3bd0ddd0ffc6c01b7d3cad7559b1dd27c
```


Run the command in the Java project directory (Java-code/) where pom.xml is present.

✅ Step 7: View Results in SonarQube Dashboard
Go back to the browser and refresh the SonarQube project page.
You will now see:
1.Project name
2.Code quality metrics
3.Bugs, vulnerabilities, and code smells

