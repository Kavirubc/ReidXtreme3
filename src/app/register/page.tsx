'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        teamEmail: '',
        teamLeaderName: '',
        teamLeaderEmail: '',
        teamleaderscontactNumber: '',
        university: '',
        teamMember1: '',
        teamMember1email: '',
        teamMember1contactNumber: '',
        teamMember2: '',
        teamMember2email: '',
        teamMember2contactNumber: '',
        teamMember3: '',
        teamMember3email: '',
        teamMember3contactNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white font-sans pb-56"
        >
            <h2 className="text-3xl font-bruno mb-8 pt-5">Register Your Team</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-6 font-des tracking-widest">
                <fieldset className="border border-2 border-tertiary p-4 rounded-md">
                    <legend className="text-xl font-semibold mb-2">Team Details</legend>
                    <label className="block mb-2">
                        Team Name
                        <input
                            type="text"
                            name="teamName"
                            placeholder="ReidXtreme3"
                            value={formData.teamName}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                            required
                        />
                    </label>
                    <label className="block mb-2">
                        Team Email
                        <div className='mt-1'>
                            <span className='font-des text-sm text-neutral-400'>
                                * Use this email as hackerank email
                            </span>
                        </div>
                        <input
                            type="email"
                            name="teamEmail"
                            placeholder=""
                            value={formData.teamEmail}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                            required
                        />
                    </label>
                    <label className="block mb-2">
                        University
                        <input
                            type="text"
                            name="university"
                            placeholder=""
                            value={formData.university}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                            required
                        />
                    </label>
                </fieldset>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <fieldset className="border border-gray-700 p-4 rounded-md">
                        <legend className="text-xl font-semibold mb-2">Team Leader Details</legend>
                        <label className="block mb-2">
                            Name
                            <input
                                type="text"
                                name="teamLeaderName"
                                placeholder=""
                                value={formData.teamLeaderName}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Email
                            <input
                                type="email"
                                name="teamLeaderEmail"
                                placeholder=""
                                value={formData.teamLeaderEmail}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Contact Number
                            <input
                                type="tel"
                                name="teamleaderscontactNumber"
                                placeholder="0712345678"
                                value={formData.teamleaderscontactNumber}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset className="border border-gray-700 p-4 rounded-md">
                        <legend className="text-xl font-semibold mb-2">Team Member 01</legend>
                        <label className="block mb-2">
                            Name
                            <input
                                type="text"
                                name="teamMember1"
                                placeholder=""
                                value={formData.teamMember1}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Email
                            <input
                                type="email"
                                name="teamMember1email"
                                placeholder=""
                                value={formData.teamMember1email}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Contact Number
                            <input
                                type="tel"
                                name="teamMember1contactNumber"
                                placeholder="0712345678"
                                value={formData.teamMember1contactNumber}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset className="border border-gray-700 p-4 rounded-md">
                        <legend className="text-xl font-semibold mb-2">Team Member 02</legend>
                        <label className="block mb-2">
                            Name
                            <input
                                type="text"
                                name="teamMember2"
                                placeholder=""
                                value={formData.teamMember2}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Email
                            <input
                                type="email"
                                name="teamMember2email"
                                placeholder=""
                                value={formData.teamMember2email}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Contact Number
                            <input
                                type="tel"
                                name="teamMember2contactNumber"
                                placeholder="0712345678"
                                value={formData.teamMember2contactNumber}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset className="border border-gray-700 p-4 rounded-md">
                        <legend className="text-xl font-semibold mb-2">Team Member 03</legend>
                        <label className="block mb-2">
                            Name
                            <input
                                type="text"
                                name="teamMember3"
                                placeholder=""
                                value={formData.teamMember3}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Email
                            <input
                                type="email"
                                name="teamMember3email"
                                placeholder=""
                                value={formData.teamMember3email}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Contact Number
                            <input
                                type="tel"
                                name="teamMember3contactNumber"
                                placeholder="0712345678"
                                value={formData.teamMember3contactNumber}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                    </fieldset>
                </div>

                <button type='submit' className="inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#131313,45%,#062C20,55%,#131313)] bg-[length:200%_100%] px-6 font-bold text-xl text-white tracking-widest transition-colors focus:outline-double focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-bruno">
                    Register
                </button>
            </form>
        </motion.div>
    );
};

export default RegistrationForm;