import { useState } from "react";
import bkash from "../../assets/bkash.webp";
import nogod from "../../assets/nogot.png"
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Withdraw = () => {
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [method, setMethod] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!amount || parseFloat(amount) < 50) {
            setError("Please enter a valid amount (minimum 50 TK). ");
            return;
        }

        if (!number || number.length !== 11) {
            setError("Please enter a valid 11-digit phone number.");
            return;
        }

        if (!method) {
            setError("Please select a withdrawal method (Bkash or Nogod).");
            return;
        }

        // Clear errors and handle successful submission
        setError("");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "উত্তোলন অনুরোধ সফল হয়েছে",
            showConfirmButton: false,
            timer: 1500
        });

        // Reset fields after submission
        setAmount("");
        setNumber("");
        setMethod("");
    };
    return (
        <div>
            <Helmet>
                <title>semicolonff | Withdraw Money</title>
            </Helmet>
            <div className="pt-28 bg-primary-bg-image flex justify-center ">
                <div className="flex flex-col max-w-md p-2 sm:p-10 bg-white">
                    {/* Bkash and Nogod Section */ }
                    <div className="mb-2 text-center flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <img className="h-10 w-10" src={ bkash } alt="Bkash" />
                            <p>
                                <span className="text-xl text-pink-600">01639136200</span> - উত্তোলন ন্যূনতম 50 TK
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="h-10 w-10" src={ nogod } alt="Nogod" />
                            <p>
                                <span className="text-xl text-orange-500">01639136200</span> - উত্তোলন ন্যূনতম 50 TK
                            </p>
                        </div>
                    </div>

                    {/* Form Section */ }
                    <form noValidate onSubmit={ handleSubmit } className="space-y-12">
                        <div className="space-y-4 font-semibold text-error mt-5">
                            {/* Amount */ }
                            <div>
                                <label htmlFor="amount" className="block mb-2 text-sm">
                                    আপনি কত টাকা উত্তোলন করতে চান তা লিখুন
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    value={ amount }
                                    onChange={ (e) => setAmount(e.target.value) }
                                    placeholder="টাকার পরিমাণ লিখুন"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                />
                            </div>

                            {/* Receiver Number */ }
                            <div>
                                <label htmlFor="number" className="block mb-2 text-sm">
                                    যে নাম্বারে টাকা পাঠাতে চান সেটি লিখুন
                                </label>
                                <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    value={ number }
                                    onChange={ (e) => setNumber(e.target.value) }
                                    placeholder="আপনার বিকাশ অথবা নগদের নাম্বার"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                />
                            </div>

                            {/* Withdrawal Method (Radio Buttons with Images) */ }
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="method"
                                        id="bkash_radio"
                                        value="Bkash"
                                        checked={ method === "Bkash" }
                                        onChange={ (e) => setMethod(e.target.value) }
                                        className="mr-2"
                                    />
                                    <label htmlFor="bkash_radio" className="flex items-center gap-2">
                                        <img className="w-10 h-10" src={ bkash } alt="Bkash" />
                                        Bkash
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="method"
                                        id="nogod_radio"
                                        value="Nogod"
                                        checked={ method === "Nogod" }
                                        onChange={ (e) => setMethod(e.target.value) }
                                        className="mr-2"
                                    />
                                    <label htmlFor="nogod_radio" className="flex items-center gap-2">
                                        <img className="w-10 h-10" src={ nogod } alt="Nogod" />
                                        Nogod
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Error Message */ }
                        { error && <p className="text-red-500 text-sm">{ error }</p> }

                        {/* Submit Button */ }
                        <div className="space-y-2">
                            <button
                                type="submit"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white"
                            >
                                Withdraw Money
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <p className="px-6 text-sm text-center text-error font-semibold">
                            উত্তোলনের অনুরোধ পাঠানোর পূর্বে ব্যালেন্স চেক করুন।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;