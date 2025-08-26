const mapNames = {
    "lmx_ardennes": "Trifigniac-les-choux, Ardennes, France",
    "lmx_sud": "Maratea, Potenza, Italie",
    "lmx_sudfrforma": "Centre de formation, Moissac, France",
    "lmx_falaise_v2g": "Falaise, Normandie, France",
}

function getMapName( mapname ) {
    if ( !mapNames[mapname] ) return mapname;

    return mapNames[mapname];
}

const advices = [
    "N'oubliez pas de faire le plein de carburant !",
    "Conduire nécessite une formation !",
    "Faites attention au tireurs d'élite soviétiques, ils sont sans pitié et ne vous laisseront pas les repérer!",
    "Les blindés constituent un soutien à l'infanterie, protégez les et ils vous protégeront !",
    "Un char demande un équipage complet pour fonctionner de manière efficace.",
    "Restez à couvert lors d'un échange de tirs, le génie laisse des sacs de sables, ceux-ci ne servent pas de décorations !",
    "Il ne faut pas un tank pour détruire un tank, les canons anti-char et les fusils sans-recul peuvent faire l'affaire.",
    "Tirer debout ne présente que des défauts, manque de stabilité, de précision et de couverture !",
    "Votre vie dépend dépend de vos actions, de votre discipline et de votre couverture!",
    "Pensez à tirer le bon obus selon votre cible, Hautement Explosif pour l'infanterie, Perce-Armure pour les blindés.",
    "La ruse est importante au combat, elle peut vous sauver la mise !",
    "Vous n'êtes pas né ranger, jager ou troupe de choc... Votre fusil ne vous permet pas la capture d'un avant-poste à vous tout seul.",
    "Les promotions se méritent, elles ne se comptent pas à la montre, certains mènent une 'carrière' de caporal.",
    "Attaqué par une de ces saloperies de Stuka ? Utilisez le matériel antiaérien ou demandez à votre supérieur de faire son boulot.",
    "Vous rêvez de survoler les champs de bataille et de faire des massacres ? Engagez-vous dans l'armée de l'air !",
    "La patience est importante ! Elle joue beaucoup sur le moral des troupes !",
    "La composante principale d'une armée est la discipline!",
    "Votre arme est tout pour vous, ne la perdez jamais et entretenez-là !",
    "Si vous êtes officier, savoir tirer et connaître son arme par cœur ne sera plus si important, le plus important est la stratégie utilisée sur le front !",
    "Si vous voyez Ernest, fuyez !",
    "Une guerre ne doit jamais être équilibrée et c'est a vous de la déséquilibrer à votre avantage.",
    "Ernest Mann est un sous-officier assez spécial, vous êtes prévenu !",
    "Être tireur d'élite n'est pas une simple tâche, cela dépend de pour qui vous vous battez.",
    "Si vous êtes seul armé d’une pelle face à un char, courez, courez vite et très loin.",
    "La haine peut vous emmener très loin dans les rangs d'une armée fanatisée !",
    "L'armée compte sur vous, et pas l'inverse."
]

function getAdvice() {
    return advices[getRandomInt(advices.length - 1)];
}

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    const textMapName = document.getElementById( "text-map-name" );
    textMapName.innerHTML = getMapName( mapname );

    // var lastImage = getMapImage( mapname );
    // var lastAdvice = getAdvice()

    // CreatePicture( lastImage, lastAdvice );

    // setInterval( () => {
    //     var image = getMapImage( mapname );
    //     while ( image == lastImage ) image = getMapImage( mapname );
        
    //     var advice = getAdvice( mapname );
    //     while ( advice == lastAdvice ) advice = getAdvice();
        
    //     CreatePicture( image, advice );

    //     lastImage = image;
    //     lastAdvice = advice;
    // }, 10000 );
}