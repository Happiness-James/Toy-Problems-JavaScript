// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs
//  of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, 
//  gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.
// - https://www.aren.co.ke/payroll/taxpayees.htm Links to an external site.
//  Links to an external site.-  Links to an external site.Links to an external site.
// - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

function getPayeeFromSalary(grossSalary){
    let payee = 0
    if(grossSalary <= 24000){
        payee = grossSalary*0.1

    }
    else if(grossSalary>24000 && grossSalary <=32333){
        payee = grossSalary*0.25
    
    }
    else if(grossSalary>32333){
        payee = grossSalary*0.3
    
    }
    return payee 
}

function getNHIFdeductions(grossSalary){
    let deduction = 0
    if(grossSalary <=5999){
        deduction = 150
    }
    else if(grossSalary >=6000 && grossSalary<=7999){
        deduction = 300
    }
    else if(grossSalary >=8000 && grossSalary<=11999){
        deduction = 400
    }
    else if(grossSalary >=12000 && grossSalary<=14999){
        deduction = 500
    }
    else if(grossSalary >=15000 && grossSalary<=19999){
        deduction = 600
    }
    else if(grossSalary >=20000 && grossSalary<=24999){
        deduction = 750
    }
    else if(grossSalary >=25000 && grossSalary<=29999){
        deduction = 850
    }
    else if(grossSalary >=30000 && grossSalary<=34999){
        deduction = 900
    }
    else if(grossSalary >=35000 && grossSalary<=39999){
        deduction = 950
    }
    else if(grossSalary >=40000 && grossSalary<=44999){
        deduction = 1000
    }
    else if(grossSalary >=45000 && grossSalary<=49999){
        deduction = 1100
    }
    else if(grossSalary >=50000 && grossSalary<=59999){
        deduction = 1200
    }
    else if(grossSalary >=60000 && grossSalary<=69999){
        deduction = 1300
    }
    else if(grossSalary >=70000 && grossSalary<=79999){
        deduction = 1400
    }
    else if(grossSalary >=80000 && grossSalary<=8999){
        deduction = 1500
    }
    else if(grossSalary >=90000 && grossSalary<=99999){
        deduction = 1600
    }
    else if(grossSalary >=100000){
        deduction = 1700
    }
    return deduction
}

function getNSSFdeductions(grossSalary){
    deduction = grossSalary*0.05
    if(deduction > 400){
        deduction = 400
    }
    return deduction
}

function netSalary(){
    const input1 = Number(document.getElementById('basic_salary').value)
    const input2 = Number(document.getElementById('benefit').value)
    let grossSalary = input1 + input2;

    let payeeRate = getPayeeFromSalary(grossSalary)
    let nhifRate = getNHIFdeductions(grossSalary);
    let nssfDeduction = getNSSFdeductions(grossSalary)
    let net = grossSalary - (payeeRate+nhifRate+nssfDeduction)
    

    document.getElementById("net").innerHTML = `your net salary is ${net}`
    document.getElementById("payee").innerHTML = `your payee tax is ${payeeRate}`
    document.getElementById("nhif").innerHTML =  `your NHIF deduction is ${nhifRate}`
    document.getElementById("nssf").innerHTML = `your NSSF deduction is ${nssfDeduction}`
    document.getElementById("gross").innerHTML = `your gross salary is ${grossSalary}`
}

