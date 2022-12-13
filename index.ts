import './style.css';

import { of, map, Observable, interval, Subject, multicast } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

import { publish, refCount, take } from 'rxjs/operators';

const tick$ = interval(1000).pipe(take(3));

const sharedTick$ = tick$.pipe(multicast(new Subject()), refCount());
// const sharedTick$ = tick$.pipe(publish(), refCount());

sharedTick$.subscribe((value) => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe((value) => console.log('observer 2: ' + value));
}, 5000);
