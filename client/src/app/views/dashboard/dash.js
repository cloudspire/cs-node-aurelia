var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-framework';
import { FnTs } from '../../models/FnTs';
let Dash = class Dash {
    constructor(fn) {
        this.fn = fn;
        this.toggle_visibility = {
            dash_panel: 'show'
        };
    }
    attached() {
        this.app_events = this.fn.ea.subscribe('react', (event) => {
            if (this[event.event_name] != null) {
                this[event.event_name](event.data);
            }
        });
    }
    detached() {
        this.app_events.dispose();
    }
    //event-aggregator handlers
    toggleDashPanel(state) {
        if (state) {
            this.toggle_visibility.dash_panel = 'show';
        }
        else {
            this.toggle_visibility.dash_panel = 'hide';
        }
    }
};
Dash = __decorate([
    inject(FnTs),
    __metadata("design:paramtypes", [FnTs])
], Dash);
export { Dash };
