

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.es'];

for(let i = 0; i < pronoun.length; i++) {
  for(let j = 0; j < adj.length; j++) {
    for(let k = 0; k < noun.length; k++) {
      for(let l = 0; l < domain.length; l++) {
        // eslint-disable-next-line no-console
        console.log(pronoun[i]+adj[j]+noun[k]+domain[l]);
      }
      
      
    }

  }


}