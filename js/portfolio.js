const graph01 = $("#graph01");
const graph02 = $("#graph02");
const graph03 = $("#graph03");

var firstFunding = {
  label: "1차 펀딩",
  data: [
    8920000, 2100000, 1700000, 1050000, 1980000, 1100000, 1100000, 850000,
    950000, 900000, 1050000, 980000, 890000, 1830000, 980000, 1089000, 830000,
    910000, 1850000, 4800000,
  ],
  backgroundColor: ["rgba(75, 192, 192, 0.5)"],
  borderColor: ["rgba(75, 192, 192, 1)"],
  hoverBackgroundColor: ["rgba(75, 192, 192, 1)"],
  // borderWidth: 1,
};

var secondFunding = {
  label: "2차 펀딩",
  data: [
    10920000, 4100000, 3700000, 2050000, 1980000, 2100000, 1800000, 1850000,
    950000, 900000, 1050000, 980000, 1890000, 1830000, 980000, 1100000, 1830000,
    1910000, 1850000, 8395000,
  ],
  backgroundColor: ["rgba(54, 162, 235, 0.5)"],
  borderColor: ["rgba(54, 162, 235, 1)"],
  hoverBackgroundColor: ["rgba(54, 162, 235, 1)"],
  // borderWidth: 1,
};

var thirdFunding = {
  label: "3차 펀딩",
  data: [
    12260000, 1072000, 3100000, 2350000, 2200000, 2800000, 1820000, 1020000,
    910000, 750000, 1380000, 1580000, 1490000, 1280000, 1800000, 1900000,
    2030000, 3010000, 2550000, 9195000,
  ],
  backgroundColor: ["rgba(255, 206, 86, 0.5)"],
  borderColor: ["rgba(255, 206, 86, 1)"],
  hoverBackgroundColor: ["rgba(255, 206, 86, 1)"],
  // borderWidth: 1,
};

const myChart01 = new Chart(graph01, {
  data: {
    labels: ["Before", "After"],
    datasets: [
      {
        type: "bar",
        label: "일 평균 구매자수",
        yAxisID: "y-left",
        data: [66.49, 450.61],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        hoverBackgroundColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "ROAS",
        yAxisID: "y-right",
        data: [198, 373],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        hoverBackgroundColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: false,
          text: "X Axis Title",
        },
      },
      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "일 평균 구매자수",
        },
        grid: {
          display: false,
        },
      },
      "y-right": {
        beginAtZero: true,
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "ROAS",
        },
        grid: {
          display: false,
        },
      },
    },
  },
});

const myChart02 = new Chart(graph02, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    datasets: [firstFunding, secondFunding, thirdFunding],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});

const myCahrt03 = new Chart(graph03, {
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
    ],
    datasets: [
      {
        type: "bar",
        label: "전환(매체)",
        yAxisID: "y-left",
        data: [
          0, 0, 0, 0, 0, 0, 8, 8, 2, 3, 2, 13, 15, 6, 19, 10, 15, 33, 40, 31,
          18,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.5)", // 초
        borderColor: "rgb(54, 162, 235)",
        hoverBackgroundColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "전환(GA)",
        yAxisID: "y-left",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 11, 4, 12, 30, 37, 0, 0,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        hoverBackgroundColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "전환(ADM)",
        yAxisID: "y-left",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 7, 4, 7, 14, 6, 16, 31, 35, 29, 18,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        hoverBackgroundColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "CPA-adm",
        yAxisID: "y-right",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 441188, 259939, 247859, 156625, 201515,
          731502, 96874, 223401, 78846, 42137, 51365, 59575, 47792,
        ],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgb(153, 102, 255)",
        hoverBackgroundColor: "rgb(153, 102, 255)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
  scales: {
    x: {
      title: {
        display: false,
        text: "X Axis Title",
      },
    },
    "y-left": {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "전환",
      },
      grid: {
        display: false,
      },
    },
    "y-right": {
      beginAtZero: true,
      type: "linear",
      position: "right",
      title: {
        display: true,
        text: "CPA-adm",
      },
      grid: {
        display: false,
      },
    },
  },
});

const myChart04 = new Chart(graph04, {
  data: {
    labels: Array(20)
      .fill()
      .map((v, i) => i + 1),
    datasets: [
      {
        type: "bar",
        label: "전환",
        yAxisID: "y-left",
        data: [
          150, 140, 170, 125, 156, 153, 126, 175, 168, 132, 144, 135, 156, 215,
          321, 251, 351, 415, 574, 521,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        hoverBackgroundColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "CPA",
        yAxisID: "y-right",
        data: [
          13151, 14500, 15200, 13100, 16010, 12510, 13210, 14500, 12100, 13050,
          11500, 12510, 10150, 13210, 10100, 12100, 10010, 12110, 11200, 10010,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        hoverBackgroundColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: false,
          text: "X Axis Title",
        },
      },
      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "전환",
        },
        grid: {
          display: false,
        },
      },
      "y-right": {
        beginAtZero: true,
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "CPA",
        },
        grid: {
          display: false,
        },
      },
    },
  },
});
