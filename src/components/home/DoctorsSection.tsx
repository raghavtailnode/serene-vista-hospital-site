
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  delay?: number;
}

const DoctorCard = ({ name, specialty, image, delay = 0 }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={image} 
              alt={`Dr. ${name}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-hospital-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <p className="text-hospital-100 mb-4">{specialty}</p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-hospital-800">
              View Profile
            </Button>
          </div>
        </div>

        <div className="p-4 text-center">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-hospital-500">{specialty}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section id="doctors" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-hospital-800">
          Meet Our <span className="text-hospital-200">Expert Doctors</span>
        </h2>
        <p className="section-subheading">
          Our team of highly qualified medical professionals is dedicated to providing 
          exceptional care with expertise and compassion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-hospital-200 hover:bg-hospital-300 text-white">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
