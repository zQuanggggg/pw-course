// Viết hàm getTopStudents nhận 2 tham số:
// ● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
// ● threshold: ngưỡng điểm để được coi là "top" (số).
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
let students = [
    { "name": "Quang", "score": 10 },
    { "name": "Hanh", "score": 5 },
    { "name": "Nam", "score": 2 }
]
let threshold = 5;
function getTopStudents(students, threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
           console.log(students[i].name);
        }
    }
    return getTopStudents;
}
console.log(getTopStudents(students, threshold));