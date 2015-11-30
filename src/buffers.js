import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';

// 1
{
  Observable.timer(0, 100)
    .buffer(Observable.interval(100))
    .take(3)
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
