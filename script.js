const players = [];
const gen1Pokemon = [
    { name: "Bulbasaur", growthRate: "Medium Slow" },
    { name: "Ivysaur", growthRate: "Medium Slow" },
    { name: "Venusaur", growthRate: "Medium Slow" },
    { name: "Charmander", growthRate: "Medium Slow" },
    { name: "Charmeleon", growthRate: "Medium Slow" },
    { name: "Charizard", growthRate: "Medium Slow" },
    { name: "Squirtle", growthRate: "Medium Slow" },
    { name: "Wartortle", growthRate: "Medium Slow" },
    { name: "Blastoise", growthRate: "Medium Slow" },
    { name: "Caterpie", growthRate: "Medium Fast" },
    { name: "Metapod", growthRate: "Medium Fast" },
    { name: "Butterfree", growthRate: "Medium Fast" },
    { name: "Weedle", growthRate: "Medium Fast" },
    { name: "Kakuna", growthRate: "Medium Fast" },
    { name: "Beedrill", growthRate: "Medium Fast" },
    { name: "Pidgey", growthRate: "Medium Slow" },
    { name: "Pidgeotto", growthRate: "Medium Slow" },
    { name: "Pidgeot", growthRate: "Medium Slow" },
    { name: "Rattata", growthRate: "Medium Fast" },
    { name: "Raticate", growthRate: "Medium Fast" },
    { name: "Spearow", growthRate: "Medium Fast" },
    { name: "Fearow", growthRate: "Medium Fast" },
    { name: "Ekans", growthRate: "Medium Fast" },
    { name: "Arbok", growthRate: "Medium Fast" },
    { name: "Pikachu", growthRate: "Medium Fast" },
    { name: "Raichu", growthRate: "Medium Fast" },
    { name: "Sandshrew", growthRate: "Medium Fast" },
    { name: "Sandslash", growthRate: "Medium Fast" },
    { name: "Nidoran♀", growthRate: "Medium Slow" },
    { name: "Nidorina", growthRate: "Medium Slow" },
    { name: "Nidoqueen", growthRate: "Medium Slow" },
    { name: "Nidoran♂", growthRate: "Medium Slow" },
    { name: "Nidorino", growthRate: "Medium Slow" },
    { name: "Nidoking", growthRate: "Medium Slow" },
    { name: "Clefairy", growthRate: "Fast" },
    { name: "Clefable", growthRate: "Fast" },
    { name: "Vulpix", growthRate: "Medium Fast" },
    { name: "Ninetales", growthRate: "Medium Fast" },
    { name: "Jigglypuff", growthRate: "Fast" },
    { name: "Wigglytuff", growthRate: "Fast" },
    { name: "Zubat", growthRate: "Medium Fast" },
    { name: "Golbat", growthRate: "Medium Fast" },
    { name: "Oddish", growthRate: "Medium Slow" },
    { name: "Gloom", growthRate: "Medium Slow" },
    { name: "Vileplume", growthRate: "Medium Slow" },
    { name: "Paras", growthRate: "Medium Fast" },
    { name: "Parasect", growthRate: "Medium Fast" },
    { name: "Venonat", growthRate: "Medium Fast" },
    { name: "Venomoth", growthRate: "Medium Fast" },
    { name: "Diglett", growthRate: "Medium Fast" },
    { name: "Dugtrio", growthRate: "Medium Fast" },
    { name: "Meowth", growthRate: "Medium Fast" },
    { name: "Persian", growthRate: "Medium Fast" },
    { name: "Psyduck", growthRate: "Medium Fast" },
    { name: "Golduck", growthRate: "Medium Fast" },
    { name: "Mankey", growthRate: "Medium Fast" },
    { name: "Primeape", growthRate: "Medium Fast" },
    { name: "Growlithe", growthRate: "Slow" },
    { name: "Arcanine", growthRate: "Slow" },
    { name: "Poliwag", growthRate: "Medium Slow" },
    { name: "Poliwhirl", growthRate: "Medium Slow" },
    { name: "Poliwrath", growthRate: "Medium Slow" },
    { name: "Abra", growthRate: "Medium Slow" },
    { name: "Kadabra", growthRate: "Medium Slow" },
    { name: "Alakazam", growthRate: "Medium Slow" },
    { name: "Machop", growthRate: "Medium Slow" },
    { name: "Machoke", growthRate: "Medium Slow" },
    { name: "Machamp", growthRate: "Medium Slow" },
    { name: "Bellsprout", growthRate: "Medium Slow" },
    { name: "Weepinbell", growthRate: "Medium Slow" },
    { name: "Victreebel", growthRate: "Medium Slow" },
    { name: "Tentacool", growthRate: "Slow" },
    { name: "Tentacruel", growthRate: "Slow" },
    { name: "Geodude", growthRate: "Medium Slow" },
    { name: "Graveler", growthRate: "Medium Slow" },
    { name: "Golem", growthRate: "Medium Slow" },
    { name: "Ponyta", growthRate: "Medium Fast" },
    { name: "Rapidash", growthRate: "Medium Fast" },
    { name: "Slowpoke", growthRate: "Medium Fast" },
    { name: "Slowbro", growthRate: "Medium Fast" },
    { name: "Magnemite", growthRate: "Medium Fast" },
    { name: "Magneton", growthRate: "Medium Fast" },
    { name: "Farfetch’d", growthRate: "Medium Fast" },
    { name: "Doduo", growthRate: "Medium Fast" },
    { name: "Dodrio", growthRate: "Medium Fast" },
    { name: "Seel", growthRate: "Medium Fast" },
    { name: "Dewgong", growthRate: "Medium Fast" },
    { name: "Grimer", growthRate: "Medium Fast" },
    { name: "Muk", growthRate: "Medium Fast" },
    { name: "Shellder", growthRate: "Slow" },
    { name: "Cloyster", growthRate: "Slow" },
    { name: "Gastly", growthRate: "Medium Slow" },
    { name: "Haunter", growthRate: "Medium Slow" },
    { name: "Gengar", growthRate: "Medium Slow" },
    { name: "Onix", growthRate: "Medium Fast" },
    { name: "Drowzee", growthRate: "Medium Fast" },
    { name: "Hypno", growthRate: "Medium Fast" },
    { name: "Krabby", growthRate: "Medium Fast" },
    { name: "Kingler", growthRate: "Medium Fast" },
    { name: "Voltorb", growthRate: "Medium Fast" },
    { name: "Electrode", growthRate: "Medium Fast" },
    { name: "Exeggcute", growthRate: "Slow" },
    { name: "Exeggutor", growthRate: "Slow" },
    { name: "Cubone", growthRate: "Medium Fast" },
    { name: "Marowak", growthRate: "Medium Fast" },
    { name: "Hitmonlee", growthRate: "Medium Fast" },
    { name: "Hitmonchan", growthRate: "Medium Fast" },
    { name: "Lickitung", growthRate: "Medium Fast" },
    { name: "Koffing", growthRate: "Medium Fast" },
    { name: "Weezing", growthRate: "Medium Fast" },
    { name: "Rhyhorn", growthRate: "Slow" },
    { name: "Rhydon", growthRate: "Slow" },
    { name: "Chansey", growthRate: "Fast" },
    { name: "Tangela", growthRate: "Medium Fast" },
    { name: "Kangaskhan", growthRate: "Medium Fast" },
    { name: "Horsea", growthRate: "Medium Fast" },
    { name: "Seadra", growthRate: "Medium Fast" },
    { name: "Goldeen", growthRate: "Medium Fast" },
    { name: "Seaking", growthRate: "Medium Fast" },
    { name: "Staryu", growthRate: "Slow" },
    { name: "Starmie", growthRate: "Slow" },
    { name: "Mr. Mime", growthRate: "Medium Fast" },
    { name: "Scyther", growthRate: "Medium Fast" },
    { name: "Jynx", growthRate: "Medium Fast" },
    { name: "Electabuzz", growthRate: "Medium Fast" },
    { name: "Magmar", growthRate: "Medium Fast" },
    { name: "Pinsir", growthRate: "Slow" },
    { name: "Tauros", growthRate: "Slow" },
    { name: "Magikarp", growthRate: "Slow" },
    { name: "Gyarados", growthRate: "Slow" },
    { name: "Lapras", growthRate: "Slow" },
    { name: "Ditto", growthRate: "Medium Fast" },
    { name: "Eevee", growthRate: "Medium Fast" },
    { name: "Vaporeon", growthRate: "Medium Fast" },
    { name: "Jolteon", growthRate: "Medium Fast" },
    { name: "Flareon", growthRate: "Medium Fast" },
    { name: "Porygon", growthRate: "Medium Fast" },
    { name: "Omanyte", growthRate: "Medium Fast" },
    { name: "Omastar", growthRate: "Medium Fast" },
    { name: "Kabuto", growthRate: "Medium Fast" },
    { name: "Kabutops", growthRate: "Medium Fast" },
    { name: "Aerodactyl", growthRate: "Slow" },
    { name: "Snorlax", growthRate: "Slow" },
    { name: "Articuno", growthRate: "Slow" },
    { name: "Zapdos", growthRate: "Slow" },
    { name: "Moltres", growthRate: "Slow" },
    { name: "Dratini", growthRate: "Slow" },
    { name: "Dragonair", growthRate: "Slow" },
    { name: "Dragonite", growthRate: "Slow" },
    { name: "Mewtwo", growthRate: "Slow" },
    { name: "Mew", growthRate: "Slow" }

];

