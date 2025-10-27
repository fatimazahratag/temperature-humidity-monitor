let chart;

async function fetchData() {
    try {
        // Latest reading
        const latestRes = await fetch('http://192.168.1.48:8000/api/latest/');

        const latest = await latestRes.json();
        document.getElementById('tempValue').textContent = latest.temperature.toFixed(1) + ' °C';
        document.getElementById('humValue').textContent = latest.humidity.toFixed(1) + ' %';

        // Last 20 readings
const allRes = await fetch('http://192.168.1.48:8000/api/all/');
        const readings = await allRes.json();

        // Statistics
        const temps = readings.map(r => r.temperature);
        const hums = readings.map(r => r.humidity);

        document.getElementById('maxTemp').textContent = Math.max(...temps).toFixed(1) + ' °C';
        document.getElementById('minTemp').textContent = Math.min(...temps).toFixed(1) + ' °C';
        document.getElementById('avgTemp').textContent = (temps.reduce((a,b)=>a+b,0)/temps.length).toFixed(1) + ' °C';

        // Chart
        const labels = readings.map(r => new Date(r.timestamp).toLocaleTimeString()).reverse();
        const tempData = temps.reverse();
        const humData = hums.reverse();

        if (!chart) {
            const ctx = document.getElementById('chart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        { label: 'Temperature (°C)', data: tempData, borderColor: 'red', fill: false },
                        { label: 'Humidity (%)', data: humData, borderColor: 'blue', fill: false }
                    ]
                },
                options: {
                    responsive: true,
                    scales: { y: { beginAtZero: true } }
                }
            });
        } else {
            chart.data.labels = labels;
            chart.data.datasets[0].data = tempData;
            chart.data.datasets[1].data = humData;
            chart.update();
        }

        // Table
        const tableBody = document.getElementById('readingTable');
        tableBody.innerHTML = '';
        readings.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${new Date(r.timestamp).toLocaleString()}</td>
                            <td>${r.temperature.toFixed(1)}</td>
                            <td>${r.humidity.toFixed(1)}</td>`;
            tableBody.appendChild(tr);
        });

    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

// Refresh every 10 seconds
fetchData();
setInterval(fetchData, 10000);
