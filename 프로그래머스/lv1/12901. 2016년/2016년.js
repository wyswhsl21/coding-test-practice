function solution(a, b) {
    var answer = '';
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const dayIndex = new Date(2016, a-1, b).getDay();
    answer = days[dayIndex]
    return answer;
}