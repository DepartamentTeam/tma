
export function getShortCompanyName(companyName: string) : string {
    if (companyName.match(/[-]+/g)) {
       var arr = companyName.trim().split("-")
        return arr[0].trim()[0] + arr[1].trim()[0]
    } else if (companyName.split(" ").length > 0) {
        var arr = companyName.split(" ")
        return arr[0][0] + arr[1][0]
    } else {
       return companyName[0]
    }
}


export function getShortSalary(salary: string) : string {
    
    if (salary == "") {
        return ""
    }

    if (!salary) {
        return ""
    }
    var highSalaryRange = salary.split(" - ")[1]
    var period = highSalaryRange.split("/")[1]
    
    if (salary.match(/[,]+/g)) {
    var res =  highSalaryRange.split(",")[0]
    return res + "K" + "/" + period
    } else {
        var res =  highSalaryRange.split(".")[0]
        return res + "/" + period
    }
}


