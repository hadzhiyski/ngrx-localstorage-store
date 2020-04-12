import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CounterActions from '../../store/actions/counter.actions';
import { ICounterState } from '../../store/reducers/counter.reducer';
import { selectCurrentCount } from '../../store/selectors/counter.selectors';

@Component({
  selector: 'app-counter-index',
  templateUrl: './counter-index.component.html',
  styleUrls: ['./counter-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterIndexComponent {
  count$ = this.store.pipe(select(selectCurrentCount));

  constructor(private store: Store<ICounterState>) {}

  add(): void {
    this.store.dispatch(CounterActions.add());
  }

  subtract(): void {
    this.store.dispatch(CounterActions.subtract());
  }
}
