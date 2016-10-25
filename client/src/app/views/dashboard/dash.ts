import {inject, bindable} from 'aurelia-framework';
import {FnTs} from '../../models/FnTs';

@inject(FnTs)
export class Dash {
    
    app_events: any;
    toggle_visibility: any = {
        panel_body_1: 'show'
    }

    constructor(private fn: FnTs) {  }

    attached(): void {
        this.app_events = this.fn.ea.subscribe('react', (event: any) => {
            if (this[event.event_name] != null) { this[event.event_name](event.data); }
        });                    
    }

    detached() {
        this.app_events.dispose();
    }

    //event-aggregator handlers
    toggleDashPanel(state: boolean): void {
        if (state) {
            this.toggle_visibility.panel_body_1 = 'show';
        } else {
            this.toggle_visibility.panel_body_1 = 'hide';
        }
    }
}