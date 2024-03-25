
const basic =  parseFloat(prompt('Enter your basic salary:'));  // prompt user to enter salary and benefits
const benefits =  parseFloat(prompt('Enter your benefits(allowances):'));
    if (isNaN(basic)){
         console.log('Invalid input.Enter a number')
         
        }
function calculateGrossSalary(){   // calculate gorss salary
   const gross = basic + benefits;
  return gross;

}
// calculateGrossSalary(); 
function calculateNssf (){   // function to calculate NSSF deductions
   const gross = calculateGrossSalary()
   if (gross > 0 && gross <= 7000){
    return 420;
   }else if (gross > 7000 && gross <= 36000){
    return gross * 0.06;
   }else {
    return 2160;
   }
}

function calculateNhif(){   // function to calculate NHIF deductions
    const gross = calculateGrossSalary()
    if (gross > 0 && gross < 6000){
        return 150;
    }else if (gross >= 6000 && gross < 8000){
        return 300;
    }else if (gross >= 8000 && gross < 12000){
        return 400;
    }else if (gross >= 12000 && gross < 15000){
        return 500;
    }else if (gross >= 15000 && gross < 20000){
        return 600;
    }else if (gross >= 20000 && gross < 25000){
        return 750;
    }else if (gross >= 25000 && gross < 30000){
        return 850;
    }else if (gross >= 30000 && gross < 35000){
        return 900;
    }else if (gross >= 35000 && gross < 40000){
        return 950;
    }else if (gross >= 40000 && gross < 45000){
        return 1000;
    }else if (gross >= 45000 && gross < 50000){
        return 1100;
    }else if (gross >= 50000 && gross < 60000){
        return 1200;
    }else if (gross >= 60000 && gross < 70000){
        return 1300;
    }else if (gross >= 70000 && gross < 80000){
        return 1400;
    }else if (gross >= 80000 && gross < 90000){
        return 1500;
    }else if (gross >= 90000 && gross < 100000){
        return 1600;
    }else {
        return 1700;
    }
}

function calculatePaye(){     // function to calculate PAYE
    const gross = calculateGrossSalary()
    const nssf = calculateNssf()
    const taxableInc = gross - nssf
if (taxableInc > 0 && taxableInc <= 24000){
    return taxableInc *  0.01
}else if (taxableInc > 24000 && taxableInc <= 32333){
    let diff = ((taxableInc - 24000) * 0.25) + 2400
    return diff 
}else if (taxableInc > 32333 && taxableInc <= 500000){
    let diff = ((taxableInc - 32333) * 0.3) + 4483
    return diff 
}else if (taxableInc > 500000 && taxableInc <= 800000){
    let diff = ((taxableInc - 500000) * 0.325) + 154483
    return diff
}else{
    let diff = ((taxableInc - 800000) * 0.35) + 414483
    return diff
}                                               //returns PAYE depending on tax bracket
}

function calculateNetSalary(){
    const nhif = calculateNhif();
    const paye = calculatePaye();
    const totalTax = paye + nhif;
    const gross = calculateGrossSalary();
return gross - totalTax;                 // calculates and returns Net Salary
}

function main(){
    const netSal = calculateNetSalary()
    console.log(`Your Net salary is ${netSal}`)  // display Net Salary
}

main()
