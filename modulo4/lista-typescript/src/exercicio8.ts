// 8 

const issueRG = (birthData: string, issueDate: string): boolean => {
    const currentYear: number = new Date().getFullYear()
    const formatBirthData: string[] = birthData.split("/")
    const formatYearOfBirth: string[] = issueDate.split("/")
    const age: number = currentYear - Number(formatBirthData[2])
    const checkWallet: number = currentYear - Number(formatYearOfBirth[2])

    const condition1: boolean = currentYear - age <= 20 && currentYear - checkWallet >= 5
    const condition2: boolean = age < 20 && age <= 50 && currentYear - checkWallet >= 10
    const condition3: boolean = age > 50 && currentYear - checkWallet >= 15
    return (condition1 || condition2 || condition3)

}

console.log(issueRG("11/11/1997", "14/05/2014"))