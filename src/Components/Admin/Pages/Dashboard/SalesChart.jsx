// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const SalesChart = () => {
//   const data = {
//     labels: [
//       '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
//     ],
//     datasets: [
//       {
//         label: 'Sales ($)',
//         data: [
//           120, 150, 170, 200, 250, 180, 220, 210, 190, 240, 230, 280, 300, 270, 350, 370, 400, 420, 450, 480, 500, 520, 540, 560, 580, 600, 620, 650, 670, 700
//         ],
//         borderColor: '#007bff',
//         backgroundColor: 'rgba(0, 123, 255, 0.2)',
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Total Sales in Last 30 Days',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `$${context.raw}`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Days',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Sales ($)',
//         },
//         min: 0,
//       },
//     },
//   };

//   return (
//     <div className="flex flex-wrap mt-8 -mx-4 justify-center">
//       <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-3/4 px-4">
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h5 className="font-semibold text-xl text-gray-700 mb-4 text-center">
//             Total Sales in Last 30 Days
//           </h5>
//           <div className="px-4 py-2">
//             <Line data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesChart;
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const SalesChart = () => {
  const salesData = {
    labels: [
      "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov",
      "01 Dec", "02 Dec", "03 Dec", "04 Dec", "05 Dec", "06 Dec", "07 Dec",
      "08 Dec", "09 Dec", "10 Dec", "11 Dec", "12 Dec", "13 Dec", "14 Dec",
      "15 Dec", "16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec", "21 Dec",
      "22 Dec", "23 Dec"
    ],
    datasets: [
      {
        label: "Total Sales",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        borderColor: "#60A5FA",
        backgroundColor: "#60A5FA",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Total Sales in Last 30 Days</h2>
        <Line data={salesData} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
