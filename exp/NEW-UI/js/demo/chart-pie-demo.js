// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
Chart.defaults.global.legend.labels.usePointStyle = true;

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Correct", "Wrong", "Unattempted"],
        datasets: [{
            data: [24, 6, 12],
            backgroundColor: ['rgba(28, 200, 138, 0.75)', 'rgba(231, 74, 59, 0.75)', 'rgba(133, 135, 150, 0.75)'],
            borderColor: ['rgba(28, 200, 138, 0.9)', 'rgba(231, 74, 59, 0.9)', 'rgba(133, 135, 150, 0.9)'],
            hoverBackgroundColor: ['rgba(28, 200, 138, 0.9)', 'rgba(231, 74, 59, 0.9)', 'rgba(133, 135, 150, 0.9)'],
            hoverBorderColor: ['rgba(28, 200, 138)', 'rgba(231, 74, 59)', 'rgba(133, 135, 150)'],
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: true,
            position: 'bottom',
            usePointStyle: true
        },
        cutoutPercentage: 70,
    },
});