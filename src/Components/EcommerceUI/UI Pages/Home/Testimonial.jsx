import React from 'react';
import qualitylogo1 from "../Assets/qulitylogo1.png";
import qualitylogo2 from "../Assets/qualitylogo2.png";
import qualitylogo3 from "../Assets/qualitylogo3.png";
import qualitylogo4 from "../Assets/qualitylogo4.png";

const Home9 = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white py-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-32 text-center">
        {/* Quality Guarantee */}
        <div className="flex items-center gap-2">
          <img src={qualitylogo1} alt="Quality Logo" className="w-16 h-16" />
          <div>
            <h3 className="text-lg font-bold">Manage Quality</h3>
            <p className="text-sm">Best Quality Guarantee</p>
          </div>
        </div>

        {/* Win $100 To Shop */}
        <div className="flex  items-center gap-2">
          <img src={qualitylogo2} alt="Shopping Logo" className="w-16 h-16" />
          <div>
          <h3 className="text-lg font-bold">Win $100 To Shop</h3>
          <p className="text-sm">Enter Now</p>

          </div>
        </div>

        {/* Online Support */}
        <div className="flex  items-center gap-2">
          <img src={qualitylogo3} alt="Support Logo" className="w-16 h-16" />
          <div>
          <h3 className="text-lg font-bold">Best Online Support</h3>
          <p className="text-sm">Hour: 10:00AM - 5:00PM</p>

          </div>
        </div>

        {/* Money Guarantee */}
        <div className="flex  items-center gap-2">
          <img src={qualitylogo4} alt="Guarantee Logo" className="w-16 h-16" />
          <div>
          <h3 className="text-lg font-bold">Money Guarantee</h3>
          <p className="text-sm">With A 30 Days</p>
            
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home9;