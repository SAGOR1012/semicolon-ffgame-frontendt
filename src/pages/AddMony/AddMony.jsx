import { useState } from "react";
import bkash from "../../assets/bkash.webp";
import nogod from "../../assets/nogot.png";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddMony = () => {
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [method, setMethod] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!amount || parseFloat(amount) < 10) {
            setError("Please enter a valid amount (minimum 10 TK).");
            return;
        }

        if (!number || number.length !== 11) {
            setError("Please enter a valid 11-digit phone number.");
            return;
        }

        if (!method) {
            setError("Please select a payment method (Bkash or Nogod).");
            return;
        }

        // Clear errors and handle successful submission
        setError("");
        // console.log("Form submitted:", { amount, number, method });
        // alert("Form submitted successfully!");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "অ্যাড মানি রিকোয়েস্ট সফল হয়েছে",
            showConfirmButton: false,
            timer: 1500
        });

        // Reset fields after submission
        setAmount("");
        setNumber("");
        setMethod("");
    };

    return (
        <div className="pt-28 bg-primary-bg-image flex justify-center ">
            <Helmet>
                <title>semicolonff | Add Money</title>
            </Helmet>
            <div className="flex flex-col max-w-md p-2 sm:p-10 bg-white">
                {/* Bkash and Nogod Section */ }
                <div className="mb-2 text-center flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <img className="h-10 w-10" src={ bkash } alt="Bkash" />
                        <p>
                            <span className="text-xl text-pink-600">01639136200</span> - সেন্ড মানি Minimum 10 TK
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="h-10 w-10" src={ nogod } alt="Nogod" />
                        <p>
                            <span className="text-xl text-orange-500">01639136200</span> - সেন্ড মানি Minimum 10 TK
                        </p>
                    </div>
                </div>

                {/* Form Section */ }
                <form noValidate onSubmit={ handleSubmit } className="space-y-12">
                    <div className="space-y-4 font-semibold text-error mt-5">
                        {/* Amount */ }
                        <div>
                            <label htmlFor="amount" className="block mb-2 text-sm">
                                আপনি কত টাকা পাঠিয়েছেন নিচে সেটি লিখুন
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

                        {/* Sender Number */ }
                        <div>
                            <label htmlFor="number" className="block mb-2 text-sm">
                                যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই পুরো নাম্বারটি লিখুন
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

                        {/* Payment Method (Radio Buttons with Images) */ }
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="method"
                                    id="bkash_radio"
                                    value="Bkash"
                                    checked={ method === "Bkash" }
                                    onChange={ (e) => setMethod(e.target.value) } // type korar sathe sathe value tule ney tahole r refresh dewa lage na kichu vul hole
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
                            className="w-full px-8 py-3 font-semibold rounded-md bg-green-500 text-white"
                        >
                            Add Mony
                        </button>

                        {/* <p className="px-6 text-sm text-center text-blue-700 font-semibold mt-10">
                            অ্যাড মানিতে সমস্যা হলে সাপোর্টে যোগাযোগ করুন
                            <button className="btn">Contact</button>
                        </p> */}
                    </div>
                </form>
                <div className="mt-5">
                    <p className="px-6 text-sm text-center text-error font-semibold">
                        Add Mony তে ক্লিক করার পূর্বে টাকা সেন্ড করতে হবে |
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddMony;
