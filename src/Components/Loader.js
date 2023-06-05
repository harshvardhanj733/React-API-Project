import React from 'react'

function Loader() {
    return (
        <div>
            <div className="spinner-grow flex text-[#1D7874] mx-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
