import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {PageBreadCrumb} from '../fragments/breadcrumbs/PageBreadCrumb';
import {Alert} from '../../models/Alert';
import {MockHelper} from '../../services/MockHelper';
import {MapsAPILoader} from 'angular2-google-maps/core';
import {FormControl} from '@angular/forms';
import {DispatchVehicle} from '../../models/DispatchVehicle';
import {ModalComponent} from 'ng2-bs3-modal/components/modal';
import {AlertEvent, AlertEventType} from '../../widgets/system-alert/system-alert.component';
import {ToasterService} from 'angular2-toaster';
declare var google: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild("search")
    public searchElementRef: ElementRef;
    @ViewChild('myModal')
    modal: ModalComponent;
    public searchControl: FormControl;

    breadcrumbs: PageBreadCrumb;
    alerts: Alert[];
    dispatchVehicles: DispatchVehicle[];
    lat: number = -25.733113;
    lng: number = 28.298407999999995;
    selectedUser: string = "";

    mockHelper: MockHelper;
    shouldReact: number = 0;


    @HostListener('window:keydown', ['$event'])
    handleHotKey($event: KeyboardEvent) {
        if(!$event.altKey) return;

        //the key event fires twice - ignore first fire as workaround
        this.shouldReact = (++this.shouldReact % 2);
        if (this.shouldReact === 0) return;

        switch ($event.keyCode) {
            case keyCodes.a:
                this.alerts.push(this.mockHelper.getNextAlert());
                break;
            case keyCodes.x:
                this.mockHelper.makeFalseAlarm(this.alerts);
                break;
            case keyCodes.s:
                this.alerts.push(this.mockHelper.getNextSuspiciousActivity());
                break;
            case keyCodes.z:
                this.alerts.push(this.mockHelper.getNextDistress());
                break;

        }
        console.log($event);
    }

    constructor(private mapsAPILoader: MapsAPILoader, public toasterService:ToasterService) {
    }

    ngOnInit() {
        this.breadcrumbs = <PageBreadCrumb>{};
        this.breadcrumbs.header = "Dashboard";
        this.breadcrumbs.subHeader = "An overview of the system";
        this.breadcrumbs.iconName = "fa-dashboard";
        this.breadcrumbs.trail = ["Dashboard"];

        this.alerts = [];
        this.mockHelper = new MockHelper();
        this.dispatchVehicles = this.mockHelper.getMockDispatchVehicles();

        this.searchControl = new FormControl();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //set latitude and longitude
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
            });
        });
    }

    handleAlertEvent(alertEvent: AlertEvent) {
        switch (alertEvent.type) {
            case AlertEventType.DISMISS:
                this.alerts = this.alerts.filter(alert => {
                    return alert.id !== alertEvent.id
                });
                break;
            case AlertEventType.NOTIFY_NEARBY:
                this.toasterService.pop('success', 'Success', 'Notifications where sent.');
                break;
            case AlertEventType.VIEW:
                this.toasterService.pop('info', 'Note', 'Functionality to view the details of an alert will be added shortly.');
                break;
            case AlertEventType.DISPATCH_VEHICLE:
                this.toasterService.pop('success', 'Note', 'A vehicle has been sent to this location');
                break;
        }
    }

    showSender() {
        if (this.alerts.length > 0) {
            this.modal.open();
        }
    }

    sortedAlerts():Alert[]{
        console.log('some change to force a refresh');
        return this.alerts.sort((a:Alert,b:Alert)=>{return a.getPriority() - b.getPriority()});
    }

}

export enum keyCodes{
    a = 65, //'random' alerts
    s = 83, //suspicious activity
    z = 90, //distress
    x = 88 //false alarm
}
