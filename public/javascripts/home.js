document.addEventListener('DOMContentLoaded', function() {
    // Revenue Chart
    var revenueCtx = document.getElementById('revenueChart').getContext('2d');
    var revenueChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Income',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(10, 77, 60, 0.6)'
            }, {
                label: 'Expenses',
                data: [28, 48, 40, 19, 86, 27],
                backgroundColor: 'rgba(76, 175, 80, 0.6)'
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

    // Performance Chart
    var performanceCtx = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(performanceCtx, {
        type: 'doughnut',
        data: {
            labels: ['View Count', 'Percentage', 'Sales'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

lucide.createIcons();
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});