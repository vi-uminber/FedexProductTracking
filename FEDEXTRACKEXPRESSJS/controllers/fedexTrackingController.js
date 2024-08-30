import axios from "axios";

import { application } from "express";


const authFedex  = async()=>{
    
    try {

        //Input data
        const inputPayload = {
            grant_type:'client_credentials',
            client_id:process.env.FEDEX_API_KEY,
            client_secret:process.env.FEDEX_SECRET_KEY
        }

        //Headers 
        const headers = {

            'Content-Type':"application/x-www-form-urlencoded"

        }

        const response = await axios.post(`${process.env.FEDEX_BASE_API_URL}/oauth/token`, inputPayload, {headers: headers})
        return response.data
        
    } catch (error) {

        console.log("Error authenticating with FedEx API:", error);
        throw new Error("Failed to authenticate with FedEx API")
        
        
    }
    
}

class FedexTrackingController {
    static trackFedexShipment = async (req, res)=>{
        
        
     try {

        const authRes = await authFedex()
        const {trackingNumber} = req.body
        //input data
        const inputPayload = {
            includeDetailedScans: true,
            trackingInfo:[
                {
                    trackingNumberInfo:{
                        trackingNumber: trackingNumber
                    }
                }
            ]
        }

        const headers = {
            'Content-Type':'application/json',
            'X-locale':'en_US',
            'Authorization': `Bearer ${authRes.access_token}`
        }

        const response = await axios.post(`${process.env.FEDEX_BASE_API_URL}/track/v1/trackingnumbers`, inputPayload, {headers: headers})
        
        const trackingDetails = response.data.output.completeTrackResults[0].trackResults[0].scanEvents.map(item=>
        ({
            eventDescription:item.eventDescription,
            city:item.scanLocation.city
        })
        )

        res.send(trackingDetails)
        
     } catch (error) {

        console.log('Error Tracking FedEx shipment:', error);
        res.status(500).send('Failed to track FedEx shipment')
        
        
     }
       
       
    }
}

export default FedexTrackingController

