// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var marksCanvas = document.getElementById("marksChart");

var marksData = {
    labels: ["Score", "Accuracy", "Correct", "Wrong", "Time"],
    datasets: [{
        label: "Student A",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [65, 80, 55, 15, 100]
    }, {
        label: "Student B",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [82, 90, 70, 12, 110]
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
                max: 100
            }
        },
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
            display: false
        },
        cutoutPercentage: 100,
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