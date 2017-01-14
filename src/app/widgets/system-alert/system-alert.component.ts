import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AlertType, Alert} from '../../models/Alert';


@Component({
    selector: 'system-alert',
    templateUrl: 'system-alert.component.html',
    styleUrls: ['system-alert.component.css']
})
export class SystemAlertComponent implements OnInit {
    @Input()
    public alert: Alert;
    @Output()
    alertEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public isDistress(): boolean {
        return this.alert.type == AlertType.DISTRESS;
    }

    public isSuspiciousActivity(): boolean {
        return this.alert.type == AlertType.SUSPICIOUS_ACTIVITY;
    }

    dismiss(alertId: number) {
        this.alertEvent.emit(new AlertEvent(AlertEventType.DISMISS, alertId));
    }

    notifyNearby(alertId: number) {
        this.alertEvent.emit(new AlertEvent(AlertEventType.NOTIFY_NEARBY, alertId));
    }

    viewAlertDetails(alertId: number) {
        this.alertEvent.emit(new AlertEvent(AlertEventType.VIEW, alertId));
    }

    dispatchVehicle(alertId: number) {
        this.alertEvent.emit(new AlertEvent(AlertEventType.DISPATCH_VEHICLE, alertId));
    }

    getBackgroundClass(type:string):string{
        switch (type){
            case AlertType.DISTRESS:
                return 'red-low-opacity';
            case AlertType.FALSE_ALARM:
                return 'green-low-opacity';
            case AlertType.SUSPICIOUS_ACTIVITY:
                return 'yellow-low-opacity';
        }
    }

}

export class AlertEvent {
    constructor(alertType: AlertEventType, alertId: number) {
        this.type = alertType;
        this.id = alertId;
    }

    type: AlertEventType;
    id: number;
}

export enum AlertEventType{
    DISMISS, NOTIFY_NEARBY, VIEW, DISPATCH_VEHICLE
}
