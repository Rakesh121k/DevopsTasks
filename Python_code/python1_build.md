
# **Deploy Python Flask App with Gunicorn on Ubuntu**

## **Prerequisites**

- ubuntu instance running
- Root/sudo access
- Python 3 and pip
- Git installed
- Flask app files with `requirements.txt`

---

## **1. Switch to Root and Update the System**

```bash
sudo -i
apt update -y
```

---

## **2. Check and Install Python3**

Check if Python 3 is already installed:

```bash
 python3
```

If not installed:

```bash
sudo apt install python3 -y
```

---

## **3. Install Required Packages**

```bash
apt install git -y
apt install python3-pip -y
```

---

## **4. Clone or Navigate to Flask App Directory**

Navigate to your Flask app directory:

```bash
git clone <https://github.com/Rakesh121k/sample-python-codedeploy.git>
cd sample-python-codedeploy.git
```

---

## **5. Install Python Dependencies**

Install required packages:

```bash
pip3 install -r requirements.txt
pip3 install flask
sudo apt install pip3-nose
sudo apt install pip3-coverage
pip3 install gunicorn
```

---

## **6. Create and Activate Virtual Environment**

Create a virtual environment under the ec2-user home directory
The following command creates the app directory with the virtual environment inside of it. You can change my_app to another name.
If you change my_app, then reference the new name in the remaining resolution steps:

```bash
python3 -m venv myenv

```

To activate the environment, source the activate file in the bin directory under your project directory:

```bash
source myenv/bin/activate
python3 -m venv myenv
source myenv/bin/activate
```
Your shell prompt should change, indicating you're in the virtual environment.

---

## **7. Run Flask App (Test in Dev Mode)**

Test the Flask app:

```bash
python3 application.py
```
you should see:

```bash
(myenv) ubuntu@ip-172-31-84-222:~/sample-python-codedeploy$ python3 application.py
 * Serving Flask app 'application'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://172.31.84.222:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 883-660-229

```

---

## **8. Install and Test Gunicorn**

Gunicorn is a WSGI HTTP server for running Python web apps in production.

What is WSGI?
WSGI (Web Server Gateway Interface) is a standard interface that defines how Python web servers and applications communicate.
It allows Python web applications to be deployed on various web servers without modification, enhancing flexibility and portability.

Install Gunicorn:


```bash
pip3 install gunicorn
```

Run Gunicorn manually to test:

```bash
gunicorn app:application -b 0.0.0.0:8000 --log-file - --access-logfile - --workers 4 --keep-alive 0
```

you should see successful startup logs and incoming requests in real time.

Now, the app is running as a front-end service
We need to convert this as a backend service, by creating a .service file 

---

## **9. Create systemd Service for Flask App**

Create a systemd service file:

```bash
vi /etc/systemd/system/application.service
```

Add the following content:

```ini
[Unit]
Description=Gunicorn instance to serve Flask app
After=network.target

[Service]
User=root
Group=root
WorkingDirectory=/root/sample-python-codedeploy
ExecStart=/root/sample-python-codedeploy/myenv/bin/gunicorn app:application -b 0.0.0.0:80 --log-file - --access-logfile - --workers 4 --keep-alive 0
TimeoutStopSec=90
Restart=always
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

---

## **10. Start and Enable the Flask Service**

Reload systemd:

```bash
systemctl daemon-reload
```

Start the Flask service:

```bash
systemctl start application.service
```

Check service status:

```bash
systemctl status application

Enable the service to start on boot:

```bash
systemctl enable application.service
```

---

## **11. Access the Application**

Open your browser and visit:

Replace `<EC2_PUBLIC_IP>` with your instance's public IP address.
        http://3.83.243.99:8000/

used commands:
    1  apt update -y
    2  apt install git -y
    3  git clone https://github.com/Rakesh121k/sample-python-codedeploy.git
    4  cd sample-python-codedeploy
    5  ll
    6  cat requirements.txt
    7  apt install pip3 -y
    8  pip3
    9  apt install python3-pip -y
   10  pip3 install -r requirements.txt
   11  python3 -m venv my_app/env
   12  source env/bin/activate
   13  ll
   14  python3 -m venv myenv
   15  source myenv/bin/activate
   16  python3 main.py
   17  pip3 install flask
   18  python3 app.py
   19  pip3 install redis
   20  pip3 install gunicorn
   21  python3 app.py
   22  gunicorn app:application -b 0.0.0.0:80 --log-file - --access-logfile - --workers 4 --keep-alive 0
   23  pwd
   24  vi /etc/systemd/system/vote.service
   25  cat /etc/systemd/system/vote.service
   26  systemctl daemon-reload
   27  systemctl start  vote.service
   28  systemctl status  vote.service

```
---

