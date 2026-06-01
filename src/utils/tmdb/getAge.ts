function getAge(birthday: string | null | undefined, deathday: string | null | undefined) {
    if (!birthday) return null

    const [birthYear, birthMonth, birthDay] = birthday
        .split("-")
        .map(Number)

    const referenceDate = deathday ? deathday.split("-").map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]

    const [refYear, refMonth, refDay] = referenceDate

    let age = refYear - birthYear

    const birthdayPassed = refMonth > birthMonth || (refMonth === birthMonth && refDay >= birthDay)

    if (!birthdayPassed) {
        age--
    }

    return age
}

export default getAge