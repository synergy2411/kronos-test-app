import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    user = { name : "Foo"};

    constructor(private hc : HttpClient){}
    getHttp(){
        this.hc.get("http://date.jsontest.com")
            .do((res)=>{
                debugger;
                console.log(res);
            }).subscribe(data=>{
                console.log(data);
            })

    }
    getDetails(){
        
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Data");
            }, 1500)
        })
    }
}