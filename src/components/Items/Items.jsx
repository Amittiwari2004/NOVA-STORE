import React from 'react'

const Items = (props) => {
  return (
    <div className="md:col-span-1 p-4 bg-black rounded-lg">
    {/* Product Image */}
    <div className="mb-4">
      <img
        src={props.image}
        alt="Product Image"
        className="mx-auto max-w-full"
      />
    </div>

    {/* Product Details */}
    <div className="md:w-full flex flex-col items-center">
      <h3 className="text-white text-2xl font-bold mb-2 text-center ml-9 ">
       {props.name}
      </h3>
      <p className="text-gray-400 mb-4 text-center mr-10">
        {props.description}
      </p>
      <div className="flex items-center justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Buy Now
        </button>
        <span className="text-white ml-4">{`$ ${props.price} USD`}</span>
      </div>
    </div>
  </div>
  )
}

export default Items