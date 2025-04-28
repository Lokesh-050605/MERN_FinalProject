import React from "react";
import { TravelBookingForm } from "../components/TravelBookingForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom"; // import useLocation

export default function Booking() {
    const location = useLocation();

    // Extract query parameters
    const searchParams = new URLSearchParams(location.search);
    const endDestination = searchParams.get('whereTo') || '';
    const departureDate = searchParams.get('when') || '';
    console.log("End Destination:", endDestination);
    console.log("Departure Date:", departureDate);
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-6">
                <TravelBookingForm 
                    initialEndDestination={endDestination}
                    initialDepartureDate={departureDate}
                />
            </div>
            <Footer />
        </div>
    ); 
}
