(()=>{var n="https://api.chucknorris.io/jokes/random#";fetch(n).then((function(n){n.json().then((function(n){var o=n.id,e=n.value;console.log(o),console.log(e)}))})),fetch(n).then((function(n){return n.json()})).then((function(n){var o=n.id,e=n.value;return console.log(o,e)}))})();