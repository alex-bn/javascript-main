// USER STORIES // - > // FEATURES // - > // FLOWCHART // - > // ARCHITECTURE //

// 1)
// USER STORIES // In the real world is always important to start with a planning phase before starting any project, for small and medium projects we can use USER STORIES approach. A user Story is a description of the application's functionality from the user's perspective. All user stories put together describe the entire application.

// Common format: As a [type of user], I want[an action] so that [benefit] (relevant as long as the user stories describe what the application will do)

// As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep a log of all my running.
// As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain, so that I can keep a log of all my cycling.
// As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
// As a user, I want to also see my workouts on a map, so I can easily check where I workout the most.
// As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

// boils down to:

// User Stories:                                                                          Features:
//1)Log my running workouts with location, distance, time, pace and steps/minute.    *Map where user clicks to add new workout(best way to get location coordinates)
//2)Log my cycling workouts with location, distance, time, speed and elevation gain  *Geolocation to display map at current location(more user friendly)
//3)See all my workouts at a glance                                                  *Form to input distance, time, pace, steps/minute
//4)See my workouts on a maps                                                        *Form to input distance, time, speed, elevation gain
//5)See all my workouts when I leave he app and come back labelTimer                 *Display all workouts in a list
//                                                                                   *Display all workouts on the map
//                                                                                   *Store data in the browser using the local storage API
//                                                                                   *On page load, read the saved data from local storage and display
//                                                                                   *Move map to workout location on click
//
//
// Flowchart will contain all of the features that need to be implemented but also how the different components should interact with each other, which event makes sense to implement and also how data flows across the application.
