'use client';

import Link from "next/link";
import { useState } from "react";
import InputField from "../../components/common/InputField";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data, "Data");

            if (!res.ok) {
                // setError(data.message || 'Something went wrong');
                return;
            }

            // alert('Registration successful');
            const isConfirmed = window.confirm('Registration successful!');

            if (isConfirmed) {
                // router.push('/dashboard');
                window.location.href = '/dashboard';
            }
        } catch (err) {
            console.log(err, "err");
            // setError('Network error');
        } finally {
            // setLoading(false);
        }

    };

    return (
        <div className="min-h-screen bg-[#ff7b7b] flex items-center justify-center p-4 font-sans relative overflow-hidden"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}>

            {/* Background Pattern Overlay (Simulated) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex flex-wrap gap-20 p-10">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="text-4xl transform rotate-12">⚙️ 💡 📈 🚀</div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden relative z-10">

                {/* Left Side - Illustration */}
                <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center bg-white">
                    <div className="relative w-full max-w-sm">
                        {/* Simple SVG/CSS Illustration placeholder */}
                        <svg viewBox="0 0 400 400" className="w-full h-auto">
                            {/* Character Body */}
                            <circle cx="100" cy="100" r="20" fill="#4B2C20" />
                            <path d="M80 120 Q100 120 120 120 L130 250 L70 250 Z" fill="#f0f4f8" />
                            <path d="M70 250 L50 350 L90 350 Z" fill="#3b3b98" />
                            <path d="M130 250 L150 350 L110 350 Z" fill="#3b3b98" />
                            {/* Floating UI Elements */}
                            <rect x="200" y="150" width="80" height="150" rx="10" fill="#3b82f6" />
                            <rect x="180" y="80" width="100" height="60" rx="4" fill="#1e293b" />
                            <rect x="250" y="50" width="80" height="120" rx="4" fill="#60a5fa" opacity="0.8" />
                            <rect x="300" y="160" width="70" height="80" rx="4" fill="#22d3ee" />
                            {/* Details */}
                            <rect x="210" y="170" width="60" height="4" fill="white" opacity="0.5" />
                            <rect x="210" y="180" width="60" height="4" fill="white" opacity="0.5" />
                            <rect x="210" y="190" width="60" height="4" fill="white" opacity="0.5" />
                        </svg>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-10 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-2">
                        <InputField
                            value={formData.name}
                            handleChange={handleChange}
                            icon="👤"
                            placeholder="Enter First Name"
                            name="name"
                        />
                        <InputField
                            value={formData.lastName}
                            handleChange={handleChange}
                            icon="👤"
                            placeholder="Enter Last Name"
                            name="lastName"
                        />
                        <InputField
                            value={formData.email}
                            handleChange={handleChange}
                            icon="✉️"
                            placeholder="Enter Email"
                            name="email"
                            type="email"
                        />
                        <InputField
                            value={formData.password}
                            handleChange={handleChange}
                            icon="🔒"
                            placeholder="Enter Password"
                            name="password"
                            type="password"
                        />
                        {/* <InputField
                            icon="🔒"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            type="password"
                        /> */}

                        {/* <div className="flex items-center mt-6 mb-6">
                            <input
                                id="terms"
                                name="agreeTerms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                onChange={handleChange}
                                checked={formData.agreeTerms}
                                required
                            />
                            <label htmlFor="terms" className="ml-3 text-xs font-medium text-gray-600">
                                I agree to all terms
                            </label>
                        </div> */}

                        <button
                            type="submit"
                            className="w-32 text-white bg-[#ff9494] hover:bg-[#ff7b7b] focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-gray-600">
                        Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;