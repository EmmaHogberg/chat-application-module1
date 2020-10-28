// Get peer id (hash) from URL
const myPeerId = location.hash.slice(1);

// Connect to Peer server
peer = new Peer(myPeerId, {
  host: "glajan.com",
  port: 8443,
  path: "/myapp",
  secure: true,
});

// Print peer id on connection "open" event
peer.on("open", (id) => {
  const myPeerIdEl = document.querySelector(".my-peer-id");
  myPeerIdEl.innerText = id;
});

peer.on("error", (errormessage) => {
  console.error(errormessage);
});

const listPeersButtonEl = document.querySelector(".list-all-peers-button");
const peersEl = document.querySelector(".peers");

// First, with forEach
// listPeersButtonEl.addEventListener("click", () => {
//   peer.listAllPeers((peers) => {
//     const list = document.createElement("ul");
//     peersEl.append(list);

//     peers.forEach((element) => {
//       const listPeer = document.createElement("li");
//       list.append(listPeer);

//       const peerIdButton = document.createElement("button");
//       peerIdButton.innerText = element;
//       listPeer.append(peerIdButton);
//     });
//   });
// });

// Second and final with map
listPeersButtonEl.addEventListener("click", () => {
  peer.listAllPeers((peers) => {
    peersEl.innerHTML = "";
    const list = document.createElement("ul");
    peersEl.append(list);

    const peersList = peers
      .filter((peerId) => peerId !== peer._id)
      .map(
        (peer) =>
          `<li><button class= "connect-button peerId-${peer}">${peer}</button></li>`
      )
      .join("");
    list.innerHTML = peersList;
  });
});
