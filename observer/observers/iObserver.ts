import { SubjectAbstract } from "../subject/SubjectAbstract.ts";

export interface iObserver {
    
    update(subject: SubjectAbstract): void;
}