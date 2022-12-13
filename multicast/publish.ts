import { interval, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

import { publish, refCount, take } from 'rxjs/operators';

const tick$ = interval(1000).pipe(take(3));
const sharedTick$ = tick$.pipe(publish(), refCount());

sharedTick$.subscribe((value) => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe((value) => console.log('observer 2: ' + value));
}, 5000);
