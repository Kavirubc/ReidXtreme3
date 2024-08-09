'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer2';

const RegistrationForm = () => {
    const [progress, setProgress] = useState(0);
    const [teamName, setTeamName] = useState('');
    const [teamEmail, setTeamEmail] = useState('');
    const [teamLeaderName, setTeamLeaderName] = useState('');
    const [teamLeaderEmail, setTeamLeaderEmail] = useState('');
    const [teamleaderscontactNumber, setTeamleaderscontactNumber] = useState('');
    const [university, setUniversity] = useState('');
    const [teamMember1, setTeamMember1] = useState('');
    const [teamMember1email, setTeamMember1email] = useState('');
    const [teamMember1contactNumber, setTeamMember1contactNumber] = useState('');
    const [teamMember2, setTeamMember2] = useState('');
    const [teamMember2email, setTeamMember2email] = useState('');
    const [teamMember2contactNumber, setTeamMember2contactNumber] = useState('');
    const [teamMember3, setTeamMember3] = useState('');
    const [teamMember3email, setTeamMember3email] = useState('');
    const [teamMember3contactNumber, setTeamMember3contactNumber] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState<boolean | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSuccess(null);
        setShowPopup(true);
        let progressValue = 0;
        setProgress(progressValue);

        const simulateProgress = () => {
            if (progressValue < 80) { // Stop at 80% until submission is done
                progressValue += 20; // Increment progress by 20%
                setProgress(progressValue);
                setTimeout(simulateProgress, 500); // Simulate network latency
            }
        };
        simulateProgress();

        try {
            console.log('Team Name: ', teamName);
            console.log('Team Email: ', teamEmail);
            console.log('Leader Name: ', teamLeaderName);
            console.log('Team Leader Email: ', teamLeaderEmail);
            console.log('Team Leader Contact Number: ', teamleaderscontactNumber);
            console.log('University: ', university);
            console.log('Member 1 Name: ', teamMember1);
            console.log('Member 1 Email: ', teamMember1email);
            console.log('Member 1 Contact Number:', teamMember1contactNumber);
            console.log('Member 2 Name: ', teamMember2);
            console.log('Member 2 Email: ', teamMember2email);
            console.log('Member 2 Contact Number:', teamMember2contactNumber);
            console.log('Member 3 Name: ', teamMember3);
            console.log('Member 3 Email: ', teamMember3email);
            console.log('Member 3 Contact Number:', teamMember3contactNumber);


            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamName, teamEmail, teamLeaderName, teamLeaderEmail, teamleaderscontactNumber, university, teamMember1, teamMember1email, teamMember1contactNumber, teamMember2, teamMember2email, teamMember2contactNumber, teamMember3, teamMember3email, teamMember3contactNumber
                }),
            });
            setProgress(100);
            const { msg, success } = await res.json();
            setError(msg);
            setSuccess(success);

            if (success) {
                setTeamName("");
                setTeamEmail("");
                setTeamLeaderName("");
                setTeamLeaderEmail("");
                setTeamleaderscontactNumber("");
                setUniversity("");
                setTeamMember1("");
                setTeamMember1email("");
                setTeamMember1contactNumber("");
                setTeamMember2("");
                setTeamMember2email("");
                setTeamMember2contactNumber("");
                setTeamMember3("");
                setTeamMember3email("");
                setTeamMember3contactNumber("");
            }
        } catch (err) {
            setError('An unexpected error occurred.');
            setSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Navbar className='border border-white rounded-full' />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 bg-black text-white font-sans pt-36 min-h-screen"
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
                                onChange={(e) => setTeamName(e.target.value)}
                                value={teamName}
                                type="text" placeholder='' id="teamName"
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
                                onChange={(e) => setTeamEmail(e.target.value)}
                                value={teamEmail}
                                type="text" placeholder='' id="teamEmail"
                                className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            University
                            <select
                                onChange={(e) => setUniversity(e.target.value)}
                                value={university}
                                id="university"
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
                                    onChange={(e) => setTeamLeaderName(e.target.value)}
                                    value={teamLeaderName}
                                    type="text" placeholder='' id="teamLeaderName"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Email
                                <input
                                    onChange={(e) => setTeamLeaderEmail(e.target.value)}
                                    value={teamLeaderEmail}
                                    type="text" placeholder='' id="teamLeaderEmail"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Contact Number
                                <input
                                    type="tel"
                                    onChange={(e) => setTeamleaderscontactNumber(e.target.value)}
                                    value={teamleaderscontactNumber}
                                    placeholder='' id="teamleaderscontactNumber"
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
                                    onChange={(e) => setTeamMember1(e.target.value)}
                                    value={teamMember1}
                                    type="text" placeholder='' id="teamMember1"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Email
                                <input
                                    onChange={(e) => setTeamMember1email(e.target.value)}
                                    value={teamMember1email}
                                    type="text" placeholder='' id="teamMember1email"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Contact Number
                                <input
                                    type="tel"
                                    onChange={(e) => setTeamMember1contactNumber(e.target.value)}
                                    value={teamMember1contactNumber}
                                    placeholder='' id="teamMember1contactNumber"
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
                                    onChange={(e) => setTeamMember2(e.target.value)}
                                    value={teamMember2}
                                    type="text" placeholder='' id="teamMember2"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Email
                                <input
                                    onChange={(e) => setTeamMember2email(e.target.value)}
                                    value={teamMember2email}
                                    type="text" placeholder='' id="teamMember2email"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Contact Number
                                <input
                                    type="tel"
                                    onChange={(e) => setTeamMember2contactNumber(e.target.value)}
                                    value={teamMember2contactNumber}
                                    placeholder='' id="teamMember2contactNumber"
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
                                    onChange={(e) => setTeamMember3(e.target.value)}
                                    value={teamMember3}
                                    type="text" placeholder='' id="teamMember3"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Email
                                <input
                                    onChange={(e) => setTeamMember3email(e.target.value)}
                                    value={teamMember3email}
                                    type="text" placeholder='' id="teamMember3email"
                                    className="w-full p-3 mt-1 border border-gray-700 rounded bg-transparent focus:outline-double focus:ring-2 focus:ring-secondary "
                                    required
                                />
                            </label>
                            <label className="block mb-2">
                                Contact Number
                                <input
                                    type="tel"
                                    onChange={(e) => setTeamMember3contactNumber(e.target.value)}
                                    value={teamMember3contactNumber}
                                    placeholder='' id="teamMember3contactNumber"
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
                {showPopup && (
                    <div className="fixed inset-0 text-center tracking-widest font-des flex items-center justify-center bg-primary bg-opacity-50 leading-loose ">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black bg-opacity-95 p-5 lg:p-10 rounded-xl shadow-custom-hover shadow-tertiary flex flex-col items-center"
                        >
                            {showPopup && (
                                <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-50">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-primary bg-opacity-95 p-14 rounded-xl shadow-lg shadow-tertiary flex flex-col items-center w-[400px] md:w-[600px]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-full bg-gray-200 rounded-full h-4 mb-4 relative overflow-hidden">
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary via-green-900 to-tertiary rounded-full shadow-md"
                                                        style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                                                    />
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-white bg-opacity-20 rounded-full"
                                                        style={{
                                                            width: `${progress}%`,
                                                            transition: 'width 0.5s ease-in-out',
                                                            mixBlendMode: 'overlay',
                                                        }}
                                                    />
                                                </div>
                                                <p className='text-white text-3xl font-bold'>Registering...</p>
                                            </>
                                        ) : (
                                            <>
                                                {success ? (
                                                    <>
                                                        <div className="text-green-500 text-xl md:text-3xl mb-4">✔️</div>
                                                        <p className='text-white text-xl md:text-3xl font-bold text-center'>Successfully Registered for <br />
                                                            <span className='font-bruno text-secondary text-3xl md:text-4xl'>
                                                                ReidXtreme 3
                                                            </span>
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="text-red-500 text-2xl md:text-xl mb-4">❌</div>
                                                        <p className='text-red-700 text-2xl md:text-xl font-bold text-center'>Error. Please Try Again</p>
                                                    </>
                                                )}
                                                <button
                                                    onClick={handleClosePopup}
                                                    className="mt-6 px-6 py-3 text-xl bg-blue-950 text-white rounded-lg hover:bg-cyan-900 focus:outline-double focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-slate-50 font-des tracking-widest"
                                                >
                                                    DONE
                                                </button>
                                            </>
                                        )}
                                    </motion.div>
                                </div>
                            )}

                        </motion.div>
                    </div>
                )}


                <Footer />
            </motion.div>
        </>
    );
};

export default RegistrationForm;
