import Puzzle from 'crypto-puzzle';

async function main() {
    const puzzle = await Puzzle.generate({
        opsPerSecond: 3_300_000,
        duration: 5_000, // Rough minimum number of milliseconds that this puzzle will be unsolvable for
        message: 'What is 2 + 2' // Message to encrypt inside the puzzle
    });

    const solution = await Puzzle.solve ( puzzle );

    // About 10 seconds later...

    console.log ( solution );
}

main();