var Rx = require('rxjs');

// Functions are Pull systems, the consumer determines when to get the data
function fooFn() {
  console.log('Hello');
  return 42;
}

var x = fooFn.call(); // same as foo()
console.log(x);
var y = fooFn.call(); // same as foo()
console.log(y);

// Observables are Push systems, the producer determines when to send the data
var observable = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);

  // setTimeout(() => {
  //   observer.next(300);
  // }, 1000);
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});

// Observables can be both syncronous and asynchronous
console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');

// You can an observable by using the stati create method and passing it the observer function
var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi')
  }, 1000);
});

observable.subscribe(x => console.log(x));

// An Observable can deliver multiple values over time
var observable = Rx.Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (err) {
    observer.error(err); // delivers an error if it caught one
  }
});

// You can dispose of a subscription and cleanup using the subscription that is returned from subscribing
var observable = Rx.Observable.create(function subscribe(observer) {
  // Keep track of the interval resource
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalID);
  };
});

var unsubscribe = observable.subscribe(x => console.log(x));
unsubscribe(); //clear the interval!

// A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
// Every Subject is an Observable and an Observer

// You can subscribe to a subject just like any of Observable
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// You can call next, error, and complete, just like any other Observer
subject.next(1);
subject.next(2);

// A BehaviorSubject is a type of subject that keeps track of the latest value and sends it to any new Observers immediately
var subject = new Rx.BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);
// yields:
// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
