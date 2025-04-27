import React from "react";
import { Pricing} from "../components/Pricing";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function PricingPage(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-6">
                <Pricing />
            </div>
            <Footer />
        </div>
    ); 
}