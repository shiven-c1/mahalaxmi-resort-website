import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-y-3 md:space-y-4">
      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white">
        🎉 Limited Time Offer - Call Before Timer Ends!
      </h3>
      <p className="text-gray-400 text-base md:text-lg">
        Get <span className="text-yellow-500 font-bold text-lg md:text-xl">10% OFF</span> on all properties
      </p>
      
      <Card className="bg-gray-800 border-gray-700 max-w-md mx-auto">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-3 md:mb-4">
            <Clock className="w-4 h-4 md:w-6 md:h-6 text-yellow-500" />
            <span className="text-white font-medium text-sm md:text-base">Offer Expires In:</span>
          </div>
          
          <div className="flex justify-center gap-2 md:gap-4">
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Seconds</div>
            </div>
          </div>
          
          <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4">
            *Valid on all residential and commercial properties
          </p>
        </CardContent>
      </Card>
    </div>
  );
}