// Array of hobby sessions with day, hobby, time spent, and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Calculates total time spent on all hobbies using reduce
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Will show a list of unique hobbies using map and Set
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// Filters sessions longer than a given number of minutes
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Suggestion: I think the function name 'longSessions' could be clearer.
// Maybe something like 'filterByDuration' would better describe what it does.
// That way, it could be reused more easily for different types of filtering.


// Counts how many sessions had a certain mood
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

// Will show total time spent
console.log("Total time spent:", totalTime(hobbyLog), "minutes");

// Will show unique hobbies
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

// Will show sessions longer than 30 minutes
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

// Will show number of relaxed sessions
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
