import Rx, { Observable, Subject, Scheduler } from 'rx';

// 1
{
  // source observable sequence or
  // the other observable sequence on timeout

  Observable
    .just(1)
    .delay(100)
    .timeout(110, Observable.just(2))
    .subscribe(::console.log);

  // source observable sequence or timeout error sequence
  Observable
    .just('hooy')
    .delay(100)
    .timeout(50)
    .subscribe(
      _ => console.log('everything is fine'),       // normal sequence
      (err) => console.log('error: ', err.message), // error sequence
      _ => console.log('completed')                 // completion sequence
    );

  // variations

  Observable
    .just('lol')
    .delay(1000)
    .timeout(100, new Error('Custom error'))
    .subscribe(
      _ => _,
        (err) => console.log(err.message)
    );
}

// 2
/*
{
  Observable.range(1, 3)
    .delay(new Date(Date.now() + 2000))
    .subscribe(::console.log);
}
*/
