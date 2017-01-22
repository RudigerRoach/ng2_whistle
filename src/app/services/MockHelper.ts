import {AlertType, Alert} from '../models/Alert';
import {DispatchVehicle} from '../models/DispatchVehicle';


export class MockHelper {
    public static arrCount: number = 0;
    nextId: number = 0;
    static nextName:number = 0;
    public static mockAlerts: any[];
    static names:string[] = [
        "Mr S. Skow",
        "Ms L. Lesser",
        "Mr S. Sankey",
        "Ms N. Newhart",
        "Mr S. Sarvis",
        "Ms G. Gloss",
        "Mr L. Linton",
        "Ms G. Grove",
        "Mr G. Gorden",
        "Mr I. Ibanez",
        "Ms N. Nevers",
        "Mr A. Alto",
        "Ms A. Aikens",
        "Ms L. Livesay",
        "Mr R. Reach",
        "Ms F. Frasca",
        "Mr J. Jacquet",
        "Ms B. Bock",
        "Ms C. Conroy",
        "Mr J. Joyner"
    ];

    static coordinates:{}[]=[
            {lat:-25.699247, long:28.227304},
            {lat:-25.686640, long:28.225081},
            {lat:-25.687821, long:28.206890},
            {lat:-25.698085, long:28.179863},
            {lat:-25.720781, long:28.186495},
            {lat:-25.746825, long:28.207964},
            {lat:-25.750914, long:28.241394},
            {lat:-25.765876, long:28.231239},
            {lat:-25.757064, long:28.244388},
            {lat:-25.753034, long:28.243519},
            {lat:-25.815728, long:28.208902},
            {lat:-25.810890, long:28.199995},
            {lat:-25.783805, long:28.233458},
            {lat:-25.857406, long:28.222755},
            {lat:-25.853048, long:28.207683},
            {lat:-25.845450, long:28.195838},
            {lat:-25.892210, long:28.169743},
            {lat:-25.892210, long:28.169743},
            {lat:-25.866320, long:28.150204},
            {lat:-25.864679, long:28.153916}
    ];

    public static getNextNameIndex():number{
        MockHelper.nextName = (++MockHelper.nextName % MockHelper.names.length);
        return MockHelper.nextName;
    }

    constructor() {
        MockHelper.mockAlerts = [];
        MockHelper.mockAlerts.push(this.getNextDistress);
        MockHelper.mockAlerts.push(this.getNextFalseAlarm);
        MockHelper.mockAlerts.push(this.getNextSuspiciousActivity);
    }

    public getNextAlert(): Alert {
        MockHelper.arrCount = (++MockHelper.arrCount % MockHelper.mockAlerts.length);
        let alert: Alert = MockHelper.mockAlerts[MockHelper.arrCount](MockHelper.arrCount);
        alert.id = ++this.nextId;

        return alert;
    }

    public getNextDistress(index?:number): Alert {
        if(!index){
            index = MockHelper.getNextNameIndex();
        }
        let mock: Alert = new Alert();
        let nextNameIndex = MockHelper.getNextNameIndex();
        mock.latitude = MockHelper.coordinates[nextNameIndex]['lat'];
        mock.longitude = MockHelper.coordinates[nextNameIndex]['long'];
        mock.userName = MockHelper.names[nextNameIndex];
        mock.type = AlertType.DISTRESS;
        mock.id = ++this.nextId;
        mock.iconUrl = 'public/assets/img/Distress.png';
        return mock;
    }

    public getNextFalseAlarm(index?:number): Alert {
        if(!index){
            index = MockHelper.getNextNameIndex();
        }
        let mock: Alert = new Alert();
        let nextNameIndex = MockHelper.getNextNameIndex();
        mock.latitude = MockHelper.coordinates[nextNameIndex]['lat'];
        mock.longitude = MockHelper.coordinates[nextNameIndex]['long'];
        mock.userName = MockHelper.names[nextNameIndex];
        mock.type = AlertType.FALSE_ALARM;
        mock.id = ++this.nextId;
        mock.iconUrl = 'public/assets/img/False_Alarm.png';
        return mock;
    }

    public getNextSuspiciousActivity(index?:number): Alert {
        if(!index){
            index = MockHelper.getNextNameIndex();
        }
        let mock: Alert = new Alert();
        let nextNameIndex = MockHelper.getNextNameIndex();
        mock.latitude = MockHelper.coordinates[nextNameIndex]['lat'];
        mock.longitude = MockHelper.coordinates[nextNameIndex]['long'];
        mock.userName = MockHelper.names[nextNameIndex];
        mock.type = AlertType.SUSPICIOUS_ACTIVITY;
        mock.id = ++this.nextId;
        mock.iconUrl = 'public/assets/img/Suspicious_Activity.png';
        return mock;
    }


    public makeFalseAlarm(alerts: Alert[]): Alert {
        for (let i: number = 0; i < alerts.length; i++) {
            if (alerts[i].type === AlertType.DISTRESS) {
                alerts[i].type = AlertType.FALSE_ALARM;
                alerts[i].iconUrl = 'public/assets/img/False_Alarm.png';
                return alerts[i];
            }
        }
        return null;
    }

    public getMockDispatchVehicles(): DispatchVehicle[] {
        let ptaCar: DispatchVehicle = <DispatchVehicle>{};
        ptaCar.latitude = -25.733113;
        ptaCar.longitude = 28.298407999999995;
        ptaCar.iconUrl = 'public/assets/img/Patrol_Car.png';

        let clnCar: DispatchVehicle = <DispatchVehicle>{};
        clnCar.latitude = -25.6749203;
        clnCar.longitude = 28.4658821;
        clnCar.iconUrl = 'public/assets/img/Patrol_Car.png';

        let rtnCar: DispatchVehicle = <DispatchVehicle>{};
        rtnCar.latitude = -25.7027853;
        rtnCar.longitude = 28.2117256;
        rtnCar.iconUrl = 'public/assets/img/Patrol_Car.png';

        return [ptaCar, clnCar, rtnCar];
    }


}