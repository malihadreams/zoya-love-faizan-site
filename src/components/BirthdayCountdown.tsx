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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
        <div className="relative glass-card rounded-3xl p-8 mb-12 text-center max-w-3xl mx-auto shadow-elevated">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Calendar className="w-10 h-10 text-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-bounce"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Today is the Day! 🎉
            </h2>
            <div className="relative">
              <Calendar className="w-10 h-10 text-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-75"></div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-display font-bold gradient-text">
              Happy Birthday Zoya! 
            </p>
            <p className="text-lg text-muted-foreground font-accent">
              July 31st - Your Special Day! ✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="glass-card rounded-3xl p-6 md:p-8 text-center max-w-5xl mx-auto shadow-elevated border border-white/20">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary to-pink-500 rounded-2xl p-6 mb-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-white" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                  Countdown to Zoya's Birthday
                </h2>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg md:text-xl text-white/90 font-accent">
                July 31st - The Most Awaited Day! 🎂
              </p>
            </div>
          </div>
        </div>
        
        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[
            { label: 'Days', value: timeLeft.days, icon: '📅' },
            { label: 'Hours', value: timeLeft.hours, icon: '⏰' },
            { label: 'Minutes', value: timeLeft.minutes, icon: '⏱️' },
            { label: 'Seconds', value: timeLeft.seconds, icon: '⚡' }
          ].map((item, index) => (
            <div 
              key={item.label} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-sm opacity-75 mb-2">{item.icon}</div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-2 text-foreground">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base font-accent font-medium text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Message */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30">
            <p className="text-base md:text-lg font-accent text-foreground flex items-center gap-2">
              <span>✨</span>
              Every moment brings us closer to your special day!
              <span>✨</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};