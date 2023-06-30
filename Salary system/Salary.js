const basicSalary = 50000
const alllowances = 20000

function calculateKRATax(basicSalary) {
    const TaxableIncome = basicSalary - 16000;
    const taxRate = 0.16;
    const KRAtax = TaxableIncome * taxRate;
    return KRAtax;
}


function calculateNHIFDeductions(basicSalary) {
    const NHIFdeductions = basicSalary * 0.05;
    return NHIFdeductions;
}

function calculateNSSFdeduction(basicSalary) {
    const NssfDeductions = basicSalary * 0.05;
    return NssfDeductions;
    
}



function netSalaryCalculator(basicSalary , alllowances) {
    const grossSalary = basicSalary + alllowances;
    const KRAtax = calculateKRATax * basicSalary;
    const NHIFdeductions = calculateNHIFDeductions * basicSalary;
    const NssfDeductions = calculateNSSFdeduction * basicSalary;
    const netSalary = grossSalary - KRAtax - NHIFdeductions - NssfDeductions
    return {
        grossSalary,
        KRAtax,
        NHIFdeductions,
        NssfDeductions,
        netSalary,
    }
}


 console.log(netSalaryCalculator(basicSalary , alllowances));