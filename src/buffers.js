import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';

// 1
/*
{
  Observable.range(1, 5)
    .bufferWithCount(3)
    .subscribe(::console.log);
}
*/

// 2
{
  Observable.range(1, 5)
    .bufferWithCount(3, 2)
    .subscribe(::console.log);
}
