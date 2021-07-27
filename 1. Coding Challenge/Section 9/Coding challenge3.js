'use strict';

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1 -> create an array 'events' of the different game events that happened (no dupes)

const events = new Set([...gameEvents.values()]);
console.log(events);

// Jonas solution 

// I didn't converted the set to an array like the requirement!!!

const events1 = [...new Set(gameEvents.values())];
console.log(events1);

// 2 -> Remove the event at minute 64

console.log(gameEvents.delete(64));
console.log(gameEvents);

// 3 -> Print "An event happened, on average, every 9 minutes"

const nrEvents = 90 / gameEvents.size
console.log(`An event happened, on average, every ${nrEvents} minutes.`);

// Jonas BONUS:
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`);


// 4 Loop over gameEvents and log each elements to the console, marking the time of the event like this: [FIRST HALF] 17: Goal etc

for (const [key, value] of gameEvents) {
    const half = key <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${key}: ${value}`);
}