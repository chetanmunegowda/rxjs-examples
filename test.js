
var Rx = require('rxjs');

// a way of simulating store
var A$ = new Rx.BehaviorSubject('A');
var B$ = new Rx.BehaviorSubject('B');
var C$ = new Rx.BehaviorSubject('C');



var noTakeOne$ = Rx.Observable.combineLatest(A$, B$, C$);
noTakeOne$.subscribe( (abc) => {
     console.log('1 (take all) - ','a,b,c = ', abc);
});

var takeOne$ = noTakeOne$.take(1);
takeOne$.subscribe( (abc) => {
    console.log('2 (takeone) - ','a,b,c = ', abc);
});

// store initial value could be null, but suddenly changes to not null,
// filter on small case simulates !null
var a$ = A$.filter(v => v == 'a');
var b$ = B$.filter(v => v == 'b');
var c$ = C$.filter(v => v == 'c');
var mutationOfStore$ = Rx.Observable.combineLatest(a$, b$, c$).take(1);

// fire after 2 seconds - simulating store value (changes from null to not null
setTimeout(() => { A$.next('a'); B$.next('b'); C$.next('c'); } , 2000);

// fire after 5 seconds - store value (submission modification)
setTimeout(() => { A$.next('x'); B$.next('y'); C$.next('z'); } , 5000);

mutationOfStore$.subscribe( (abc) => {
    console.log('3 (takeone) - ','a,b,c = ', abc);
});
