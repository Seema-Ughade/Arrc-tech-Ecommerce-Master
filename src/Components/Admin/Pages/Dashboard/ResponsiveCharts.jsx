// import React from 'react';

// const ResponsiveCharts = () => {
//   return (
//     <div className="flex  gap-4 mt-8">
//       {/* Chart 1 */}
//       <div className="w-full lg:w-1/2 xl:w-1/2 bg-white border border-gray-300 rounded-lg overflow-hidden">
//         <h5 className="bg-gray-100 p-4 font-semibold">Top Referrals</h5>
//         <div className="p-5">
//           <div className="relative h-96">
//             <div id="chartContainer-topReference" className="canvasjs-chart-container relative text-left">
//               {/* Canvas Elements */}
//               <canvas
//                 className="canvasjs-chart-canvas absolute"
//                 width="672"
//                 height="500"
//                 style={{ width: '538px', height: '400px', position: 'absolute' }}
//               ></canvas>
//               <canvas
//                 className="canvasjs-chart-canvas absolute"
//                 width="672"
//                 height="500"
//                 style={{ width: '538px', height: '400px', position: 'absolute', cursor: 'default' }}
//               ></canvas>

//               {/* Toolbar for options */}
//               <div className="canvasjs-chart-toolbar absolute top-1 right-1 border-transparent">
//                 <button
//                   state="menu"
//                   type="button"
//                   title="More Options"
//                   className="bg-white text-black border-none p-2 cursor-pointer outline-none"
//                 >
//                   <img
//                     style={{ height: '95%' }}
//                     src="data:image/png;base64,..."
//                     alt="More Options"
//                   />
//                 </button>
//                 <div
//                   tabIndex="-1"
//                   style={{
//                     position: 'absolute',
//                     userSelect: 'none',
//                     cursor: 'pointer',
//                     right: '0px',
//                     top: '25px',
//                     minWidth: '120px',
//                     outline: '0px',
//                     fontSize: '14px',
//                     fontFamily: 'Arial, Helvetica, sans-serif',
//                     padding: '5px 0px',
//                     textAlign: 'left',
//                     lineHeight: '10px',
//                     backgroundColor: 'white',
//                     boxShadow: 'rgb(136, 136, 136) 2px 2px 10px',
//                     display: 'none',
//                   }}
//                 >
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Print</div>
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Save as JPEG</div>
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Save as PNG</div>
//                 </div>
//               </div>

//               {/* Tooltip for chart */}
//               <div
//                 className="canvasjs-chart-tooltip absolute"
//                 style={{
//                   height: 'auto',
//                   boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 2px 2px',
//                   zIndex: 1000,
//                   pointerEvents: 'none',
//                   display: 'block',
//                   borderRadius: '0px',
//                   left: '19px',
//                   bottom: '-203px',
//                   transition: 'left 0.1s ease-out, bottom 0.1s ease-out',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 'auto',
//                     height: 'auto',
//                     minWidth: '50px',
//                     margin: '0px',
//                     padding: '5px',
//                     fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
//                     fontWeight: 'normal',
//                     fontStyle: 'normal',
//                     fontSize: '14px',
//                     color: 'black',
//                     textShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 1px',
//                     textAlign: 'left',
//                     border: '1px solid rgb(79, 129, 188)',
//                     background: 'rgba(255, 255, 255, 0.9)',
//                     textIndent: '0px',
//                     whiteSpace: 'nowrap',
//                     borderRadius: '0px',
//                     userSelect: 'none',
//                   }}
//                 >
//                   geniusocean.com: <strong> (74.38%)</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chart 2 */}
//       <div className="w-full lg:w-1/2 xl:w-1/2 bg-white border border-gray-300 rounded-lg overflow-hidden">
//         <h5 className="bg-gray-100 p-4 font-semibold">Most Used OS</h5>
//         <div className="p-5">
//           <div className="relative h-96">
//             <div id="chartContainer-os" className="canvasjs-chart-container relative text-left">
//               {/* Canvas Elements */}
//               <canvas
//                 className="canvasjs-chart-canvas absolute"
//                 width="672"
//                 height="500"
//                 style={{ width: '538px', height: '400px', position: 'absolute' }}
//               ></canvas>
//               <canvas
//                 className="canvasjs-chart-canvas absolute"
//                 width="672"
//                 height="500"
//                 style={{ width: '538px', height: '400px', position: 'absolute', cursor: 'default' }}
//               ></canvas>

