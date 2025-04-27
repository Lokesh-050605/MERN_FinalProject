import React from "react";
import {ContactUs} from "../components/ContactUs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function ContactUsPage(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-6">
                <ContactUs/>
            </div>
            <Footer />
        </div>
    ); 
}