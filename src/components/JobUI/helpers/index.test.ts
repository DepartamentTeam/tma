import { expect, test } from 'vitest'
import { getShortCompanyName, getShortSalary } from ".";


test("Company-Name", () => {
    expect(getShortCompanyName("Company-Name")).toBe("CN");
}) 

test("Company - Name", () => {
    expect(getShortCompanyName("Company - Name")).toBe("CN");
}) 


test("Company Name", () => {
    expect(getShortCompanyName("Company Name")).toBe("CN");
}) 


// test("Salary: 100000", () => {
//     expect(getShortSalary("100000")).toBe("100K");
// }) 
//$140,000.00/yr - $210,000.00/yr

test("Salary: $140,000.00/yr - $210,000.00/yr", () => {
    expect(getShortSalary("$140,000.00/yr - $210,000.00/yr")).toBe("$210K/yr");
})

// $68.00/hr - $73.00/hr

test("Salary: $68.00/hr - $73.00/hr", () => {
    expect(getShortSalary("$68.00/hr - $73.00/hr")).toBe("$73/hr");
})

// 31550

// test("Salary: 31550", () => {
//     expect(getShortSalary("31550")).toBe("31K");
// })
