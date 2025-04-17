import React from 'react';

const RemoveButton = ({ className,handleModelX, removeListCart }) => {
    function handleClick() {
        handleModelX(true)
        console.log(className)
    }
    return (
        <div>
            <button
                className="px-2 mb-2 bg-red-800 text-white font-bold border border-b-2"
                onClick={handleClick}
            >
                Remove
            </button>
        </div>
    );
};

export default RemoveButton;
