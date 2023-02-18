import React from 'react'

function AddButton({ setClose }) {
  return (
    <button
      onClick={() => setClose(false)}
      className="p-3 m-5 font-medium text-center text-white bg-red-500 rounded-lg w-36 "
    >
      Add New Pizza
    </button>
  )
}

export default AddButton