const expTable = {
    "Fast": { 1: 0, 2: 6, 3: 21, 4: 51, 5: 100, 6: 172, 7: 274, 8: 409, 9: 583, 10: 800, 11: 1064, 12: 1382, 13: 1757, 14: 2195, 15: 2700, 16: 3276, 17: 3930, 18: 4665, 19: 5487, 20: 6400, 21: 7408, 22: 8518, 23: 9733, 24: 11059, 25: 12500, 26: 14060, 27: 15746, 28: 17561, 29: 19511, 30: 21600, 31: 23832, 32: 26214, 33: 28749, 34: 31443, 35: 34300, 36: 37324, 37: 40522, 38: 43897, 39: 47455, 40: 51200, 41: 55136, 42: 59270, 43: 63605, 44: 68147, 45: 72900, 46: 77868, 47: 83058, 48: 88473, 49: 94119, 50: 100000, 51: 106120, 52: 112486, 53: 119101, 54: 125971, 55: 133100, 56: 140492, 57: 148154, 58: 156089, 59: 164303, 60: 172800, 61: 181584, 62: 190662, 63: 200037, 64: 209715, 65: 219700, 66: 229996, 67: 240610, 68: 251545, 69: 262807, 70: 274400, 71: 286328, 72: 298598, 73: 311213, 74: 324179, 75: 337500, 76: 351180, 77: 365226, 78: 379641, 79: 394431, 80: 409600, 81: 425152, 82: 441094, 83: 457429, 84: 474163, 85: 491300, 86: 508844, 87: 526802, 88: 545177, 89: 563975, 90: 583200, 91: 602856, 92: 622950, 93: 643485, 94: 664467, 95: 685900, 96: 707788, 97: 730138, 98: 752953, 99: 776239, 100: 800000 },
    "Medium Fast": { 1: 0, 2: 8, 3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729, 10: 1000, 11: 1331, 12: 1728, 13: 2197, 14: 2744, 15: 3375, 16: 4096, 17: 4913, 18: 5832, 19: 6859, 20: 8000, 21: 9261, 22: 10648, 23: 12167, 24: 13824, 25: 15625, 26: 17576, 27: 19683, 28: 21952, 29: 24389, 30: 27000, 31: 29791, 32: 32768, 33: 35937, 34: 39304, 35: 42875, 36: 46656, 37: 50653, 38: 54872, 39: 59319, 40: 64000, 41: 68921, 42: 74088, 43: 79507, 44: 85184, 45: 91125, 46: 97336, 47: 103823, 48: 110592, 49: 117649, 50: 125000, 51: 132651, 52: 140608, 53: 148877, 54: 157464, 55: 166375, 56: 175616, 57: 185193, 58: 195112, 59: 205379, 60: 216000, 61: 226981, 62: 238328, 63: 250047, 64: 262144, 65: 274625, 66: 287496, 67: 300763, 68: 314432, 69: 328509, 70: 343000, 71: 357911, 72: 373248, 73: 389017, 74: 405224, 75: 421875, 76: 438976, 77: 456533, 78: 474552, 79: 493039, 80: 512000, 81: 531441, 82: 551368, 83: 571787, 84: 592704, 85: 614125, 86: 636056, 87: 658503, 88: 681472, 89: 704969, 90: 729000, 91: 753571, 92: 778688, 93: 804357, 94: 830584, 95: 857375, 96: 884736, 97: 912673, 98: 941192, 99: 970299, 100: 1000000 },
    "Medium Slow": { 1: 0, 2: 9, 3: 57, 4: 96, 5: 135, 6: 179, 7: 236, 8: 314, 9: 419, 10: 560, 11: 742, 12: 973, 13: 1261, 14: 1612, 15: 2035, 16: 2535, 17: 3120, 18: 3798, 19: 4575, 20: 5460, 21: 6458, 22: 7577, 23: 8825, 24: 10208, 25: 11735, 26: 13411, 27: 15244, 28: 17242, 29: 19411, 30: 21760, 31: 24294, 32: 27021, 33: 29949, 34: 33084, 35: 36435, 36: 40007, 37: 43808, 38: 47846, 39: 52127, 40: 56660, 41: 61450, 42: 66505, 43: 71833, 44: 77440, 45: 83335, 46: 89523, 47: 96012, 48: 102810, 49: 109923, 50: 117360, 51: 125126, 52: 133229, 53: 141677, 54: 150476, 55: 159635, 56: 169159, 57: 179056, 58: 189334, 59: 199999, 60: 211060, 61: 222522, 62: 234393, 63: 246681, 64: 259392, 65: 272535, 66: 286115, 67: 300140, 68: 314618, 69: 329555, 70: 344960, 71: 360838, 72: 377197, 73: 394045, 74: 411388, 75: 429235, 76: 447591, 77: 466464, 78: 485862, 79: 505791, 80: 526260, 81: 547274, 82: 568841, 83: 590969, 84: 613664, 85: 636935, 86: 660787, 87: 685228, 88: 710266, 89: 735907, 90: 762160, 91: 789030, 92: 816525, 93: 844653, 94: 873420, 95: 902835, 96: 932903, 97: 963632, 98: 995030, 99: 1027103, 100: 1059860 },
    "Slow": { 1: 0, 2: 10, 3: 33, 4: 80, 5: 156, 6: 270, 7: 428, 8: 640, 9: 911, 10: 1250, 11: 1663, 12: 2160, 13: 2746, 14: 3430, 15: 4218, 16: 5120, 17: 6141, 18: 7290, 19: 8573, 20: 10000, 21: 11576, 22: 13310, 23: 15208, 24: 17280, 25: 19531, 26: 21970, 27: 24603, 28: 27440, 29: 30486, 30: 33750, 31: 37238, 32: 40960, 33: 44921, 34: 49130, 35: 53593, 36: 58320, 37: 63316, 38: 68590, 39: 74148, 40: 80000, 41: 86151, 42: 92610, 43: 99383, 44: 106480, 45: 113906, 46: 121670, 47: 129778, 48: 138240, 49: 147061, 50: 156250, 51: 165813, 52: 175760, 53: 186096, 54: 196830, 55: 207968, 56: 219520, 57: 231491, 58: 243890, 59: 256723, 60: 270000, 61: 283726, 62: 297910, 63: 312558, 64: 327680, 65: 343281, 66: 359370, 67: 375953, 68: 393040, 69: 410636, 70: 428750, 71: 447388, 72: 466560, 73: 486271, 74: 506530, 75: 527343, 76: 548720, 77: 570666, 78: 593190, 79: 616298, 80: 640000, 81: 664301, 82: 689210, 83: 714733, 84: 740880, 85: 767656, 86: 795070, 87: 823128, 88: 851840, 89: 881211, 90: 911250, 91: 941963, 92: 973360, 93: 1005446, 94: 1038230, 95: 1071718, 96: 1105920, 97: 1140841, 98: 1176490, 99: 1212873, 100: 1250000 },
    "Fluctuating": { 1: 0, 2: 4, 3: 13, 4: 32, 5: 65, 6: 112, 7: 178, 8: 276, 9: 393, 10: 540, 11: 745, 12: 967, 13: 1230, 14: 1591, 15: 1957, 16: 2457, 17: 3046, 18: 3732, 19: 4526, 20: 5440, 21: 6482, 22: 7666, 23: 9003, 24: 10506, 25: 12187, 26: 14060, 27: 16140, 28: 18439, 29: 20974, 30: 23760, 31: 26811, 32: 30146, 33: 33780, 34: 37731, 35: 42017, 36: 46656, 37: 50653, 38: 55969, 39: 60505, 40: 66560, 41: 71677, 42: 78533, 43: 84277, 44: 91998, 45: 98415, 46: 107069, 47: 114205, 48: 123863, 49: 131766, 50: 142500, 51: 151222, 52: 163105, 53: 172697, 54: 185807, 55: 196322, 56: 210739, 57: 222231, 58: 238036, 59: 250562, 60: 267840, 61: 281456, 62: 300293, 63: 315059, 64: 335544, 65: 351520, 66: 373744, 67: 390991, 68: 415050, 69: 433631, 70: 459620, 71: 479600, 72: 507617, 73: 529063, 74: 559209, 75: 582187, 76: 614566, 77: 639146, 78: 673863, 79: 700115, 80: 737280, 81: 765275, 82: 804997, 83: 834809, 84: 877201, 85: 908905, 86: 954084, 87: 987754, 88: 1035837, 89: 1071552, 90: 1122660, 91: 1160499, 92: 1214753, 93: 1254796, 94: 1312322, 95: 1354652, 96: 1415577, 97: 1460276, 98: 1524731, 99: 1571884, 100: 1640000 }

};

