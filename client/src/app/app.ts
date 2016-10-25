import {inject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";
import {FnTs} from './models/FnTs';

@inject(Router, FnTs)
export class App {

    app_events: any;

    constructor(private router: Router, private fn: FnTs) {
        this.loadRouter();
        this.appLoaded();
    }

    private loadRouter() {
        this.router.configure((config: RouterConfiguration): RouterConfiguration => {
            config.title = "Aurelia";
            config.map([
                { route: ['', 'dash'], name: 'dash', moduleId: './views/dashboard/dash', nav: true, title: 'Dashboard' },
                { route: ['functional'], name: 'functional', moduleId: './views/functional/functional', nav: true, title: 'Functional' }
            ]);
            return config;
        });
    }

    private loadEventHandlers() {
        this.app_events = this.fn.ea.subscribe('react', (event: any) => {
            if (event.target_name == "app") {
                if (this[event.event_name] != null) { this[event.event_name](event.data); }
            }
        });
    }

    private appLoaded() {
        
    }

    //event-aggregator handlers
    private loadRoute(route: string) {
        this.router.navigate(route);
    }
}