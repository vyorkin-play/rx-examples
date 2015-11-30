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
/*
{
  const a = Observable.of(1, 2, 3);
  const b = Observable.of(4, 5, 6);

  a.merge(b).subscribe(::console.log);
}
*/

// 4
/*
{
  const subj1 = new Subject();
  const subj2 = new Subject();

  subj1.merge(subj2).subscribe(::console.log);

  subj1.onNext('burn');
  subj2.onNext('motherfucker');
  subj1.onNext('burn');
}
*/

// 5
{
  const evens = Observable.of(2, 4, 6, 8);
  const odds = Observable.of(1, 3, 5, 7, 9);

  const groups = ['even', 'odd'];

  odds.merge(evens)
    .groupBy(n => n % 2)
    .subscribe(g => {
      const group = groups[g.key];
      g.average().subscribe(avg => console.log(`${group} avg: `, avg));
      g.subscribe(n => console.log(`${group}: `, n))
    });
}
