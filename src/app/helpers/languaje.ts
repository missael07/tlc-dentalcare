export class Languaje{
    //#region  Header
    public services: string = "";
    public clinic: string = "";
    public doctors: string = "";
    public location: string = "";
    public contact: string = "";
    //#endregion Header
    //#region Clinic
    public clinicSubTitle: string = '';
    //#endregion Clinic
    //#region Doctors
    public generalDenstistry: string = '';
    public Root_Canal_Specialist: string = '';
    public General_Implant_Specialist: string = '';
    //#endregion Doctors
    //#region Location
    public locationAddress: string = '';
    public getDirections: string = '';
    //#endregion Location
    //#region Contact
    public moreInformation: string = '';
    //#endregion Contact
    //#region Services
    public cirjuries: string = "";
    public costmetics: string = "";
    public others: string = "";
    public Extractions: string = '';
    public Periodontal: string = '';
    public Fillings: string = '';
    public Implants: string = '';
    public Bone_Grafts: string = '';
    public Root_Canals: string = '';
    public Partials: string = '';
    public Bridges: string = '';
    public Dentures: string = '';
    public Cleanings: string = '';
    public Crown_Lenthening: string = '';
    public Crowns: string = '';
    public Bleaching: string = '';
    public All_On_X: string = '';
    public Sinus_Lift: string = '';
    public Sedation: string = '';
    public Guards: string = '';
    //#endregion Services
    
    public animateDelay: boolean = true;

    constructor(private lan: string){
        if(lan.toUpperCase() != 'ES' && lan.toUpperCase() != 'EN') lan = 'EN';
        localStorage.setItem('lan', lan);
        this.setLanguaje(lan);
    }
    setLanguaje(lan:string){
        if(lan.toUpperCase() === 'ES'){
            //#region  Header
            this.services = 'Servicios';
            this.clinic = 'Clínica'
            this.doctors = 'Médicos'
            this.location = 'Ubicación'
            this.contact = 'Contacto'
            //#endregion Header
            //#region Clinic
            this.clinicSubTitle = `TLC Dental es una empresa de propiedad y operación familiar. 
            Ya sea que necesite un chequeo de rutina o un tratamiento más extenso, ofrecemos una amplia variedad de porcedimientos 
            dentales que se adaptan de manera única a sus necesidades y las de su familia.
            Además, nuestro amable personal garantiza que su visita a nuestra oficina sea asequible y cómoda.`;
            //#endregion Clinic
            //#region Doctors
            this.generalDenstistry = 'Odontología general';
            this.Root_Canal_Specialist = 'Especialista en conducto radicular';
            this.General_Implant_Specialist = 'Especialista general e implantes';
            //#endregion Doctors
            //#region Location
            this.locationAddress = 'Av. A entre tercera y cuarta Los Algodones B.C México';
            this.getDirections = 'Obtener Direcciones';
            //#endregion Location
            //#region Contact
            this.moreInformation = 'Para más información no dude en contactarnos por télefono al ';
            //#endregion Contact
            //#region Services
            this.cirjuries = "Quirurjicos";
            this.costmetics = "Cosmeticos";
            this.others = "Otros";
            this.Extractions  = 'Extracciones';
            this.Periodontal  = 'Periodontales';
            this.Fillings  = 'Rellenos';
            this.Implants  = 'Implantes';
            this.Bone_Grafts  = 'Injertos óseos';
            this.Root_Canals  = 'Endodoncias';
            this.Partials  = 'Parciales';
            this.Bridges  = 'Puentes';
            this.Dentures  = 'Dentadura Postiza';
            this.Cleanings  = 'Limpiezas';
            this.Crown_Lenthening  = 'Cuaresma de la corona';
            this.Crowns  = 'coronas';
            this.Bleaching  = 'blanqueamiento';
            this.All_On_X  = 'todo en X';
            this.Sinus_Lift  = 'Elevacion de seno';
            this.Sedation  = 'Sedación IV';
            this.Guards  = 'Guardias';
            //#endregion Services
        } else {
            
            //#region  Header
            this.services = 'Services';
            this.clinic = 'Clinic'
            this.doctors = 'Doctors'
            this.location = 'Location'
            this.contact = 'Contact'
            //#endregion Header
            //#region Clinic
            this.clinicSubTitle = `TLC DENTAL is a family owned and operated business, 
            Whether you need a routine checkup or more extensive treatment, 
            we offer a wide variety of dental procedures to uniquely fit you and your family needs. 
            In addition, our friendly staff ensures your visit to our office is affordable and comfortable.`;
            //#endregion Clinic
            //#region Doctors
            this.generalDenstistry = 'General Denstistry';
            this.Root_Canal_Specialist = 'Root Canal Specialist';
            this.General_Implant_Specialist = 'General & Implant Specialist';
            //#endregion Doctors
            //#region Location
            this.locationAddress = 'Ave. "A" between 3rd & 4th Los Algodones B.C. México';
            this.getDirections = 'Get Directions';
            //#endregion Location
            //#region Contact
            this.moreInformation = 'For more information do not hesitate to contact us by phone at ';
            //#endregion Contact
            //#region Services
            this.cirjuries = "Cirjuries";
            this.costmetics = "Cosmetics";
            this.others = "Others";
            this.Extractions  = 'Extractions';
            this.Periodontal  = 'Periodontal';
            this.Fillings  = 'Fillings';
            this.Implants  = 'Implants';
            this.Bone_Grafts  = 'Bone Grafts';
            this.Root_Canals  = 'Root Canals';
            this.Partials  = 'Partials';
            this.Bridges  = 'Bridges';
            this.Dentures  = 'Dentures';
            this.Cleanings  = 'Cleanings';
            this.Crown_Lenthening  = 'Crown Lenthening';
            this.Crowns  = 'Crowns';
            this.Bleaching  = 'Bleaching';
            this.All_On_X  = 'All On X';
            this.Sinus_Lift  = 'Sinus Lift';
            this.Sedation  = 'Sedation';
            this.Guards  = 'Guards';
            //#endregion Services
        }
        
    }
}