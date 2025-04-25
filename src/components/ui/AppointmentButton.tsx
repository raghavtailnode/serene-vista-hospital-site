
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const AppointmentButton = ({ className, fullWidth = false }: AppointmentButtonProps) => {
  const handleAppointment = () => {
    // In a real implementation, this would open a modal or navigate to booking page
    alert("Appointment booking functionality would open here!");
  };

  return (
    <Button 
      onClick={handleAppointment} 
      className={cn(
        "bg-hospital-200 hover:bg-hospital-300 text-white font-medium",
        fullWidth ? "w-full" : "",
        className
      )}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Appointment
    </Button>
  );
};

export default AppointmentButton;
