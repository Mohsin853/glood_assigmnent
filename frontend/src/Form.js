import React, { useState } from "react";
import apis from "./apis";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Form = () => {
    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const onEmaiInput = (email) => {
        setSubscriberEmail(email);
    };

    const onSubscribeClick = async () => {
        try {
            setLoading(true);
            await apis.subscribe({
                SubscriberEmail: subscriberEmail,
            });
            toast.success("Email Added Successfully", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            toast.error("Email Adding Failed", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            console.log("An Error occured", error);
        } finally {
            setTimeout(setLoading(false), 10000);
            setSubscriberEmail("");
        }
    };
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
                    <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
                        <div className="py-6 px-8 md:py-0">
                            <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
                                Glood Newsletter
              </h2>
                            <p className="mt-2 text-gray-600 md:text-gray-400">
                                Wanna get weekly updates from us? Do not wait! Enter your email address and subscribe our newsletter
              </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                        <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                            <input
                                value={subscriberEmail}
                                onChange={(e) => {
                                    onEmaiInput(e.target.value);
                                }}
                                className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                            />
                            <button
                                onClick={onSubscribeClick}
                                className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
                            >
                                {loading ? <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> : "Subscribe"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default Form;
