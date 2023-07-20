import { OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
@Directive({
    standalone: true,
})
export class BaseComponent implements OnDestroy {
    protected subscriptions = new Subscription();

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
        if (Array.isArray(this.subscriptions)) {
            this.subscriptions.forEach((s) => s.unsubscribe());
        }
    }

}

