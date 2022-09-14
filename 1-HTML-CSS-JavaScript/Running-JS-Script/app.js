const day = 6;
// 1 - Monday
// 2 - Tuesday
// if (day === 1) {
//     console.log('Monday');
// } else if (day === 2) {
//     console.log('Tuesday');
// } else if (day === 2) {
//     console.log('Wednesday');
// } else if (day === 3) {
//     console.log('Thursday');
// } else if (day === 4) {
//     console.log('Friday');
// } else {
//     console.log('I dont know that');
// }

switch (day) {
    case 1:
        console.log('HELLO!!!!');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
    case 7:
        console.log('WEEKEND');
        break;
    default:
        console.log('I dont know that');
}