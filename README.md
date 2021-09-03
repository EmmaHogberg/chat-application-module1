# Modul 1 - Chatapplikation

## Koda applikationen så långt som vi kom i lektion 1 och 2, alltså:
- Anslut till Peer server med Peer objectet - se https://peerjs.com/docs.html#api
- Servern har dessa parametrar:
- host: "glajan.com",
- port: 8443,
- path: "/myapp",
- secure: true,
- Peer id ska tas från hash i URL:en (utan hash tecknet #)
- När anslutning till Peer server har öppnats, så ska peer id skrivas ut i HTML-elementet med klassen '.my-peer-id'.
- Lägg till ett click event för knappen "Refresh list" som hämtar online användare och listar dem inuti elementet <div class="peers">
- Tips: I Peers objektet finns funktionen "listAllPeers", den tar en callback funktion som argument såhär:
peer.listAllPeers((peers) => { lista peers här... } )
- Använd array-funktionen "filter" för att filtrera bort ditt eget id. (Ditt egna id finns i "peer._id")

## Krav: Använd dig av:
- Prettier
- location object
- querySelector
- arrow function
- addEventListener
- minst två av filter, reduce, forEach eller map
- OBS! Gör inte ändringar i HTML eller CSS, endast JS-koden.

## Inlämning
Lägg till två länkar här när du är klar. Länka till:
- Din Github Pages sida
- Din kod på Github
