import moment from "moment-timezone";
import {v4 as uuid} from "uuid";

export default class List {
    constructor(task, deadline, tag) {
        this.id = uuid();
        this.task = task;
        this.deadline = deadline;
        this.tag = tag;
        this.done = false;
        this.createdDate = moment.tz(new Date(), "America/Sao_Paulo").format('DD/MM/YYYY HH:mm:ss');
    }

        changeDone(){
            this.done = !this.done;
        }

        editTask(newTask, newDeadline, newTag) {
            
            if (newTask) {
                this.task = newTask;
            }
            
            if (newDeadline) {
                this.deadline = newDeadline;
            }
            if (newTag) {
                this.tag = newTag;
            }

        }
}

