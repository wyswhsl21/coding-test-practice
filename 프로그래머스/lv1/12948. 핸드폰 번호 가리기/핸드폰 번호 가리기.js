function solution(phone_number) {
    let answer = "";
    let num = phone_number.slice(-4)
    let star = '*'.repeat(phone_number.slice(0,-4).length)
    console.log(star)
       return answer = star + num
    }
// return star + num