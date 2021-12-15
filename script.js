
const introText = alert("Du öppnar ögonen. Rummet du befinner dig i är obekant och dunkelt. 'Hur hamnade jag här' undrar du. Efter några ögonblick vänjer sig dina ögon vid det svaga ljuset i rummet. De enda ljuskällorna i rummet verkar vara små levande ljus, till synes slumptmässigt placerade längs med väggarna. Rummet saknar helt inredning och väggarna, golvet och taket verkar vara kall sten. Du kan dock se att i varje vägg finns en dörr. En grön dörr, en röd, en blå och en gul dörr. Du beslutar dig för att öppna en av dörrarna.")

chooseDoor()


function chooseDoor() {
    const question = prompt("Väljer du den gröna, den röda, den blåa eller den gula?")
    if (question === "den gröna") {
        openGreenDoor()
    } else if (question === "den röda") {
      openRedDoor()
    } else if (question === "den blåa") {
       openBlueDoor()
    } else if (question === "den gula") {
       openYellowDoor()
    } else {chooseDoor()}
}



function openGreenDoor() {
    const question = prompt("Du kliver igenom den gröna dörren och blir genast bländad av starkt soljus. Du lyfter ena handed för att skydda dina ögon från den gassande solen. Efter ett ögonblick av blinkande sänker du handen och ser att du befinner dig på en äng, mitt ute i naturen. Det är en varm och solig sommardag. Ett par hundra meter framför dig kan kan du skymta hur en skog börjar. Skogen ser tät ut, och du tror dig kunna urskilja tall, bok och björk. Vill du bege dig in i skogen eller tillbaks till kammaren du kom ifrån?")
    if (question === "skogen") {
        goIntoForest()
    }
    else if (question === "kammaren") {
        backToChamber()
    } 
    else {const question2 = prompt("Välj antingen 'kammaren' eller 'skogen'")
        if(question2 === "skogen") {
            goIntoForest()
        }
        else if (question2 === "kammaren") {
            backToChamber()
        }
        else {
            alert("Du är förvirrad och går tillbaka in i kammaren") 
            backToChamber()
        }
    }
    
}

function openRedDoor() {
    alert("Du öppnar den röda dörren och flämtar till när en osynlig kraft, som en stark vind, greppar tag om din kropp och suger in dig genom dörren rakt in i ett inferno. Du har inte ens tid att skrika innan din kropp på en bråkdel av en sekund brinner upp och förkolnas. För en stund är allting svart. Sedan öppnar du ögonen och du befinner dig återigen i det mörka rummet med dörrarna.")
    backToChamber()
}

function openBlueDoor() {
    const question = prompt("Vinden viner och rycker i dina kläder när du kliver ut i den bitande kylan. Dina fötter sjunker ett par decimeter i den djupa snön. Luften är full av virvlande snömoln och himmelen är grå. Du kan inte se mer än ett par meter framför dig. Fortsätter du ut i snön eller vänder du tillbaka till kammaren?")
    if (question === "snön") {
        goIntoSnow()
    }
    else if (question === "kammaren") {
        backToChamber()
    } 
    else {const question2 = prompt("Välj antingen 'kammaren' eller 'snön'")
        if(question2 === "snön") {
            goIntoSnow()
        }
        else if (question2 === "kammaren") {
            backToChamber()
        }
        else {
            alert("Du är förvirrad och går tillbaka in i kammaren") 
            backToChamber()
        }
    }
}

function openYellowDoor() {
    const question = prompt("Du kliver igenom den gula dörren och märker till dina stora förvåning att du befinner dig i ett fält fullt med solrosor. Luften doftar mustigt av jord och du hör insekter surra bland bladen. Stjälkarna är högre än du är lång, och du kan inte se över dem. Fortsätter du igenom fältet eller vänder du tillbaka till kammaren?")
    if (question === "fältet") {
        goIntoField()
    }
    else if (question === "kammaren") {
        backToChamber()
    } 
    else {const question2 = prompt("Välj antingen 'kammaren' eller 'fältet'")
        if(question2 === "fältet") {
            goIntoField()
        }
        else if (question2 === "kammaren") {
            backToChamber()
        }
        else {
            alert("Du är förvirrad och går tillbaka in i kammaren") 
            backToChamber()
        }
    }
}

function goIntoForest() {
    alert("Du beger dig in i den täta skogen. Dagen är varm och behaglig. Fågelsång når dina öron och du känner dig djupt tillfreds. Efter en stund när du vandrar i mossan känner du plötsligt hur du trapmar rakt igenom marken och faller ner i ett märkt hål. När du reser dig upp ser du att du är tillbaka i kammaren.")
    backToChamber()
}

function backToChamber() {
    alert("Du står framför de fyra dörrarna.")
    chooseDoor()
}

function goIntoSnow() {
    alert("Du pulsar ut i den djupa snön och kisar mot den bitande vinden. Det dröjer inte mer än någon minut innan du känner dig ordentligt kall och när du vänder dig om ser du inte längre dörren. Ovädret tilltar och snön virvlar så tätt i vinden att du knappt kan se din hand framför dig. Plötsligt avtar vinden och kylan och du befinner dig åter i kammaren")
    backToChamber()
}

function goIntoField() {
    alert("Du traskar genom fältet, oförmögen att se vad som ligger framför dig. En lång stund går och du börjar undra hur stort detta fältet egentligen är. Du märker till slut hur du är tillbaka där du började och går in i kammaren igen.")
    backToChamber()
}
