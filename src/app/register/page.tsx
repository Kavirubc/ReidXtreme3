'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer2';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Navbar className='border border-white rounded-full' />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 bg-black text-white font-sans pt-36"
            >
                <h2 className="text-3xl font-bruno mb-8 pt-5">Register Your Team</h2>
                <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-6 font-des tracking-widest">
                    <motion.fieldset
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="border border-2 border-tertiary p-4 rounded-md">
                        <legend className="text-xl font-semibold mb-2 text-yg">Team Details</legend>
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
                            <select
                                name="university"
                                value={formData.university}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent text-white focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            >
                                <option className='bg-black/95' value="" disabled>Select your university</option>
                                <option className='bg-black/95' value="University of Colombo School of Computing">
                                    University of Colombo School of Computing (UCSC)
                                </option>
                                <option className='bg-black/95' value="University of Moratuwa">University of Moratuwa</option>
                                <option className='bg-black/95' value="University of Colombo">University of Colombo</option>
                                <option className='bg-black/95'
                                    value="Sri Lanka Institute of Information Technology">
                                    Sri Lanka Institute of Information Technology (SLIIT)
                                </option>
                                <option className='bg-black/95'
                                    value="University of Kelaniya">University of Kelaniya</option>
                                <option className='bg-black/95'
                                    value="University of Jayawardhanapura">
                                    University of Jayawardhanapura
                                </option>
                                <option className='bg-black/95'
                                    value="University of Peradeniya">University of Peradeniya</option>
                                <option className='bg-black/95'
                                    value="University of Wayamba">University of Wayamba</option>
                                <option className='bg-black/95'
                                    value="University of Uva Wellassa">University of Uva Wellassa</option>
                                <option className='bg-black/95'
                                    value="University of Rajarata">University of Rajarata</option>
                                <option className='bg-black/95'
                                    value="University of Sabaragamuwa">University of Sabaragamuwa</option>
                                <option className='bg-black/95'
                                    value="University of Vavuniya">University of Vavuniya</option>
                                <option className='bg-black/95'
                                    value="University of Ruhuna">University of Ruhuna</option>
                                <option className='bg-black/95'
                                    value="University of Jaffna">University of Jaffna</option>
                                <option className='bg-black/95'
                                    value="University of Vocational Technology">
                                    University of Vocational Technology
                                </option>
                                <option className='bg-black/95'
                                    value="South Eastern University of Sri Lanka">
                                    South Eastern University of Sri Lanka
                                </option>
                                <option className='bg-black/95'
                                    value="National School of Business Management">
                                    National School of Business Management
                                </option>
                                <option className='bg-black/95'
                                    value="National Institute of Business Management">
                                    National Institute of Business Management
                                </option>
                                <option className='bg-black/95'
                                    value="Open University of Sri Lanka">
                                    Open University of Sri Lanka
                                </option>
                                <option className='bg-black/95'
                                    value="Informatics Institute of Technology">
                                    Informatics Institute of Technology
                                </option>
                                <option className='bg-black/95'
                                    value="Sri Lanka Technological Campus">
                                    Sri Lanka Technological Campus
                                </option>
                                <option className='bg-black/95'
                                    value="General Sir John Kothalawala Defence University">
                                    General Sir John Kothalawala Defence University
                                </option>
                                <option className='bg-black/95'
                                    value="Colombo International Nautical and Engineering Campus">
                                    Colombo International Nautical and Engineering Campus
                                </option>
                                <option className='bg-black/95'
                                    value="International College of Business and Technology">
                                    International College of Business and Technology
                                </option>
                                <option className='bg-black/95'
                                    value="Australian College of Business and Technology">
                                    Australian College of Business and Technology
                                </option>
                                <option className='bg-black/95'
                                    value="Other">Other</option>
                            </select>
                        </label>
                    </motion.fieldset>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.fieldset
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="border border-gray-700 p-4 rounded-md">
                            <legend className="text-xl font-semibold mb-2 text-yg">Team Leader Details</legend>
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
                        </motion.fieldset>

                        <motion.fieldset
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="border border-gray-700 p-4 rounded-md">
                            <legend className="text-xl font-semibold mb-2 text-yg">Team Member 01</legend>
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
                        </motion.fieldset>

                        <motion.fieldset
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.0 }}
                            className="border border-gray-700 p-4 rounded-md">
                            <legend className="text-xl font-semibold mb-2  text-yg">Team Member 02</legend>
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
                        </motion.fieldset>

                        <motion.fieldset
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                            className="border border-gray-700 p-4 rounded-md">
                            <legend className="text-xl font-semibold mb-2 text-yg">Team Member 03</legend>
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
                        </motion.fieldset>
                    </div>

                    <div className="flex justify-end">
                        <button type='submit' className="inline-flex w-56 h-12 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#131313,45%,#062C20,55%,#131313)] bg-[length:200%_100%] px-6 font-bold text-xl text-white tracking-widest transition-colors focus:outline-double focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-bruno">
                            Register
                        </button>
                    </div>

                </form>

                <Footer />
            </motion.div>
        </>
    );
};

export default RegistrationForm;
