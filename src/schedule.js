import Rx, { Observable, Subject, Scheduler } from 'rx';

// 1
/*
{
  Scheduler.default.scheduleFuture(1, 100,
    (scheduler, state) => {
      console.log('future');
    }
  );

  console.log('present');
}
*/

