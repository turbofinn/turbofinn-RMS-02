import React, { useEffect, useState } from 'react';
import apiServices from '../../../services/apiServices';
import { useLocation, useNavigate } from 'react-router-dom';

const Payments = () => {
    const location = useLocation();
    const { state } = location;
    const [loader, setLoader] = useState(false);
    const Navigate = useNavigate();
    const redirectUrl = `${window.location.origin}${"/feedback"}`;

    console.log("redirectUrl", redirectUrl)
    const [paymentDetails, setPaymentDetails] = useState({
        orderID: "",
        paymantAmount: 100,
        paymentStatus: "",
    });

    useEffect(() => {
        getPaymentID()
    }, []);
    useEffect(() => {
        console.log("paymentDetails", paymentDetails)
        if (paymentDetails && paymentDetails.orderID && paymentDetails.orderID.length > 1) {
            console.log("lol")
            handlePayment()
        }
    }, [paymentDetails.orderID]);

    const getPaymentID = async () => {

        setLoader(true);

        const requestData = {
            "amount": state.amount,
            "currency": "INR",
            "receipt": "rec123456789",
            "restaurentID": "rest1234",
            "userID": "user5678",
            "tableNo": "12",
            "payment_capture": 1
        }


        try {

            apiServices.getPaymentID(requestData).then((response) => {

                if (response.response.responseCode === 1001) {
                    console.log("response.response", response.response)
                    setPaymentDetails(prevState => {
                        return {
                            ...prevState,
                            orderID: response.orderID,
                            paymantAmount: response.amount,
                            paymentStatus: response.paymentStatus
                        }
                    });
                }
                else {

                }
                setLoader(false);
            });

        }
        catch (error) { console.error(error); setLoader(false); }

    }


    const handlePayment = async () => {
        // Load Razorpay script dynamically
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        };

        const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!scriptLoaded) {
            console.error('Razorpay SDK failed to load.');
            return;
        }



        const options = {
            key: 'rzp_test_CpaKZGQeJCUIbQ', // Replace with your Razorpay API key
            amount: paymentDetails.paymantAmount, // Amount in smallest currency unit
            currency: "INR",
            name: 'TurboTreats AI',
            description: 'A motherly hospitality',
            order_id: paymentDetails.orderID,
            handler: function (response) {


                console.log('Payment ID:', response.razorpay_payment_id);
                console.log('Order ID:', response.razorpay_order_id);
                console.log('Signature:', response.razorpay_signature);
                Navigate('/feedback')
            },
            // prefill: {
            //     name: 'Gaurav Kumar',
            //     email: 'gaurav.kumar@example.com',
            //     contact: '9999999999'
            // },
            // notes: {
            //     address: 'Razorpay Corporate Office'
            // },
            theme: {
                color: '#0A343D'
            },
            // callback_url: redirectUrl // Add the callback URL here

        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
};

export default Payments;
