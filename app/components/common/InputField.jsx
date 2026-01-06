import React from 'react'

const InputField = ({ icon, type = 'text', name, placeholder, handleChange, value }) => {
    return (
        <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-600 text-sm">{icon}</span>
            </div>
            <input
                type={type}
                name={name}
                className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none transition-all"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default InputField