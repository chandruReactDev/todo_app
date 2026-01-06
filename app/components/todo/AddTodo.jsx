'use-client';
import Modal from "../Modal"

const AddTodo = ({ isOpen, onClose }) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title='Add Task'
        >
            <>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                placeholder="Enter task title"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="DD/MM/YYYY"
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                                />
                                {/* <span className="absolute right-3 top-2.5 text-gray-400">📅</span> */}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-2">Priority</label>
                            <div className="flex space-x-6">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span className="text-xs text-gray-500">Extreme</span>
                                    <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                    <span className="text-xs text-gray-500">Moderate</span>
                                    <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className="text-xs text-gray-500">Low</span>
                                    <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                                </label>
                            </div>
                        </div>


                        <div className="">
                            <label className="block text-xs font-bold text-gray-700 mb-1">Task Description</label>
                            <textarea
                                placeholder="Start writing here..."
                                className="w-full h-32 border border-gray-300 rounded-md p-3 text-sm focus:ring-1 focus:ring-red-500 outline-none resize-none"
                            ></textarea>
                            {/* <div className="w-48">
                                <label className="block text-xs font-bold text-gray-700 mb-1">Upload Image</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md h-32 flex flex-col items-center justify-center p-2 text-center bg-white">
                                    <span className="text-2xl mb-1">🖼️</span>
                                    <p className="text-[10px] text-gray-400">Drag & Drop files here or</p>
                                    <button className="mt-1 px-3 py-1 border border-gray-300 rounded text-[10px] font-medium text-gray-600 hover:bg-gray-50">Browse</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-10 rounded-lg text-sm transition-colors shadow-lg shadow-orange-200"
                >
                    Done
                </button>
            </>
        </Modal>
    );
}

export default AddTodo;