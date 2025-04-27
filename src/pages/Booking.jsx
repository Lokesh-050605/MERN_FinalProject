import React from "react";
import { TravelBookingForm } from "../components/TravelBookingForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function Booking(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-6">
                <TravelBookingForm />
            </div>
            <Footer />
        </div>
    ); 
}