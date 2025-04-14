
#  SonarQube Testing of Java, JS, and Python Code (Two-Server Setup)

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


---

##  3. Build Server Setup

###  Install General Prerequisites  
```bash
apt update -y
apt install git -y
apt install openjdk-17-jre-headless -y
apt install maven -y
apt install npm -y
```

---

##  JavaScript Project Analysis (NPM + SonarScanner)

###   Clone JS Project and Setup
```bash
git clone  git clone https://github.com/Rakesh121k/newmewjavascript.git
cd newmewjavascript/
mvn package
```
```bash
root@ip-172-31-26-213:~/Documentation/java_code# ll
total 200
drwxrwxr-x   7 ubuntu ubuntu   4096 Apr 14 05:27 ./
drwxr-x---   9 ubuntu ubuntu   4096 Apr 14 05:26 ../
-rw-rw-r--   1 ubuntu ubuntu    526 Apr 14 05:26 .eslintrc.cjs
drwxrwxr-x   8 ubuntu ubuntu   4096 Apr 14 05:26 .git/
-rw-rw-r--   1 ubuntu ubuntu    253 Apr 14 05:26 .gitignore
-rw-rw-r--   1 ubuntu ubuntu    451 Apr 14 05:26 README.md
drwxrwxr-x   3 ubuntu ubuntu   4096 Apr 14 05:27 dist/
-rw-rw-r--   1 ubuntu ubuntu    957 Apr 14 05:26 index.html
drwxrwxr-x 215 ubuntu ubuntu  12288 Apr 14 05:27 node_modules/
-rw-rw-r--   1 ubuntu ubuntu 142499 Apr 14 05:27 package-lock.json
-rw-rw-r--   1 ubuntu ubuntu    651 Apr 14 05:27 package.json
drwxrwxr-x   2 ubuntu ubuntu   4096 Apr 14 05:26 public/
drwxrwxr-x   4 ubuntu ubuntu   4096 Apr 14 05:26 src/
-rw-rw-r--   1 ubuntu ubuntu    163 Apr 14 05:26 vite.config.js


```


###  Run SonarQube Analysis  
```bash
mvn clean verify sonar:sonar \
 sonar-scanner \
  -Dsonar.projectKey=newmew-project \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://54.167.116.111:9000 \
  -Dsonar.login=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```





###  Create `sonar-project.properties`
```bash
vi sonar-project.properties
```

Paste the following:
```properties
sonar.projectKey=js
sonar.projectName=js
sonar.projectVersion=1.0
sonar.sources=.
sonar.host.url=http://18.232.140.167:9000
sonar.login=sqp_ff83de42e0c3931f39f99357a83f4c0fa98efbc6
```

###  Run SonarQube Scanner  
```bash
sonar-scanner
```

✅ Results will be uploaded to the SonarQube server.

---

##  Python Project Analysis

###  Prepare and Analyze Python Project  
```bash
cd python_code/
```

```bash

root@ip-172-31-26-213:~/Documentation/python_code# ll
total 20
drwxr-xr-x 3 root root 4096 Apr 13 09:33 ./
drwxr-xr-x 6 root root 4096 Apr 13 09:33 ../
drwxr-xr-x 4 root root 4096 Apr 13 09:33 app/
-rw-r--r-- 1 root root 6514 Apr 13 09:33 readme.md

```

![Image](https://github.com/user-attachments/assets/1d6028ec-03ca-4516-a4d6-e84161a72b5a)

###  Run SonarQube Scanner  
```bash
sonar-scanner \
  -Dsonar.projectKey=python \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://44.202.193.53:9000 \
  -Dsonar.token=sqp_e36b7c7b5af01a866631fd7a9dff62cf5b0c3c59
```

```bash
[INFO]  ScannerEngine: Analysis report compressed in 1475ms, zip size=11.1 MB
[INFO]  ScannerEngine: Analysis report uploaded in 160ms
[INFO]  ScannerEngine: ANALYSIS SUCCESSFUL, you can find the results at: http://18.232.140.167:9000/dashboard?id=java-1
[INFO]  ScannerEngine: Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
[INFO]  ScannerEngine: More about the report processing at http://18.232.140.167:9000/api/ce/task?id=d0ce00cc-7031-4b90-bcfb-c43b5f087224
[INFO]  ScannerEngine: Analysis total time: 1:19.266 s
[INFO]  ScannerEngine: SonarScanner Engine completed successfully
```



✅ Python code analysis will appear in the SonarQube dashboard.

![Image](https://github.com/user-attachments/assets/c56485aa-1c96-434c-8cf0-68e4f8a183ac)

---

##  4. View Results in SonarQube

Open browser → http://18.232.140.167:9000 → Select your **project dashboard**

✔️ Review for each project:
- Code smells
- Bugs
- Vulnerabilities
- Test coverage (if applicable)

---

## ✅ Summary

| Language | Build Tool      | Analysis Command                                      |
|----------|------------------|------------------------------------------------------|
| Java     | Maven            | `mvn clean verify sonar:sonar ...`                  |
| JS       | NPM + Scanner    | `sonar-scanner` with `sonar-project.properties`     |
| Python   | Sonar Scanner    | `sonar-scanner -Dsonar.projectKey=...`              |

📡 All results are published to: **http://44.202.193.53:9000**

![Image](https://github.com/user-attachments/assets/e3216177-b412-47d8-9d1c-497fa4a2726a)
