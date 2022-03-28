// Bar Chart
const departments = ["ACS", "IS", "DATA", "CLOUD", "AI"];

const data = {
  labels: departments,
  datasets: [
    {
      label: "Faculty Flags Count By Department",
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(255, 159, 64, 0.8)",
        "rgba(255, 205, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(54, 162, 235, 0.8)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
      data: [10, 5, 2, 20, 30, 45],
    },
  ],
};

const barConfig = {
  type: "bar",
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const barChart = new Chart(document.getElementById("barChart"), barConfig);

// Pie Chart

const pieData = {
  labels: ["ACS", "IS", "AI", "Other"],
  datasets: [
    {
      label: "Faculty Comments Count By Department",
      data: [300, 50, 100, 500],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 205, 86, 0.8)",
        "rgba(255, 20, 86, 0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};

const pieConfig = {
  type: "pie",
  data: pieData,
};

const pieChart = new Chart(document.getElementById("pieChart"), pieConfig);
