#!/usr/bin/env node
import rpsls from "../lib/rpsls.js";
import minimist from "minimist";

// Use minimist process command line arguments
const args = minimist(process.argv.slice(2));

// Handle help command
if ("h" in args || "help" in args) {
    console.log(
`
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

-h, --help      display this help message and exit
-r, --rules     display the rules and exit

Examples:
node-rps        Return JSON with single player RPS result.
                e.g. {"player":"rock"}
node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                e.g {"player":"rock","opponent":"scissors","result":"win"}
`
    );
    process.exit(0);
}

// Handle rules command
if ("r" in args || "rules" in args) {
    console.log(
`
Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors
`
    );
    process.exit(0);
}

// Check if arguments out of range
if (args._.length > 1) {
    console.error("Arguments out of range.");
    console.log(
`
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}

Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors          
`
    );
    process.exit(0);
}
// Check if no arguments passed
else if (args._.length === 0) {
    console.log(JSON.stringify(rpsls.rpsDefault()));
}
// Check if single argument passed
else {
    let playerChoice = args._[0].toLowerCase();
    if (rpsls.rpsChoices.includes(playerChoice)) {
        console.log(JSON.stringify(rpsls.rps(playerChoice)));
    }
    else {
        console.error(
`
Invalid argument.
Acceptable arguments: rock | paper | scissors
`
        );
        console.log(
`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors          
`
        );
    }
}
