Deploying AngularJS Application on Ubuntu

Prerequisites
An Ubuntu instance running.
Root or sudo access to the EC2 instance.
npm - (node package manager)
Git
httpd - Apache HTTP Server
Steps
1. Install Node.js , npm and httpd
To run and build an AngularJS application, you need to have Node.js and npm installed. Start by installing Node.js and npm using the following command:

sudo -i
apt update -y
apt install git -y
apt install npm -y
apt install htttpd -y
After the installation completes, verify the versions installed.

This installs the necessary packages including nodejs and npm. After the installation, verify the versions installed:

node -v
npm -v
Example output:

v18.20.6
10.8.2
2. Clone the AngularJS Starter Project
Next, clone the AngularJS application from GitHub:

git clone https://github.com/Rakesh121k/newmewjavascript.git
Change into the project directory:

cd newmewjavascript/
[root@ip-172-31-17-119 AngularJS-starter]# ll
total 184
drwxr-xr-x 5 root root   4096 Apr 10 06:34 ./
drwx------ 5 root root   4096 Apr 10 06:34 ../
-rw-r--r-- 1 root root    526 Apr 10 06:34 .eslintrc.cjs
drwxr-xr-x 8 root root   4096 Apr 10 06:34 .git/
-rw-r--r-- 1 root root    253 Apr 10 06:34 .gitignore
-rw-r--r-- 1 root root    451 Apr 10 06:34 README.md
-rw-r--r-- 1 root root    957 Apr 10 06:34 index.html
-rw-r--r-- 1 root root 143233 Apr 10 06:34 package-lock.json
-rw-r--r-- 1 root root    651 Apr 10 06:34 package.json
drwxr-xr-x 2 root root   4096 Apr 10 06:34 public/
drwxr-xr-x 4 root root   4096 Apr 10 06:34 src/
-rw-r--r-- 1 root root    163 Apr 10 06:34 vite.config.js

3. Install Project Dependencies
Install the required dependencies specified in package.json by running:

Here is how you can update your documentation to include the npm install step, showing the directory structure after the command is run:

Step 4: Install Dependencies
Once you have cloned the repository or set up your project files, the next step is to install all the necessary dependencies for your AngularJS application using npm.

Run the following command:

npm install
This will download and install the required dependencies listed in your package.json file. After running the command, it creates node_modules, you should see output similar to the following:

node_modules: This directory contains all the installed packages required for your AngularJS application. It will have the dependencies listed in the package.json.

Sample Directory Structure:
root@ip-172-31-24-11:~/newmewjavascript# ll
total 196
drwxr-xr-x   6 root root   4096 Apr 10 06:38 ./
drwx------   6 root root   4096 Apr 10 06:38 ../
-rw-r--r--   1 root root    526 Apr 10 06:34 .eslintrc.cjs
drwxr-xr-x   8 root root   4096 Apr 10 06:34 .git/
-rw-r--r--   1 root root    253 Apr 10 06:34 .gitignore
-rw-r--r--   1 root root    451 Apr 10 06:34 README.md
-rw-r--r--   1 root root    957 Apr 10 06:34 index.html
drwxr-xr-x 214 root root  12288 Apr 10 06:39 node_modules/
-rw-r--r--   1 root root 142499 Apr 10 06:39 package-lock.json
-rw-r--r--   1 root root    651 Apr 10 06:39 package.json
drwxr-xr-x   2 root root   4096 Apr 10 06:34 public/
drwxr-xr-x   4 root root   4096 Apr 10 06:34 src/
-rw-r--r--   1 root root    163 Apr 10 06:34 vite.config.js
root@ip-172-31-24-11:~/newmewjavascript#

During the installation, you may receive warnings regarding deprecated AngularJS packages since AngularJS is no longer actively maintained. You can ignore these for now, as the application is still being set up for older AngularJS versions.

5. Fix Vulnerabilities (Optional)
If desired, you can fix vulnerabilities in the dependencies using:

npm audit fix --force
This may update certain dependencies to newer versions and potentially break compatibility in some cases (be cautious when using --force).

6. Build the Application
Build the AngularJS application using Webpack:

npm run build
This command compiles the source code and produces a production-ready build in the dist/ or build directory.

You should now see the following files in the dist/ or build folder:

bundle.js - The compiled JavaScript bundle.
index.html - The entry HTML file.
[root@ip-172-31-17-119 AngularJS-starter]# ll
 total 212
 -rw-r--r--.   1 root root     19 Apr  9 18:44 README.md
 drwxr-xr-x.   3 root root     55 Apr  9 18:44 dist
 drwxr-xr-x. 341 root root  16384 Apr  9 18:45 node_modules
 -rw-r--r--.   1 root root 183845 Apr  9 18:45 package-lock.json
 -rw-r--r--.   1 root root   1088 Apr  9 18:45 package.json
 drwxr-xr-x.   4 root root     66 Apr  9 18:44 src
 -rw-r--r--.   1 root root    322 Apr  9 18:44 tsconfig.json
 -rw-r--r--.   1 root root   1317 Apr  9 18:44 webpack.config.js
 [root@ip-172-31-17-119 AngularJS-starter]# cd dist/
 [root@ip-172-31-17-119 dist]# ll
 total 7476
 -rw-r--r--. 1 root root 7645262 Apr  9 18:45 bundle.js
 drwxr-xr-x. 2 root root      31 Apr  9 18:44 images
 -rw-r--r--. 1 root root    7474 Apr  9 18:44 index.html
7. Install Apache HTTP Server
To serve the built application, you'll use Apache HTTP Server. Install it with:

sudo apt install httpd -y
After the installation completes, verify that the Apache HTTP Server (httpd) is available.

8. Copy Build Files to Apache Directory
Copy the files from the dist/ directory to the Apache web root directory (/var/www/html/):

cp -r * /var/www/html/
This will place all your built files (including index.html and bundle.js) into the appropriate location where Apache can serve them.

9. Restart Apache HTTP/apache2 Server
After copying the files, restart Apache to apply the changes and serve the AngularJS application:

sudo systemctl restart httpd
10. Access the Application
At this point, your AngularJS application should be successfully deployed and accessible through the public IP of your EC2 instance. Open a web browser and navigate to:

http://<EC2_PUBLIC_IP>/ or http://<EC2_PUBLIC_IP>:80
 ex:- http://184.73.136.125/
