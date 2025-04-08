import React, { useEffect, useState } from 'react';
import imgsr from '../assets/beef-tacos.jpg';

const ModelForCard = ({ handleModelX, handleRemoveCard }) => {
  const [proVal, setProVal] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProVal((prevVal) => {
        if (prevVal + 10 >= 700) {
          clearInterval(interval);
          handleModelX()
          return 700;
        }
        return prevVal + 10;
      });
    }, 100);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.6px] border border-white/30 flex items-center justify-center">
      <div className="px-4 border bg-pink-800 w-[350px] overflow-y-auto h-[300px] rounded-md py-3">
        <div className="flex  justify-between">
          <h3 className="text-white">List Of Data</h3>
          <button className="border p-1 rounded-full text-white" onClick={handleModelX}>
            X
          </button>
        </div>



        <div className="mt-4">
          <h1>Deleting data.....</h1>
          <progress value={proVal} max={700} className="w-full h-4 bg-gray-300 rounded-md" />
        </div>




        <div>

          {/* {Listdata && Listdata.map((item, index) => (
            <div key={index} className="text-white mt-2">
              <p>{item.name}</p> 
            </div>
          ))} */}
          <button className='px-3 py-1 border border-black' onClick={() => { handleRemoveCard(false);  handleModelX()}
          }>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModelForCard;
