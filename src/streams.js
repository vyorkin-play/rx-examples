import Rx, { Observable } from 'rx';

Observable.just(42).subscribe((x) => {
  console.log(x);
});
