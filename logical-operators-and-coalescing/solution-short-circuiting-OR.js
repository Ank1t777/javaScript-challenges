const jobHunter = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    
/*
Solution:
*/  //👇
const jobHunterName = jobHunter.name || jobHunter.username;

console.log(`Hey ${jobHunterName}!`)