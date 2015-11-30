import Rx, { Observable, Subject } from 'rx';

// 1
/*
{
  Observable.range(1, 3)
    .flatMap(x => Observable.range(x, 2))
    .subscribe(::console.log);
}
*/

// 2
/*
{
  Observable.range(1, 10)
    .flatMap(x => Observable.if(
      _ => x % 2 === 0,
      Observable.range(x, 2),
      Observable.just(-1)
    ))
    .subscribe(::console.log);
}
*/

// 3
{
  Observable.just(123)
    .flatMap(
      x => Observable.case(
        _ => x, {
          1: Observable.just(30),
          3: Observable.just(42)
        },
        Observable.just('dunno')
      )
    )
    .subscribe(::console.log);
}
