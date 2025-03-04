import { type iObserver } from "../observers/iObserver.ts"

export abstract class SubjectAbstract {
    
    protected observers: iObserver[];

    constructor() {
        this.observers = [];
    }

    public attachObserver(observer: iObserver): void {
        this.observers.push(observer);
    }

    protected notify(subject: SubjectAbstract): void {
        for (let observer of this.observers) {
            observer.update(subject);
        }
    }
}