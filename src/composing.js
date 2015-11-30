import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';

// 1
/*
{
  let total = 0;

  Observable.from(R.range(1, 5))
    .sum()                          // reduce with sum
    .subscribe((n) => total = n);   // set total = n = sum(i) <- (happens only once)

  console.log(total);
}
*/

// 2
/*
{
  const all = [];
  const evens = [];
  const doubledEvens = [];

  let lessThan;

  Observable.from(R.range(1, 5))
    .tap(::all.push)
    .filter(n => n % 2 == 0)
    .tap(::evens.push)
    .map(n => n * 2)
    .tap(::doubledEvens.push)
    .every(n => n < 9)
    .subscribe(b => lessThan = b);

  console.log(all);
  console.log(evens);
  console.log(doubledEvens);
  console.log(lessThan);
}
*/

// 3
// merge
{
  const a = Observable.of(1, 2, 3);
  const b = Observable.of(4, 5, 6);

  a.merge(b).subscribe(::console.log);
}
