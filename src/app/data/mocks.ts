import { User } from "../model/user";

export const USER_DATA : User[] =  [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1963"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    votes : 120,
    image : "assets/images/bill.jpg"
},
{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Dec 21, 1963"),
    income : 0,
    isWorking : false,
    company : "Apple",
    votes : 120,
    image : "assets/images/steve.png"
},
{
    firstName : "Larry",
    lastName : "Page",
    dob : new Date("Dec 21, 1963"),
    income : 50000,
    isWorking : true,
    company : "Google",
    votes : 120,
    image : "assets/images/tim.jpg"
}]