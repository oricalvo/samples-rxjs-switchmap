var Rx = require("rxjs");

//
//  The timer emits event every 5 seconds
//
const source = Rx.Observable.timer(0, 5000);

//
//  interval emits event every 500 milliseconds and returns and incremented number
//  switchMap waits for timer emit. Once an event is raised it "switches" to the interval
//  stream and detach from it once a new timer event is emitted and starts all over
//

const example = source.switchMap(() => Rx.Observable.interval(400));

const subscribe = example.subscribe(val => console.log(val));