document.getElementById("addPlayerBtn").addEventListener("click", addPlayer);
document.getElementById("addPokemonBtn").addEventListener("click", confirmAddPokemon);
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("pokemonModal").style.display = "none";
});

let selectedPlayerIndex = null;

// Populate Pokémon dropdown
const pokemonSelect = document.getElementById("pokemonSelect");
gen1Pokemon.forEach(pokemon => {
    let option = document.createElement("option");
    option.value = pokemon.name;
    option.textContent = pokemon.name;
    pokemonSelect.appendChild(option);
});

function addPlayer() {
    const playerName = prompt("Enter player name:");
    if (!playerName) return;

    const player = {
        name: playerName,
        pokemon: []
    };
    players.push(player);
    updateUI();
}

function updateUI() {
    const container = document.getElementById("playersContainer");
    container.innerHTML = "";
    players.forEach((player, index) => {
        let playerDiv = document.createElement("div");
        playerDiv.className = "player";
        playerDiv.innerHTML = `<h2>${player.name}</h2>
            <button onclick="showPokemonModal(${index})">Add Pokémon</button>`;

        player.pokemon.forEach((poke, pIndex) => {
            let pokeDiv = document.createElement("div");
            pokeDiv.className = "pokemon";
            pokeDiv.innerHTML = `<p>${poke.name} (Lvl ${poke.level})</p>
                <button onclick="addExp(${index}, ${pIndex})">Add EXP</button>`;
            playerDiv.appendChild(pokeDiv);
        });

        container.appendChild(playerDiv);
    });
}

