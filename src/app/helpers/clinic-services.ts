import { Languaje } from "./languaje";


const languaje = new Languaje(localStorage.getItem('lan')?? '');
const services = [{
        type: '',
        items: [
            languaje.Extractions,
            languaje.Periodontal,
            languaje.Fillings,
            languaje.Implants,
            languaje.Bone_Grafts,
            languaje.Root_Canals,
            languaje.Partials,
        ]
    },{
        type: '',
        items: [
            languaje.Bridges,
            languaje.Dentures,
            languaje.Cleanings,
            languaje.Crown_Lenthening,
            languaje.Crowns,
            languaje.Bleaching,
        ]
    },{
        type: '',
        items: [
            languaje.All_On_X,
            languaje.Sinus_Lift,
            languaje.Sedation,
            languaje.Guards,
        ]
    }

];

export default services;

