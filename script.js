const dörr = prompt("Du öppnar ögonen. Rummet du befinner dig i är obekant och dunkelt. 'Hur hamnade jag här' undrar du. Efter några ögonblick vänjer sig dina ögon vid det svaga ljuset i rummet. De enda ljuskällorna i rummet verkar vara små levande ljus, till synes slumptmässigt placerade längs med väggarna. Rummet saknar helt inredning och väggarna, golvet och taket verkar vara kall sten. Du kan dock se att i varje vägg finns en dörr. En grön dörr, en röd, en blå och en gul dörr. Du beslutar dig för att öppna en av dörrarna. Vilken väljer du?")
const kammaren = true
const skogen = true
const fältet = true

if (dörr == "den gröna") {
    prompt("Du kliver igenom den gröna dörren och blir genast bländad av starkt soljus. Du lyfter ena handed för att skydda dina ögon från den gassande solen. Efter ett ögonblick av blinkande sänker du handen och ser att du befinner dig på en äng, mitt ute i naturen. Det är en varm och solig sommardag. Ett par hundra meter framför dig kan kan du skymta hur en skog börjar. Skogen ser tät ut, och du tror dig kunna urskilja tall, bok och björk. Vill du bege dig in i skogen eller tillbaks till kammaren du kom ifrån?")
} else if (dörr === "den röda") {
    prompt("Du öppnar den röda dörren och flämtar till när en osynlig kraft, som en stark vind, greppar tag om din kropp och suger in dig genom dörren rakt in i ett inferno. Du har inte ens tid att skrika innan din kropp på en bråkdel av en sekund brinner upp och förkolnas. För en stund är allting svart. Sedan öppnar du ögonen och du befinner dig återigen i det mörka rummet med dörrarna. Alla dörrar är stängda. Vilken dörr öppnar du?")
} else if (dörr === "den blåa") {
    prompt("Vinden viner och rycker i dina kläder när du kliver ut i den bitande kylan. Dina fötter sjunker ett par decimeter i den djupa snön. Luften är full av virvlande snömoln och himmelen är grå. Du kan inte se mer än ett par meter framför dig. Fortsätter du ut i snön eller vänder du tillbaka till rummet?")
} else if (dörr === "den gula") {
    prompt("Du kliver igenom den gula dörren och märker till dina stora förvåning att du befinner dig i ett fält fullt med solrosor. Luften doftar mustigt av jord och du hör insekter surra bland bladen. Stjälkarna är högre än du är lång, och du kan inte se över dem. Fortsätter du igenom fältet eller vänder du tillbaka till kammaren du kom ifrån?")
} else {"Ingenting händer... Kanske borde du prova en av dörrarna?"}

if (kammaren) {
    prompt("Du kliver tillbaka genom dörren och stängder den efter dig. Kammaren är lika tom och dunkel som förut. Vilken dörr väljer du?")
}