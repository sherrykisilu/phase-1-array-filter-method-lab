// Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(drivers,string){
    return drivers.filter(driver=>driver.toLowerCase()==string.toLowerCase())
}
// console.log(findMatching(drivers,"Bobby"));
function fuzzyMatch(drivers,string){
    return drivers.filter((driver=>driver.startsWith(string)));
}
function matchName(drivers,string){
    return drivers.filter((driver=>driver.name==string))
}