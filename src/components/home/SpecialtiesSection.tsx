import { motion } from "framer-motion";
import { Heart, Brain, Stethoscope, Bone, Eye, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const SpecialtyCard = ({ title, description, icon, className, animationDelay }: SpecialtyCardProps) => {
  return (
    <Card 
      className={cn("border-none shadow-lg hover:shadow-xl transition-shadow", className)}
      style={animationDelay ? { animationDelay } : undefined}
    >
      <CardContent className="p-6">
        <div className="bg-hospital-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <div className="text-hospital-400">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Cardiology",
      description: "Comprehensive care for heart conditions with advanced diagnostics and treatments.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Neurology",
      description: "Expert care for disorders of the nervous system, brain, and spine.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Internal Medicine",
      description: "Prevention, diagnosis, and treatment of adult diseases and conditions.",
      icon: <Stethoscope className="h-6 w-6" />,
    },
    {
      title: "Orthopedics",
      description: "Specialized care for your bones, joints, ligaments, tendons, and muscles.",
      icon: <Bone className="h-6 w-6" />,
    },
    {
      title: "Ophthalmology",
      description: "Complete eye care services, from routine exams to complex surgeries.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Pathology",
      description: "Advanced laboratory services for accurate diagnosis and treatment.",
      icon: <FlaskConical className="h-6 w-6" />,
    },
  ];

  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-hospital-800">
          Our Medical <span className="text-hospital-200">Specialties</span>
        </h2>
        <p className="section-subheading">
          We offer a wide range of medical specialties to ensure comprehensive healthcare 
          for all your needs under one roof.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              icon={specialty.icon}
              className="animate-fade-in"
              animationDelay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
