import {Mapable} from "./Mapable";
export class AlertType {
    static DISTRESS: string = "DISTRESS";
    static FALSE_ALARM: string = "FALSE_ALARM";
    static SUSPICIOUS_ACTIVITY: string = "SUSPICIOUS_ACTIVITY";
}
export class Alert extends Mapable{
    id: number;
    type: string;
    userName: string;
    alertTime: Date;


    constructor(){
        super();
        this.alertTime = new Date();
    }

    getPriority(): number {
        switch (this.type) {
            case AlertType.DISTRESS:
                return 1;
            case AlertType.SUSPICIOUS_ACTIVITY:
                return 2;
            case AlertType.FALSE_ALARM:
                return 3;
        }
    }
}
