
import { motion } from "framer-motion";
import AppointmentButton from "@/components/ui/AppointmentButton";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative bg-gradient-to-r from-hospital-50 via-white to-hospital-50 min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hospital-800 leading-tight">
              Your Health Is Our <span className="text-hospital-200">Top Priority</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Providing exceptional healthcare with compassion and cutting-edge technology. 
              Our team of experts is dedicated to your well-being and recovery.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AppointmentButton />
              
              <Button variant="outline" className="border-hospital-200 text-hospital-500 hover:bg-hospital-50">
                <PhoneCall className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="font-bold text-3xl text-hospital-200">25+</p>
                <p className="text-gray-600 text-sm mt-1">Specialties</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="font-bold text-3xl text-hospital-200">100+</p>
                <p className="text-gray-600 text-sm mt-1">Doctors</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="font-bold text-3xl text-hospital-200">10k+</p>
                <p className="text-gray-600 text-sm mt-1">Happy Patients</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Healthcare professional with patient" 
              className="rounded-lg shadow-xl max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
