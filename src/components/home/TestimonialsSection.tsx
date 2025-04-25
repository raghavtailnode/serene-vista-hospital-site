
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  text: string;
  name: string;
  title: string;
}

const Testimonial = ({ text, name, title }: TestimonialProps) => {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-8">
        <Quote className="h-10 w-10 text-hospital-200 mb-4 opacity-40" />
        <p className="text-gray-600 mb-6 italic">{text}</p>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The care I received at Serene Vista Hospital was exceptional. The doctors were knowledgeable, and the staff was compassionate. I felt supported throughout my entire treatment journey.",
      name: "Amanda Peterson",
      title: "Cardiac Patient",
    },
    {
      text: "After my surgery at Serene Vista, the recovery process was smooth thanks to their excellent follow-up care. The entire team went above and beyond to ensure my comfort and well-being.",
      name: "Robert Chambers",
      title: "Orthopedic Patient",
    },
    {
      text: "I was nervous about my procedure, but the medical team at Serene Vista Hospital explained everything clearly and put me at ease. Their expertise and kindness made all the difference.",
      name: "Sophia Martinez",
      title: "Neurology Patient",
    },
    {
      text: "The pediatric department treated my child with such care and attention. The doctors made what could have been a scary experience feel safe and even fun at times.",
      name: "David Thompson",
      title: "Parent of Patient",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + (width >= 1024 ? 3 : width >= 640 ? 2 : 1)
  );

  const nextTestimonial = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - testimonialsPerPage);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-hospital-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-hospital-800">
          What Our <span className="text-hospital-200">Patients Say</span>
        </h2>
        <p className="section-subheading">
          Read about the experiences of our patients and how our medical team has 
          helped them on their journey to better health.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className="h-full animate-fade-in">
                <Testimonial
                  text={testimonial.text}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-hospital-200 text-hospital-200"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-hospital-200 text-hospital-200"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
