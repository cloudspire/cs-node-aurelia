var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable } from 'aurelia-framework';
import { FnTs } from '../models/FnTs';
let FaToggle = class FaToggle {
    constructor(fn) {
        this.fn = fn;
        this.toggle = () => {
            if (this.state == 'on') {
                this.toggle_on = 'hide';
                this.toggle_off = 'show';
                this.state = 'off';
            }
            else {
                this.toggle_on = 'show';
                this.toggle_off = 'hide';
                this.state = 'on';
            }
            if (this.event != null) {
                var status = this.state == 'on';
                this.fn.ea.publish('react', { event_name: this.event, data: status });
            }
        };
        this.toggle_on = 'show';
        this.toggle_off = 'hide';
    }
    attached() {
        if (this.state != 'on') {
            this.toggle_on = 'hide';
        }
    }
};
FaToggle = __decorate([
    bindable({ name: 'state', defaultValue: 'on' }),
    bindable({ name: 'event', defaultValue: null }),
    inject(FnTs),
    __metadata("design:paramtypes", [FnTs])
], FaToggle);
export { FaToggle };
