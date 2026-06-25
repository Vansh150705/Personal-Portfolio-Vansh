import { useEffect, useState } from 'react';

/** Fixed corner heads-up readouts in mono — clock + coordinates + build stamp. */
const HUD = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden font-mono text-[10px] tracking-widest text-muted-2 lg:block">
      <div className="absolute left-10 top-5">
        VM<span className="text-signal">{'//'}</span>PORTFOLIO
      </div>
      <div className="absolute bottom-7 left-10">
        28.6139°N&nbsp;&nbsp;77.2090°E — NEW DELHI, IN
      </div>
      <div className="absolute bottom-7 right-10 text-right">
        <span className="text-signal">{time} IST</span>
        <br />
        BUILD v2.0.0
      </div>
    </div>
  );
};

export default HUD;
