import Rx, { Observable, Subject } from 'rx';
import R from 'ramda';
import { EventEmitter } from 'events';

// 1
{
  const e = new EventEmitter();

  Observable.fromEvent(e, 'code')
    .map(({ hours }) => hours)
    .filter(h => h > 2)
    .subscribe(::console.log);

  e.emit('code', { hours: 2 });
  e.emit('code', { hours: 4 });
  e.emit('sleep', { hours: 6 });
  e.emit('code', { hours: 12 });
  e.emit('sleep', { hours: 8 });
}
