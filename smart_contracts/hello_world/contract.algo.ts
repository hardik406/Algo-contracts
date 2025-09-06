//*import { Contract } from '@algorandfoundation/algorand-typescript'

//export class HelloWorld extends Contract {
  //hello(name: string): string {
    //return `Hello, ${name}`
  //}
//}
import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'
//import { Contract, GlobalState, string } from '@algorandfoundation/algorand-typescript'

export class MedicalReport extends Contract {
  patient = GlobalState<string>({ key: "patient", initialValue: "none" })
  report = GlobalState<string>({ key: "report", initialValue: "none" })

  issueReport(name: string, rep: string): string {
    this.patient.value = name
    this.report.value = rep
    return "Medical report issued for " + name
  }
}