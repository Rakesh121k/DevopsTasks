SonarQube Testing of Java(Two-Server Setup)

##  Goal  
Set up ** two separate servers**:  
-  ** Build Server**: for compiling code and running SonarQube analysis  
-  ** SonarQube Server**: for hosting SonarQube and viewing results  

Test static analysis using SonarQube for Java, JavaScript, and Python projects.

---

##  1. SonarQube Server Setup

###  OS Info  
```bash
# ubuntu@sonarqube:
```

### 📦 Install Prerequisites  
```bash
sudo apt update -y
sudo apt install -y unzip
sudo apt install openjdk-17-jre-headless -y
```

### 📥 Download and Extract SonarQube  
```bash
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-6.7.7.zip
unzip sonarqube-6.7.7.zip
```

###  Start SonarQube  
```bash
cd /sonarqube-6.7.7/bin/linux-x86-64
./sonar.sh start
./sonar.sh status
```

✅ Expected Output:
```
Starting SonarQube...
Started SonarQube.
SonarQube is running (PID)
```

###  Open SonarQube in Browser  
```bash
curl ifconfig.me
# Output: 54.167.116.111
```

Access SonarQube at:  
**http://54.167.116.111:9000**  
Login: `admin / admin`
---

##  2. Configure SonarQube Projects (Web UI)

For each language (Java / JS / Python):

Go to **Projects** → **Create Project** 


choose **Local project** 


give **Required details** 

Select **Use global settings**, then choose **Locally**

Choose **Locally** 
 Enter:
   - Project key (e.g., `java`, `js`, or `python`)
   - Project 


Generate a token:
   - Click **Generate** → **Continue**


In 2. choose **the package/code** and **copy the code**
  # In Java-build server after build, compiling and packaging, for results we can see in sonarqube server like this as 

✅ Output will show analysis and upload to SonarQube.

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/b84af356-3f1f-4dda-92b4-33298619cf69" />

<img width="960" alt="Image" src="https://github.com/user-attachments/assets/cca1f93a-20ce-4480-bd28-a46ce6be1722" />

