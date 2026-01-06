'use client';

import { useState } from "react";
import AddTodo from '../components/todo/AddTodo'

function Dashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: '⊞' },
        { name: 'Vital Task', icon: '!' },
        { name: 'My Task', icon: '☑' },
        { name: 'Task Categories', icon: '≡' },
        { name: 'Settings', icon: '⚙' },
        { name: 'Help', icon: '?' },
    ];

    const onClose = () => setIsOpen(false);

    const tasks = [
        {
            title: "Attend Nischal's Birthday Party",
            desc: "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]...",
            priority: "Moderate",
            status: "Not Started",
            statusColor: "text-red-500",
            dotColor: "border-red-500",
            img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=100&h=60&fit=crop"
        },
        {
            title: "Landing Page Design for TravelDays",
            desc: "Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]",
            priority: "Moderate",
            status: "In Progress",
            statusColor: "text-blue-500",
            dotColor: "border-blue-500",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=60&fit=crop"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-700">
            {/* Sidebar */}
            <aside className="w-64 bg-red-400 text-white flex flex-col items-center py-8 px-4">
                <div className="mb-8 text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden mb-2 mx-auto">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" alt="Profile" />
                    </div>
                    <h2 className="font-bold text-lg">Sundar Gurung</h2>
                    <p className="text-xs opacity-80">sundargurung360@gmail.com</p>
                </div>

                <nav className="w-full flex-1">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center px-6 py-3 mb-2 rounded-lg transition-colors ${activeTab === item.name ? 'bg-white text-red-400 shadow-lg' : 'hover:bg-red-500'
                                }`}
                        >
                            <span className="mr-4 text-xl">{item.icon}</span>
                            <span className="font-medium text-sm">{item.name}</span>
                        </button>
                    ))}
                </nav>

                <button className="w-full flex items-center px-6 py-3 mt-auto hover:bg-red-500 rounded-lg">
                    <span className="mr-4 text-xl">↪</span>
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-8">
                    <div className="flex items-center gap-8">
                        <h1 className="text-2xl font-bold text-red-400">Dashboard</h1>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search your task here..."
                                className="bg-slate-100 rounded-lg py-2 px-4 pl-10 text-sm w-80 focus:outline-none"
                            />
                            <span className="absolute left-3 top-2 text-slate-400">🔍</span>
                            <button className="absolute right-0 top-0 h-full bg-red-400 text-white px-3 rounded-r-lg">🔍</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 bg-red-100 text-red-500 rounded-lg">🔔</button>
                        <button className="p-2 bg-red-400 text-white rounded-lg">📅</button>
                        <div className="text-right ml-4">
                            <p className="text-xs font-bold text-slate-500">Tuesday</p>
                            <p className="text-xs text-blue-400">20/06/2023</p>
                        </div>
                    </div>
                </header>

                {/* Dashboard Body */}
                <div className="p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Welcome back, Sundar 👋</h2>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                                        <img src={`https://i.pravatar.cc/32?img=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <button className="ml-4 border-2 border-red-200 text-red-400 px-4 py-1 rounded-lg text-sm font-bold flex items-center">
                                <span className="mr-1">+</span> Invite
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        {/* Left Column - Tasks */}
                        <div className="col-span-8 space-y-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-red-400 text-xl">📋</span>
                                        <h3 className="font-bold text-red-400">To-Do</h3>
                                    </div>
                                    <button className="text-red-400 text-sm font-bold" onClick={() => setIsOpen(true)} >+ Add task</button>
                                </div>
                                <p className="text-xs text-slate-400 mb-4 font-bold">20 June <span className="font-normal text-slate-300">• Today</span></p>

                                <div className="space-y-4">
                                    {tasks.map((task, idx) => (
                                        <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex gap-4 relative">
                                            <div className={`w-4 h-4 rounded-full border-2 mt-1 ${task.dotColor}`}></div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h4 className="font-bold text-sm mb-1">{task.title}</h4>
                                                    <span className="text-slate-300">•••</span>
                                                </div>
                                                <p className="text-xs text-slate-500 mb-4 leading-relaxed max-w-md">{task.desc}</p>
                                                <div className="flex gap-6 text-[10px] font-bold">
                                                    <p>Priority: <span className="text-blue-400">{task.priority}</span></p>
                                                    <p>Status: <span className={task.statusColor}>{task.status}</span></p>
                                                    <p className="text-slate-300 font-normal ml-auto">Created on: 20/06/2023</p>
                                                </div>
                                            </div>
                                            <img src={task.img} className="w-24 h-16 object-cover rounded-xl" alt="Task" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Task Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex gap-4">
                                    <div className="w-4 h-4 rounded-full border-2 border-blue-500 mt-1"></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h4 className="font-bold text-sm mb-1">Presentation on Final Product</h4>
                                            <span className="text-slate-300">•••</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-4 leading-relaxed max-w-md">Make sure everything is functioning and all the necessities are properly met. Prepare the team...</p>
                                        <div className="flex gap-6 text-[10px] font-bold">
                                            <p>Priority: <span className="text-blue-400">Moderate</span></p>
                                            <p>Status: <span className="text-blue-500">In Progress</span></p>
                                            <p className="text-slate-300 font-normal ml-auto">Created on: 19/06/2023</p>
                                        </div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=60&fit=crop" className="w-24 h-16 object-cover rounded-xl" alt="Task" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Status */}
                        <div className="col-span-4 space-y-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-slate-400">📋</span>
                                    <h3 className="font-bold text-red-400">Task Status</h3>
                                </div>
                                <div className="flex justify-around items-center mb-6">
                                    {/* Progress Circles */}
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-xs font-bold">84%</div>
                                        <p className="text-[10px] mt-2 flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> Completed</p>
                                    </div>
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-r-slate-100 flex items-center justify-center text-xs font-bold">46%</div>
                                        <p className="text-[10px] mt-2 flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> In Progress</p>
                                    </div>
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-red-500 border-l-slate-100 border-b-slate-100 flex items-center justify-center text-xs font-bold">13%</div>
                                        <p className="text-[10px] mt-2 flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span> Not Started</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-red-400">☑</span>
                                    <h3 className="font-bold text-red-400">Completed Task</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex gap-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-green-500 mt-1"></div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-xs">Walk the dog</h4>
                                            <p className="text-[10px] text-slate-400 mt-1">Take the dog to the park and bring treats as well.</p>
                                            <p className="text-[9px] text-green-500 font-bold mt-1">Status: Completed</p>
                                            <p className="text-[8px] text-slate-300 mt-1">Completed 2 days ago</p>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=60&h=40&fit=crop" className="w-12 h-10 object-cover rounded-lg" alt="Task" />
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex gap-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-green-500 mt-1"></div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-xs">Conduct meeting</h4>
                                            <p className="text-[10px] text-slate-400 mt-1">Meet with the client and finalize requirements.</p>
                                            <p className="text-[9px] text-green-500 font-bold mt-1">Status: Completed</p>
                                            <p className="text-[8px] text-slate-300 mt-1">Completed 2 days ago</p>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=60&h=40&fit=crop" className="w-12 h-10 object-cover rounded-lg" alt="Task" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <AddTodo
                isOpen={isOpen}
                onClose={onClose}
            />
        </div>
    );
}

export default Dashboard