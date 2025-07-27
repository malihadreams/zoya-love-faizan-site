import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Birthday is July 31st
      let birthday = new Date(currentYear, 6, 31); // Month is 0-indexed, so 6 = July
      
      // If birthday has passed this year, set it for next year
      if (now > birthday) {
        birthday = new Date(currentYear + 1, 6, 31);
      }
      
      // Check if today is the birthday
      const today = new Date();
      const todayMonth = today.getMonth();
      const todayDate = today.getDate();
      setIsToday(todayMonth === 6 && todayDate === 31);
      
      const difference = birthday.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isToday) {
    return (
      <div className="glass-card rounded-3xl p-8 mb-12 text-center max-w-2xl mx-auto shadow-elevated glow-effect">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
            Today is the Day! 🎉
          </h2>
          <Calendar className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground font-accent">
          July 31st - Happy Birthday Zoya! ✨
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-4 md:p-8 mb-12 text-center max-w-4xl mx-auto shadow-elevated hover:scale-105 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
        <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold gradient-text text-center">
          Countdown to Zoya's Birthday
        </h2>
        <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
      </div>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 font-accent">
        July 31st - The Most Special Day! 🎂
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <div 
            key={item.label} 
            className="bg-gradient-primary rounded-2xl p-3 md:p-6 text-primary-foreground shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-1 md:mb-2 animate-pulse">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm lg:text-base font-accent font-medium opacity-90">
              {item.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
          <p className="text-sm md:text-base font-accent text-muted-foreground">
            ✨ Every second counts until your special day! ✨
          </p>
        </div>
      </div>
    </div>
  );
};