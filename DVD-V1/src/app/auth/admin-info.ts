export class AdminInfo {
    name: string
    username: string;
    email: string;
    password: string;
    nameOnCard: string;
    cardNumber: string;
    expMonth: string;
    cvv: number;
    expYear: string;
    fullname: string;
    address: string;
    city: string;
    zip: number;
    state: string;
    active: boolean = true;
 
    role: string[];
 
     constructor(name:string, nameOnCard: string, cardNumber: string, expMonth: string, cvv: number, expYear: string, fullname: string,
         email: string, address: string, city: string, zip: number, state: string, username: string, password: string, active: boolean){
             this.name = name;
             this.nameOnCard = nameOnCard;
             this.cardNumber = cardNumber;
             this.expMonth = expMonth;
             this.cvv = cvv;
             this.expYear = expYear;
             this.fullname = fullname;
             this.email = email;
             this.address = address;
             this.city = city;
             this.zip = zip;
             this.state = state;
             this.username = username;
             this.password = password;
             this.active = active;
         this.role = ['admin'];
     }
 
}