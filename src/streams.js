import Rx, { Observable, Subject } from 'rx';

// 1
/*
{
  Observable.just(42).subscribe((x) => {
    console.log(x);
  });
}
*/

// 2
{
  const sentence = [];
  const subj = new Subject();

  const subscription = subj.subscribe(::sentence.push);
  subj.tap((w) => console.log(w));

  subj.onNext('get');
  subj.onNext('your');
  subj.onNext('hands');

  subscription.dispose();

  subj.onNext('dirty');

  console.log(sentence);
}
