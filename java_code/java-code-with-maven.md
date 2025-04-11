Deploying Java Application on Ubuntu with Maven and Tomcat

Prerequisites:
Make sure you have the following installed:

Java
Maven
Tomcat
Git
1. Log in to the EC2 instance and install required packages
First, connect to your Ubuntu instance and install the necessary packages.

sudo apt update -y
sudo apt install git -y
sudo apt install openjdk-17-jre-headless
sudo apt install maven -y

Check the versions:
# Check Git version
git --version
# Example output: git version 2.43.0

# Check Maven version
mvn --version
# Example output: Apache Maven 3.8.7

# Check Java version
java --version
# Example output: openjdk 17.0.14 2025-01-21
OpenJDK Runtime Environment (build 17.0.14+7-Ubuntu-124.04)
OpenJDK 64-Bit Server VM (build 17.0.14+7-Ubuntu-124.04, mixed mode, sharing)

# git clone https://github.com/Rakesh121k/jenkins-java-project.git
Cloning into 'jenkins-java-project'...
remote: Enumerating objects: 1111, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 1111 (delta 6), reused 5 (delta 5), pack-reused 1103 (from 3)
Receiving objects: 100% (1111/1111), 251.87 KiB | 16.79 MiB/s, done.
Resolving deltas: 100% (217/217), done.


2. Install Tomcat
Next, download and install Tomcat. Visit the Tomcat download page, then copy the link for the desired version.


sudo wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.100/bin/apache-tomcat-9.0.100.zip
sudo tar -xvzf apache-tomcat-9.0.100.zip
Need to start the server
cd bin/
./startup.sh
Using CATALINA_BASE:   /home/ubuntu/apache-tomcat-9.0.104
Using CATALINA_HOME:   /home/ubuntu/apache-tomcat-9.0.104
Using CATALINA_TMPDIR: /home/ubuntu/apache-tomcat-9.0.104/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /home/ubuntu/apache-tomcat-9.0.104/bin/bootstrap.jar:/home/ubuntu/apache-tomcat-9.0.104/bin/tomcat-juli.jar
Using CATALINA_OPTS:
Tomcat started.

# Compiling the code
mvn validate
[INFO] Scanning for projects...
[INFO]
[INFO] --------------------------< in.RAHAM:NETFLIX >--------------------------
[INFO] Building Java Home myweb 1.2.2
[INFO] --------------------------------[ war ]---------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  0.185 s
[INFO] Finished at: 2025-04-10T05:26:15Z
[INFO] ----------------------------------------------

mvn package

[INFO] Packaging webapp
[INFO] Assembling webapp [NETFLIX] in [/home/ubuntu/jenkins-java-project/target/NETFLIX-1.2.2]
[INFO] Processing war project
[INFO] Copying webapp resources [/home/ubuntu/jenkins-java-project/src/main/webapp]
[INFO] Building war: /home/ubuntu/jenkins-java-project/target/NETFLIX-1.2.2.war
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  12.157 s
[INFO] Finished at: 2025-04-10T05:28:03Z
[INFO] -----------------------------------

# After compiling and packaging target file will be cteated
ubuntu@ip-172-31-30-124:~/jenkins-java-project$ ls
pom.xml  src  target

# Opening the port 8080 on ubuntu server to access the Tomcat server


3. Modify Tomcat Configuration Files
Edit tomcat-users.xml to create a user with roles:
cd /apache-tomcat-9.0.100/conf
sudo vi tomcat-users.xml
Uncomment the following lines and set the desired user and password:

  <user username="admin" password="admin" roles="manager-gui"/>
  <user username="tomcat" password="tomcat" roles="manager-script"/>
before Image

After Image

Modify context.xml files to allow external access (not just localhost):
find /opt/apache-tomcat-9.0.100 -name context.xml

# Edit the following files:
vi /opt/apache-tomcat-9.0.100/webapps/host-manager/META-INF/context.xml
vi /opt/apache-tomcat-9.0.100/webapps/manager/META-INF/context.xml
before Image

After Image

  <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow=".*" />
4. Start the Tomcat server
Make sure the Tomcat scripts have the correct permissions and start the server:

#Coping the compiled code to webapps.
ubuntu@ip-172-31-30-124:~/jenkins-java-project/target$ cp -r NETFLIX-1.2.2.war/apache-tomcat-9.0.104/webapps/

http://http://50.17.33.165:8080/NETFLIX-1.2.2/#
Additional Notes:
Ensure that your security group for the EC2 instance allows inbound traffic on port 8080 (or whichever port your Tomcat server is using).
If you encounter any issues, check the Tomcat logs located at /apache-tomcat-9.0.100/logs/.


<img width="960" alt="Image" src="https://github.com/user-attachments/assets/a2480af5-f522-442f-bc62-9d44c258571b" />

