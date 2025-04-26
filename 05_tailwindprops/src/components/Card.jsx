import React from 'react'
import img from '../assets/react.svg'
function Card({title,description}) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
            <img
                className="w-full h-40 object-cover rounded-md"
                src={img}
                alt="Card Image"
            />
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-600">
                   {description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Card