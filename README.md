Temperature & Humidity Monitor
==============================

Overview
--------
This project is an IoT-based real-time temperature and humidity monitoring system. 
It uses an ESP8266 microcontroller and a DHT11 sensor to collect environmental data and send it to a Django backend. 
The backend provides a dynamic web dashboard showing:

- Current temperature and humidity
- Last 20 readings
- Statistics (Max, Min, Average)
- Graphs and tables for visualization

Ideal for home automation, environmental monitoring, and educational purposes.

Features
--------
- Real-time monitoring of temperature and humidity
- Web dashboard with graphical and tabular views
- Statistics: Max, Min, Avg temperature
- Automatic updates every 10 seconds
- Easy to deploy on local networks

Hardware
--------
- ESP8266 microcontroller
- DHT11 Temperature & Humidity sensor
- WiFi connection

Software
--------
- Django 5.2
- Django REST Framework
- Chart.js for graphing
- HTML/CSS/JavaScript for the dashboard

Installation
------------
1. Clone the repository:
   git clone https://github.com/fatimazahratag/temperature-humidity-monitor.git

2. Navigate to the project folder and create a virtual environment:
   cd temperature-humidity-monitor
   python -m venv .venv

3. Activate the virtual environment:
   - Windows: .\.venv\Scripts\activate
   - Linux/Mac: source .venv/bin/activate

4. Install dependencies:
   pip install -r requirements.txt

5. Apply migrations:
   python manage.py migrate

6. Run the server:
   python manage.py runserver 0.0.0.0:8000

7. Open the dashboard in your browser:
   http://<YOUR_LOCAL_IP>:8000/api/dashboard/

ESP8266 Code
------------
The ESP8266 reads data from the DHT11 sensor and posts JSON data to the Django backend every 20 minutes. 
Make sure to update your WiFi credentials and the server IP address in the Arduino sketch.

Dashboard
---------
- Temperature & Humidity Cards: Shows latest readings
- Statistics Cards: Max, Min, Avg temperature
- Graph: Plots last 20 readings for temperature and humidity
- Table: Lists last 20 readings with timestamps

Contributing
------------
Feel free to fork this repository and submit pull requests to improve the project, e.g., add new sensors, enhance the dashboard, or integrate alerts.

<img width="1919" height="947" alt="Screenshot 2025-10-27 134725" src="https://github.com/user-attachments/assets/16558586-a157-471f-9c11-39f47290ece0" />

