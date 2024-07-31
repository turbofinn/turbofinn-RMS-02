import axios from "axios";

const instance = axios.create({

    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }

});

const sendOTP = async (params) => {
    try{

        const response = await instance.post( '/dev/send-otp', params );
        return response.data

    }
    catch(error){

        console.error('Error sending OTP:', error);
        throw error

    }
}

const verifyOTP = async (params) => {
    try{

        const response = await instance.post( '/dev/verify-otp', params );
        return response.data

    }
    catch(error){

        console.error('Error in verifying OTP', error);
        throw error

    }
}


const createOrder = async (params) => {
    try{

        const response = await instance.post( '/dev/create-order', params );
        return response.data

    }
    catch(error){

        console.error('Error in creating order', error);
        throw error

    }
}


const getItem = async (params) => {
    try{

        const response = await instance.post( '/dev/get-items', params );
        return response.data

    }
    catch( error ){

        console.error('Error in getting Item', error);
        throw error

    }
}


const getOrderedItems = async (params) => {
    try{

        const response = await instance.post( '/dev/get-ordered-items', params );
        return response.data

    }
    catch( error ){

        console.error('Error in getting Item', error);
        throw error

    }
}

const getUserDetails= async(params)=>{
    try{
        const response= await instance.post( '/dev/get-user-details', params )
        return response.data
    }
    catch(error){
        console.log( 'Error in getting user details', error)
        throw error
    }
}



const updateUserDetails= async(params)=>{
    try{
        const response= await instance.post( '/dev/get-user-details', params )
        return response.data
    }
    catch(error){
        console.log('Error in updating user details', error)
        throw error
    }
}






export default {

    sendOTP: sendOTP,
    verifyOTP: verifyOTP,
    createOrder: createOrder,
    getItem: getItem,
    getOrderedItems: getOrderedItems,
    getUserDetails: getUserDetails,
    updateUserDetails: updateUserDetails,
 }