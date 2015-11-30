import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';

// 1
/*
{
  Observable.interval(100)              // each 1/10 sec
    .buffer(Observable.interval(1000))  // buffer in seconds
    .take(10)                           // first 10 secs only
    .subscribe(::console.log);

  Observable.interval(100)
    .bufferWithTime(1000)               // this is the same as ^
    .take(3)
    .subscribe(::console.log);

  Observable.interval(50)
    .bufferWithTime(1000, 800)          // timespan, timeshift
    .take(5)
    .subscribe(::console.log);
}
*/

// 2
/*
{
  Observable.range(1, 5)
    .bufferWithCount(3)
    .subscribe(::console.log);
}
*/

// 3
/*
{
  Observable.range(1, 5)
    .bufferWithCount(3, 2)
    .subscribe(::console.log);
}
*/

// 4
// timeInterval
/*
{
  const subj = new Subject();

  subj
    .timeInterval()                   // measure the time between events
    .filter(t => t.interval > 150)    // slow down the shit flow
    .subscribe(::console.log);

  setTimeout(_ => subj.onNext('slow'), 100);
  setTimeout(_ => subj.onNext('down'), 200);   // ~= 100
  setTimeout(_ => subj.onNext('the'), 300);    // ~= 100
  setTimeout(_ => subj.onNext('shit'), 500);   // ~= 200
}
*/

// 5
// ambiguous (compete)
{
  const inc = Observable.timer(100).map(1);    // the winner
  const dec = Observable.timer(200).map(-1);

  const amb = inc.amb(dec);
  amb.subscribe(::console.log);
}
