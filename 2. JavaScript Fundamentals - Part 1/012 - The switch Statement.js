// used for strict comparison

const day = 1;

switch (day) {
    case 'monday': // day === monday
        console.log(`Plan A`);
        console.log(`..and plan B!`);
        break;
    case 'tuesday':
        console.log(`Fire Club`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log('javascript for the win');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log(`learning javascript`);
        break;
    default:
        console.log(`Are you a horse?`);
}

if (day === 'monday') {
    console.log('Plan A');
    console.log(`..and plan B!`);
} else if (day === 'tuesday') {
    console.log(`Fire Club`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('javascript for the win');
} else if (day === 'friday') {
    console.log(`Friday I'm in love`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log('learning javascript');
} else {
    console.log('Not a day in my calendar!');
}