function showPokemonModal(playerIndex) {
    selectedPlayerIndex = playerIndex;
    document.getElementById("pokemonModal").style.display = "block";
}

function confirmAddPokemon() {
    if (selectedPlayerIndex === null) return;
    
    const selectedPokemonName = pokemonSelect.value;
    const pokemonData = gen1Pokemon.find(p => p.name === selectedPokemonName);
    
    players[selectedPlayerIndex].pokemon.push({
        name: pokemonData.name,
        level: 1,
        exp: 0,
        growthRate: pokemonData.growthRate
    });

    document.getElementById("pokemonModal").style.display = "none";
    updateUI();
}

function addExp(playerIndex, pokeIndex) {
    const expGain = parseInt(prompt("Enter EXP amount:"), 10);
    if (isNaN(expGain) || expGain <= 0) return;
    
    let pokemon = players[playerIndex].pokemon[pokeIndex];
    pokemon.exp += expGain;

    // Get the Pokémon's growth rate and experience thresholds
    let growthRate = pokemon.growthRate;
    let expThresholds = expTable[growthRate];

    // Level up if experience exceeds next level's requirement
    while (pokemon.level < 100 && pokemon.exp >= expThresholds[pokemon.level + 1]) {
        pokemon.level++;
    }

    updateUI();
}