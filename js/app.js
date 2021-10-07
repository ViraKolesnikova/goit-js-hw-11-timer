import refs from './refs.js';
const { daysRef, hoursRef, minsRef, secsRef } = refs;

class CountdownTimer {
  
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate,
    this.selector = selector,
    this.deltaTime = 0  
  }

  start() {
    const currentDate = Date.now();
    const timeEnd = this.targetDate.getTime();
    this.deltaTime = timeEnd - currentDate;    
        
    setInterval(() => {
      this.deltaTime -=  1000;
      const timeLeft = this.dateTransform(this.deltaTime);
      this.changeMarkup(timeLeft);
      
    }, 1000)    
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  
  dateTransform(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
    return { days, hours, mins, secs };
  }

  changeMarkup({days, hours, mins, secs}) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }
}

const myBirthdayCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 23, 2022'),
});

myBirthdayCountdownTimer.start();
