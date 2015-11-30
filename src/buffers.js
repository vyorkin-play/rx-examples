import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';

// 1
{
  Observable.interval(100)              // each 1/10 sec
    .buffer(Observable.interval(1000))  // buffer in seconds
    .take(10)                           // first 10 secs only
    .subscribe(::console.log);
}

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
// bufferWithTime
{
}
