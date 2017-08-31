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
let Functional = class Functional {
    constructor(fn) {
        this.fn = fn;
        this.testArgsSuccess = [
            new Promise(this.generateNumber),
            new Promise(this.generateNumber),
            new Promise(this.generateNumber),
            new Promise(this.generateNumber)
        ];
        this.testArgsError = [
            new Promise(this.promiseError),
            new Promise(this.generateNumber)
        ];
        this.toggle_visibility = {
            fnc_panel: 'show'
        };
        this.testSearchByKey = {
            x_1: {
                a_i_1: { x_i_j_1: [] },
                b_i_1: { b_i_j_1: { b_i_j_k_1: { value: 'fake_value' } }, b_i_j_2: [] },
                c_i_1: { c_i_j_1: [] },
            }
        };
        this.transform_data = (data) => {
            return this.fn.fn_Map(data, (val) => {
                return { num: val * 2 };
            });
        };
        this.loadData = (data) => {
            this.load_data = data;
            return 'load data complete';
        };
        this.greaterThanFive = (data) => {
            return this.fn.fn_Filter(data, (val) => {
                return val.num > 5;
            });
        };
        this.sortNumberArray = (data) => {
            return this.fn.fn_Sort(data, 'num', 'asc');
        };
        this.registerApiResponse = (data) => {
            console.log(data.data);
            return data;
        };
    }
    attached() {
        //example 1 - load data from testArgsSuccess
        this.fn.fn_Parallel(this.testArgsSuccess) //start async parallel processes
            .then(this.transform_data) //make async transforms
            .then(this.fn.logDir) //write result to console
            .then(this.loadData) //load data to view-model
            .then(this.fn.logText) //write completion status to console
            .catch(this.fn.logError); //will not get fired
        //example 2 - bubbling error handler
        this.fn.fn_Parallel(this.testArgsError) //this promise chain will intentionally error
            .then(this.transform_data) //will not get fired
            .then(this.fn.logDir) //will not get fired
            .then(this.loadData) //will not get fired
            .then(this.fn.logText) //will not get fired
            .catch(this.fn.logError); //single point to catch all exceptions   
        //example 3 - process elements > 5 from testArgsSuccess
        this.fn.fn_Parallel(this.testArgsSuccess) //start async parallel processes
            .then(this.transform_data) //make async transforms
            .then(this.greaterThanFive) //filter items
            .then(this.sortNumberArray) //sort by value, ascending
            .then(this.fn.logDir) //write result to console
            .catch(this.fn.logError); //will not get fired
        //example 4 - simple ajax request using promises
        this.fn.fn_Ajax({ url: '/api/hello' })
            .then(this.registerApiResponse);
        this.fn.fn_FindByKey(this.testSearchByKey, 'b_i_j_k_1')
            .then((data) => {
            var test = data;
        });
        this.fn.fn_FindByKey(this.testSearchByKey, 'b_i_j_k_1', 'bfs')
            .then((data) => {
            var test = data;
        });
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
    toggleFunctionalPanel(state) {
        if (state) {
            this.toggle_visibility.fnc_panel = 'show';
        }
        else {
            this.toggle_visibility.fnc_panel = 'hide';
        }
    }
    //sample promise handlers
    //use this style when running async proceesses
    generateNumber(res, err) {
        setTimeout(() => {
            var num = Math.floor(Math.random() * 6) + 1;
            res(num);
        }, 100);
    }
    promiseError(res, err) {
        setTimeout(() => {
            err(new Error('Promise - Example Error'));
        }, 100);
    }
};
Functional = __decorate([
    inject(FnTs),
    __metadata("design:paramtypes", [FnTs])
], Functional);
export { Functional };
