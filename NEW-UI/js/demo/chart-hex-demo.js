// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
Chart.defaults.global.legend.labels.usePointStyle = true;

// Pie Chart Example
var marksCanvas = document.getElementById("marksChart");

var marksData = {
    labels: ["Score", "Accuracy", "Correct", "Wrong", "Time"],
    datasets: [{
        label: "You",
        backgroundColor: "rgba(32, 201, 166, 0.05)",
        borderColor: "rgba(32, 201, 166, 0.6)",
        data: [65, 80, 55, 15, 81]
    }, {
        label: "Topper",
        backgroundColor: "rgba(231, 74, 59, 0.05)",
        borderColor: "rgba(231, 74, 59, 0.6)",
        data: [82, 90, 70, 12, 100]
    }, {
        label: "Average",
        backgroundColor: "rgba(60, 91, 246, 0.05)",
        borderColor: "rgba(60, 91, 246, 0.6)",
        data: [77, 75, 60, 10, 90]
    }]
};


var radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                suggestedMax: 100,
            }
        },
        maintainAspectRatio: false,

        legend: {
            display: true,
            position: 'bottom',
            usePointStyle: true
                // fullWidth: false
        }
    },
});


// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#858796';

// // Pie Chart Example
// var marksCanvas = document.getElementById("marksChart");

// var marksData = {
//     labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
//     datasets: [{
//         label: "Student A",
//         backgroundColor: "rgba(200,0,0,0.2)",
//         data: [65, 75, 70, 80, 60, 80]
//     }, {
//         label: "Student B",
//         backgroundColor: "rgba(0,0,200,0.2)",
//         data: [54, 65, 60, 70, 70, 75]
//     }]
// };


// var radarChart = new Chart(marksCanvas, {
//     type: 'radar',
//     data: marksData,
//     options: {
//         maintainAspectRatio: false,
//         tooltips: {
//             backgroundColor: "rgb(255,255,255)",
//             bodyFontColor: "#858796",
//             borderColor: '#dddfeb',
//             borderWidth: 1,
//             xPadding: 15,
//             yPadding: 15,
//             displayColors: false,
//             caretPadding: 10,
//         },
//         legend: {
//             display: true
//         },
//         cutoutPercentage: 100,
//     },
// });