import { AbstractControl, ValidatorFn } from "@angular/forms";
// export function avoidWord(formControl:AbstractControl):{[errorName:string]:any}|null {
//   const notAllowed = /hack/.test(formControl.value);
//   if(notAllowed == true){
//     return{
//       porhibited:{value: formControl.value}
//     }
//   }else{
//     return null;
//   }

// }

export function avoidWord(regex: RegExp):ValidatorFn{
  return (formControl:AbstractControl):{[errorName:string]:any}|null => {
    const notAllowed = regex.test(formControl.value);
    if(notAllowed == true){
      return{
        porhibited:{value: formControl.value}
      }
    }else{
      return null;
    }
  }
}
