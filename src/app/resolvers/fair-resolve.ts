import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FairdataService } from "../services/fairdata.service";

@Injectable({
  providedIn: 'root'
})

//Tal y como lo tenemos hecho podemos implementar un Resolve de tipo any u Observable<any>
export class FairResolve implements Resolve<Observable<any>>{
  constructor(private readonly fairDataService: FairdataService){}

  //El resolve devuelve una promesa
  resolve(): Promise<any> {

    //Vamos a devolver uan promesa en el resolve, lo que hacemos es llamar al servicio, que a su vez
    //hace la petición al servidor y una vez esté resuelto y response tenga algo resolvemos la promesa.
    return new Promise<void>(
      (resolve, rejects) => {
        this.fairDataService.getFairData().subscribe(
          response => {
            if(response){
              resolve();
            }
          }
        );
      }
    )

  }

}
