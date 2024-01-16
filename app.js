console.log("GENERADOR DE NOMBERES DE DOMINIOS");
console.log("---------------------------------");

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];

for (let i=0; i < pronoun.length; i++) {
    for (let j=0; j < adj.length; j++) {
        for (let k=0; k< noun.length; k++) {
            console.log(pronoun[i]+adj[j]+noun[k]);
        }
    }
}

console.log ("");
console.log("GENERADOR DE NOMBERES DE DOMINIOS CON EXTENSIÓN");
console.log("-----------------------------------------------");
for (let i=0; i < pronoun.length; i++) {
    for (let j=0; j < adj.length; j++) {
        for (let k=0; k < noun.length; k++) {
            for (let n=0; n < domain.length; n++ )
            console.log(pronoun[i]+adj[j]+noun[k]+domain[n]);
        }
    }
}