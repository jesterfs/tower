function makeGame(nDisks) {
  const firstPeg = [];
  for (let i=nDisks; i>0; i--)
    firstPeg.push(i);

  return [ firstPeg, [], []]
}

function solve(nDisks) {
  const game = makeGame(nDisks);

  function move(n, from, to) {

    if (n === 0) return;

    const aux = (0 !== from && 0 !== to) ? 0 
                  : (1 !== from && 1 !== to) ? 1
                    : 2;

    move(n-1, from, aux);
    game[to].push(game[from].pop());
    console.log(game)
    move(n-1, aux, to);
  }

  move(nDisks, 0, 2);

}

solve(5);