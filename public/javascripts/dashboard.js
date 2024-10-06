 lucide.createIcons();
        document.getElementById('sidebar-toggle').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
            });
        const ctx = document.getElementById('spendingChart').getContext('2d');
        const spendingChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Milk Products', 'Yorghurt Products', 'Other Dairy Products'],
                datasets: [{
                    label: 'Spending',
                    data: [500, 300, 200],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const pieCtx = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Milk Products', 'Yorghurt Products', 'Other Dairy Products'],
                datasets: [{
                    label: 'Spending Distribution',
                    data: [500, 300, 200],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Vibrant colors for pie chart
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });

        const lineCtx = document.getElementById('lineChart').getContext('2d');
        const lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Monthly Spending',
                    data: [300, 400, 300, 500, 400, 600],
                    fill: false,
                    borderColor: '#4BC0C0',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });