let msgChart;
let wordsChart;
let mediaChart;
let topWordsChart;
let delMsgChart;
let msgLenChart;
let timeChart;
let dateChart;

function graphMessages(result)
{
    let participants = result["participants"];
    let messages = result["wordsObject"]["messages"];
    let total = 0;

    for (let i = 0; i < messages.length; i++) {
        total += messages[i];
    } 

    let displayText = "Includes Media and deleted messages | Total messages : " + total;

    var ctx = $('#msgChart');
    msgChart = new Chart(ctx, {
        type: participants.length > 6 ? 'bar' : 'horizontalBar',
        data: {
            labels: participants,
            datasets: [{
                label: '# of Messages',
                data: messages,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: displayText
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphWords(result) {
    let participants = result["participants"];
    let words = result["wordsObject"]["msgLength"];
    let total = 0;

    for (let i = 0; i < words.length; i++) {
        total += words[i];
    } 

    let displayText = "Total words : " + total;

    var ctx = $('#wordChart');
    wordsChart = new Chart(ctx, {
        type: participants.length > 6 ? 'bar' : 'horizontalBar',
        data: {
            labels: participants,
            datasets: [{
                label: '# of Words',
                data: words,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: displayText
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphMedia(result) {
    let participants = result["participants"];
    let media = result["wordsObject"]["media"];
    let total = 0;

    for (let i = 0; i < media.length; i++) {
        total += media[i];
    }

    let displayText = "Total media : " + total;

    var ctx = $('#mediaChart');
    mediaChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: participants,
            datasets: [{
                label: '# of Media',
                data: media,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: displayText
            }
        }
    });
}

function graphTop10(result) {
    let words = result["topWords"][0];
    let counts = result["topWords"][1];

    let displayText = "Most Used Words of length > 2";

    var ctx = $('#top10Chart');
    topWordsChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: words,
            datasets: [{
                label: 'Times Used: ',
                data: counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: displayText
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphDelMsg(result) {
    let participants = result["participants"];
    let delMsg = result["wordsObject"]["del_msg"];
    let total = 0;

    for (let i = 0; i < delMsg.length; i++) {
        total += delMsg[i];
    }

    let displayText = "Total deleted messages : " + total;

    var ctx = $('#delMsgChart');
    delMsgChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: participants,
            datasets: [{
                label: '# of deleted messages',
                data: delMsg,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: displayText
            }
        }
    });
}

function graphAverage(result) {
    let participants = result["participants"];
    let msg = result["wordsObject"]["messages"];
    let words = result["wordsObject"]["msgLength"];
    
    let average = new Array(participants.length);
    average.fill(0);

    for (let i = 0; i < participants.length; i++) {
        average[i] = Math.round(((words[i]/msg[i]) + Number.EPSILON) * 100) / 100;
    }

    let minVal = Math.min(...average) > 2 ? Math.round(Math.min(...average)) - 2 : 0;

    var ctx = $('#msgLenChart');
    msgLenChart = new Chart(ctx, {
        type: participants.length > 6 ? 'bar' : 'horizontalBar',
        data: {
            labels: participants,
            datasets: [{
                label: 'Average: ',
                data: average,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(138, 43, 226, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(255, 105, 180, 0.2)',
                    'rgba(210, 105, 30, 0.2)',
                    'rgba(251, 9, 158, 0.2)',
                    'rgba(191, 9, 251, 0.2)',
                    'rgba(9, 251, 150, 0.2)',
                    'rgba(251, 215, 9, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(138, 43, 226, 1)',
                    'rgba(127, 255, 0, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(255, 105, 180,1)',
                    'rgba(210, 105, 30, 1)',
                    'rgba(251, 9, 158, 1)',
                    'rgba(191, 9, 251, 1)',
                    'rgba(9, 251, 150, 1)',
                    'rgba(251, 215, 9, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        min: minVal
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphTime(result) {
    let hours = Object.keys(result["timeCount"]);
    let counts = Object.values(result["timeCount"]);

    for (let i = 0; i < hours.length; i++) {
        if(hours[i] > 12)
            hours[i] = (hours[i] - 12) + "PM";
        else
            hours[i] = (hours[i]) + "AM";
    }

    var ctx = $('#timeChart');
    timeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [{
                label: 'Messages: ',
                data: counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    
                ],
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: '# of Messages'
                    }
                }]
            }
        }
    });
}

function graphDate(result) {
    let date = Object.keys(result["dateCount"]);
    let counts = Object.values(result["dateCount"]);

    var ctx = $('#dateChart');
    dateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: 'Messages: ',
                data: counts,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date (MM/DD/YY)'
                    },
                    ticks: {
                        maxTicksLimit: 5
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: '# of Messages'
                    }
                }]
            }
        }
    });
}

function graph(result) {
    graphMessages(result);
    graphWords(result);
    graphMedia(result);
    graphTop10(result);
    graphDelMsg(result);
    graphAverage(result);
    graphTime(result);
    graphDate(result);
}

function destroyCharts() {
    msgChart.destroy();
    wordsChart.destroy();
    mediaChart.destroy();
    topWordsChart.destroy();
    delMsgChart.destroy();
    msgLenChart.destroy();
    timeChart.destroy();
    dateChart.destroy();
}