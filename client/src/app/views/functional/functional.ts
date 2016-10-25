import {inject, bindable} from 'aurelia-framework';
import {FnTs} from '../../models/FnTs';

@inject(FnTs)
export class Functional {
    
    load_data: any;
    app_events: any;
    testArgsSuccess = [
        new Promise(this.generateNumber),
        new Promise(this.generateNumber),
        new Promise(this.generateNumber),
        new Promise(this.generateNumber)
    ];
    testArgsError = [
        new Promise(this.promiseError),
        new Promise(this.generateNumber)
    ];
    toggle_visibility: any = {
        panel_body_1: 'show'
    }

    constructor(private fn: FnTs) {  }

    attached(): void {
        //example 1 - load data from testArgsSuccess
        this.fn.fn_Parallel(this.testArgsSuccess)   //start async parallel processes
            .then(this.transform_data)              //make async transforms
            .then(this.fn.logDir)                   //write result to console
            .then(this.loadData)                    //load data to view-model
            .then(this.fn.logText)                  //write completion status to console
            .catch(this.fn.logError);               //will not get fired

        //example 2 - bubbling error handler
        this.fn.fn_Parallel(this.testArgsError)     //this promise chain will intentionally error
            .then(this.transform_data)              //will not get fired
            .then(this.fn.logDir)                   //will not get fired
            .then(this.loadData)                    //will not get fired
            .then(this.fn.logText)                  //will not get fired
            .catch(this.fn.logError);               //single point to catch all exceptions   

        //example 3 - process elements > 5 from testArgsSuccess
        this.fn.fn_Parallel(this.testArgsSuccess)   //start async parallel processes
            .then(this.transform_data)              //make async transforms
            .then(this.greaterThanFive)             //filter items
            .then(this.sortNumberArray)             //sort by value, ascending
            .then(this.fn.logDir)                   //write result to console
            .catch(this.fn.logError);               //will not get fired

        //example 4 - simple ajax request using promises
        this.fn.fn_Ajax({ url: '/api/hello' })
            .then(this.registerApiResponse);

        this.app_events = this.fn.ea.subscribe('react', (event: any) => {
            if (this[event.event_name] != null) { this[event.event_name](event.data); }
        });
                    
    }

    detached() {
        this.app_events.dispose();
    }

    transform_data = (data: any): any => {
        return this.fn.fn_Map(data, (val: number) => {
            return { num: val * 2 };
        });
    }
    
    loadData = (data: any): string => {
        this.load_data = data;
        return 'load data complete';
    }

    greaterThanFive = (data: any): any => {
        return this.fn.fn_Filter(data, (val: any) => {
            return val.num > 5;
        });
    }

    sortNumberArray = (data: any) => {
        return this.fn.fn_Sort(data, 'num', 'asc');
    }

    registerApiResponse = (data: any): any => {
        console.log(data.data);
        return data;
    }

    //event-aggregator handlers
    toggleFunctionalPanel(state: boolean): void {
        if (state) {
            this.toggle_visibility.panel_body_1 = 'show';
        } else {
            this.toggle_visibility.panel_body_1 = 'hide';
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
}