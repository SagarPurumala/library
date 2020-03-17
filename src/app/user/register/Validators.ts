

import { FormGroup } from "@angular/forms";


export function customValidators(group: FormGroup)
{
    let pass = group.value.password;
    let confirmpass= group.value.confirmpass;
    if(pass==confirmpass)
    {
        return null;
    }
    else{
        
        return {'custom' : true}
    }
}