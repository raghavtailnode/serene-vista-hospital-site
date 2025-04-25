
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hospital-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">
                Serene Vista
              </span>
              <span className="text-hospital-200 font-semibold text-xl ml-1">
                Hospital
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare with compassion and cutting-edge technology since 1995.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-hospital-700 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-hospital-700 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-hospital-700 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-hospital-700 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-hospital-200">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Doctors", "Contact Us", "Appointments"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-hospital-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-hospital-200">Our Services</h3>
            <ul className="space-y-2">
              {["Emergency Care", "General Surgery", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Gynecology"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-hospital-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-hospital-200">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-white">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2 text-hospital-200">Emergency</h3>
              <a href="tel:+1234567890" className="text-xl font-bold text-white hover:text-hospital-200 transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Serene Vista Hospital. All Rights Reserved. 
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-hospital-200 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-hospital-200 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-hospital-200 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
