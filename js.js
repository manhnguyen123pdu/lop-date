class date{
    day;
    month;
    year;
    constructor(day, month, year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
    getDay(){
        return day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){
        this.day=day;
    }
    setYear(month){
        this.day=mounth;
    }
    setYear(year){
        this.day=year;
    }
    toString(){
        return this.day+"/"+this.month+"/"+this.year;
    }
}
 

let day1=new date(20,11,1997)