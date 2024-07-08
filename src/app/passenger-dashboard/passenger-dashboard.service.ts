import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";//not header only its depricated
import { Injectable } from "@angular/core";
import { Passenger } from "./models/passenger.interface";
import { Observable } from "rxjs";
import { catchError, map }from 'rxjs/operators'//not catch only its depricated
import { throwError } from 'rxjs'; //not throw only its depricated
import {HttpErrorResponse} from '@angular/common/http'; 
//json server api for http
import { baseUrl } from "../app.module";


@Injectable()
export class PassengerDashboardService{
    constructor(private http:HttpClient){
        console.log(this.http);
        
    }
    getPassengers():Observable<any>{
        return this.http
        // .get("http://localhost:3000/passengers")//working
        // .get( api +"/passengers")//working //const api ="http://localhost:3000"
        .get( baseUrl +"/passengers")//working
        .pipe(
        // map((response)=> response))
            // catchError(this.errorhandle))
            //or
        catchError(error=> {
            //console.log("eoeoeoeoeoeoerrrr",error);   
            return throwError(error)
        }))
    }

    putPassengers(passenger:Passenger):Observable<any>{
        //header is not need for our application but for other may be need so we see how to create custom header 
        const header= new HttpHeaders({
            'Content-Type':  'application/json'
        })
        const options={ headers:header}

        return this.http
        .put( baseUrl +"/passengers/" + passenger.id , passenger,options)
        .pipe(
        //  map((response)=> response))
        catchError(this.errorhandle))
    }

    removePassengers(passenger:Passenger):Observable<any>{
        return this.http
        .delete( baseUrl +"/passengers/" + passenger.id )
        .pipe(
        // map((response)=> response))
            catchError(this.errorhandle))
    }

    //error handling method
    errorhandle(httpError:HttpErrorResponse){
    let emsg:string;
        
        if(httpError.error instanceof ErrorEvent){
            emsg = `Error: ${httpError.error.message}`
            console.log(`Error if ${emsg}`)
        }
        else{
            emsg=`Error Code:${httpError.status}\nMessage:${httpError.message}`
            console.log(`Error else mmmmmm ${emsg}`)
        } 
            return throwError(emsg);
    }

}