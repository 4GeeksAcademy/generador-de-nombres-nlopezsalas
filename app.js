let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];

console.log("GENERADOR DE NOMBERES DE DOMINIOS");
console.log("---------------------------------");
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
            for (let l=0; l < domain.length; l++ )
            console.log(pronoun[i]+adj[j]+noun[k]+domain[l]);
        }
    }
}

console.log ("");
console.log("DOMAIN HACKS");
console.log("-----------------------------------------------");
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        let domainCrack = [];
        let domainStart = "";
        for (let i = 0; i < noun.length; i++) {
            for (let j = 0; j < noun[i].length - 2; j++) {
                domainStart += noun[i][j];
            }
            domainCrack[i] = domainStart;
            domainStart = ""
        }
        let domainHack = [];
        let domainEnd = "";
        for (let i = 0; i < noun.length; i++) {
            for (let j = noun[i].length - 2; j < noun[i].length; j++) {
                domainEnd += noun[i][j];
            }
            domainHack[i] = domainEnd;
            domainEnd = ""
        }
        for (let k = 0; k < noun.length; k++) {
            console.log(pronoun[i] + adj[j] + domainCrack[k] + '.' + domainHack[k]);
        }
    }
}







