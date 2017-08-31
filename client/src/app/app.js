var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { FnTs } from './models/FnTs';
let App = class App {
    constructor(router, fn) {
        this.router = router;
        this.fn = fn;
        this.loadRouter();
        this.appLoaded();
    }
    loadRouter() {
        this.router.configure((config) => {
            config.title = "Aurelia";
            config.map([
                { route: ['', 'dash'], name: 'dash', moduleId: './views/dashboard/dash', nav: true, title: 'Dashboard' },
                { route: ['functional'], name: 'functional', moduleId: './views/functional/functional', nav: true, title: 'Functional' }
            ]);
            return config;
        });
    }
    loadEventHandlers() {
        this.app_events = this.fn.ea.subscribe('react', (event) => {
            if (event.target_name == "app") {
                if (this[event.event_name] != null) {
                    this[event.event_name](event.data);
                }
            }
        });
    }
    appLoaded() {
    }
    //event-aggregator handlers
    loadRoute(route) {
        this.router.navigate(route);
    }
};
App = __decorate([
    inject(Router, FnTs),
    __metadata("design:paramtypes", [Router, FnTs])
], App);
export { App };