//               {/* Toolbar for options */}
//               <div className="canvasjs-chart-toolbar absolute top-1 right-1 border-transparent">
//                 <button
//                   state="menu"
//                   type="button"
//                   title="More Options"
//                   className="bg-white text-black border-none p-2 cursor-pointer outline-none"
//                 >
//                   <img
//                     style={{ height: '95%' }}
//                     src="data:image/png;base64,..."
//                     alt="More Options"
//                   />
//                 </button>
//                 <div
//                   tabIndex="-1"
//                   style={{
//                     position: 'absolute',
//                     userSelect: 'none',
//                     cursor: 'pointer',
//                     right: '0px',
//                     top: '25px',
//                     minWidth: '120px',
//                     outline: '0px',
//                     fontSize: '14px',
//                     fontFamily: 'Arial, Helvetica, sans-serif',
//                     padding: '5px 0px',
//                     textAlign: 'left',
//                     lineHeight: '10px',
//                     backgroundColor: 'white',
//                     boxShadow: 'rgb(136, 136, 136) 2px 2px 10px',
//                     display: 'none',
//                   }}
//                 >
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Print</div>
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Save as JPEG</div>
//                   <div style={{ padding: '12px 8px', backgroundColor: 'white', color: 'black' }}>Save as PNG</div>
//                 </div>
//               </div>

//               {/* Tooltip for chart */}
//               <div
//                 className="canvasjs-chart-tooltip absolute"
//                 style={{
//                   height: 'auto',
//                   boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 2px 2px',
//                   zIndex: 1000,
//                   pointerEvents: 'none',
//                   display: 'block',
//                   borderRadius: '0px',
//                   left: '19px',
//                   bottom: '-203px',
//                   transition: 'left 0.1s ease-out, bottom 0.1s ease-out',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 'auto',
//                     height: 'auto',
//                     minWidth: '50px',
//                     margin: '0px',
//                     padding: '5px',
//                     fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
//                     fontWeight: 'normal',
//                     fontStyle: 'normal',
//                     fontSize: '14px',
//                     color: 'black',
//                     textShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 1px',
//                     textAlign: 'left',
//                     border: '1px solid rgb(79, 129, 188)',
//                     background: 'rgba(255, 255, 255, 0.9)',
//                     textIndent: '0px',
//                     whiteSpace: 'nowrap',
//                     borderRadius: '0px',
//                     userSelect: 'none',
//                   }}
//                 >
//                   geniusocean.com: <strong> (74.38%)</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveCharts;
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResponsiveCharts = () => {
  const referralData = {
    labels: [
      "geniusocean.com",
      "127.0.0.1",
      "www.google.com",
      "ntp.msn.com",
      "m.facebook.com",
    ],
    datasets: [
      {
        data: [73.67, 21.8, 1.83, 1.2, 1.5],
        backgroundColor: [
          "#60A5FA",
          "#F87171",
          "#34D399",
          "#A78BFA",
          "#FBBF24",
        ],
        borderWidth: 1,
      },
    ],
  };

  const osData = {
    labels: ["Windows 10", "Unknown OS Platform", "Android", "Mac OS X", "Windows 8.1"],
    datasets: [
      {
        data: [56.81, 28, 6.63, 4.62, 3.94],
        backgroundColor: [
          "#60A5FA",
          "#F87171",
          "#34D399",
          "#A78BFA",
          "#FBBF24",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Top Referrals</h2>
        <Pie data={referralData} />
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Most Used OS</h2>
        <Pie data={osData} />
      </div>
    </div>
  );
};

export default ResponsiveCharts;
