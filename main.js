function createGame(player1, hour, player2) {
  return `
  <liv>
         <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
         <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" atl="Bandeira da ${player2}" />
  </liv>
  `
}

function createCard(date, day, games) {
  return ` 
  <div class="card">
     <h2>${date} <span>${day}</span></h2>
     <ul>
      ${games}
      </ul>
     </div>
  
  `
}

document.querySelector("#cards").innerHTML =
  createCard("11/06", "quinta",
    createGame("mexico", "16:00", "southafrica")) +
  createGame("southkorea", "23:00", "tchequia") +
  createCard(
    "12/06",
    "sexta",
    createGame("canada", "16:00", "bosnia&herzegovina") +
    createGame("unitedstates", "22:00", "paraguay")
  ) +
  createCard(
    "13/06",
    "sábado",
    createGame("catar", "16:00", "switzerland") +
    createGame("brasil", "19:00", "morroco") +
    createGame("haiti", "22:00", "scotland")
  ) +
  createCard(
    "14/06",
    "domingo",
    createGame("australia", "01:00", "turkey") +
    createGame("germany", "14:00", "curation") +
    createGame("netherlands", "17:00", "japan") +
    createGame("ivorycoast", "20:00", "ecuador") +
    createGame("sweden", "23:00", "tunisia")
  ) +
  createCard(
    "15/06",
    "segunda",
    createGame("spain", "01:00", "capeverde") +
    createGame("belgium", "16:00", "egypt") +
    createGame("arabiasaudita", "19:00", "urugay") +
    createGame("iran", "22:00", "newzealand")
  ) +
  createCard(
    "16/06",
    "terça",
    createGame("france", "16:00", "senegal") +
    createGame("iraq", "19:00", "norway") +
    createGame("argentina", "22:00", "algeria")
  ) +
  createCard(
    "17/06",
    "quarta",
    createGame("austria", "01:00", "jordania") +
    createGame("portugal", "14:00", "congo") +
    createGame("england", "17:00", "croacia") +
    createGame("ghana", "20:00", "panama") +
    createGame("uzbekistan", "23:00", "colombia")
  ) +
  createCard(
    "18/06",
    "quinta",
    createGame("tchequia ", "13:00", "southafrica") +
    createGame("switzerland", "16:00", "bosnia&herzegovina") +
    createGame("canada", "19:00", "catar") +
    createGame("mexico", "22:00", "southkorea")
  ) +
  createCard(
    "19/06",
    "sexta",
    createGame("unitedstates", "16:00", "australia") +
    createGame("scotland", "19:00", "morroco") +
    createGame("brasil", "21:30", "haiti")
  ) +
  createCard(
    "20/06",
    "sábado",
    createGame("turkey", "00:00", "paraguay") +
    createGame("netherlands", "14:00", "sweden") +
    createGame("germany", "17:00", "ivorycoast") +
    createGame("ecuador", "21:00", "curation")
  ) +
  createCard(
    "21/06",
    "domingo",
    createGame("tunisia", "01:00", "japan") +
    createGame("spain", "13:00", "arabiasaudita") +
    createGame("belgium", "16:00", "iran") +
    createGame("urugay", "19:00", "capeverde") +
    createGame("newzealand", "22:00", "egypt")
  ) +
  createCard(
    "22/06",
    "segunda",
    createGame("argentina", "14:00", "austria") +
    createGame("france", "18:00", "iraq") +
    createGame("norway", "21:00", "senegal")
  ) +
  createCard(
    "23/06",
    "terça",
    createGame("jordania", "00:00", "algeria") +
    createGame("portugal", "14:00", "uzbekistan") +
    createGame("england", "17:00", "ghana") +
    createGame("panama", "20:00", "croacia") +
    createGame("colombia", "23:00", "congo")
  ) +
  createCard(
    "24/06",
    "quarta",
    createGame("switzerland", "16:00", "canada") +
    createGame("bosnia&herzegovina", "16:00", "catar") +
    createGame("morocco", "19:00", "haiti") +
    createGame("brasil", "19:00", "scotland") +
    createGame("southafrica", "22:00", "southkorea") +
    createGame("tchequia", "22:00", "mexico")
  ) +
  createCard(
    "25/06",
    "quinta",
    createGame("curation", "17:00", "ivorycoast") +
    createGame("ecuador", "17:00", "germany") +
    createGame("japan", "20:00", "sweden") +
    createGame("tunisia", "20:00", "netherlands") +
    createGame("paraguay", "23:00", "australia") +
    createGame("turkey", "23:00", "unitedstates")
  ) +
  createCard(
    "26/06",
    "sexta",
    createGame("norway", "16:00", "france") +
    createGame("senegal", "16:00", "iraq") +
    createGame("capeverde", "21:00", "arabiasaudita") +
    createGame("spain", "21:00", "urugay")
  ) +
  createCard(
    "27/06",
    "sábado",
    createGame("newzealand", "00:00", "belgium") +
    createGame("egypt", "00:00", "iran") +
    createGame("panama", "18:00", "england") +
    createGame("croacia", "18:00", "ghana") +
    createGame("colombia", "20:30", "portugal") +
    createGame("congo", "20:30", "ubzekistan") +
    createGame("algeria", "23:00", "austria") +
    createGame("argentina", "23:00", "jordania")
  ) +
  createCard("28/06", "domingo", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("29/06", "segunda", createGame("aconfirmar", "14:00", "aconfirmar")) +
  createCard("29/06", "segunda", createGame("aconfirmar", "17:30", "aconfirmar")) +
  createCard("29/06", "segunda", createGame("aconfirmar", "22:00", "aconfirmar")) +
  createCard("30/06", "terça", createGame("aconfirmar", "14:00", "aconfirmar")) +
  createCard("30/06", "terça", createGame("aconfirmar", "18:00", "aconfirmar")) +
  createCard("30/06", "terça", createGame("aconfirmar", "22:00", "aconfirmar")) +
  createCard("01/07", "quarta", createGame("aconfirmar", "13:00", "aconfirmar")) +
  createCard("01/07", "quarta", createGame("aconfirmar", "17:00", "aconfirmar")) +
  createCard("01/07", "quarta", createGame("aconfirmar", "21:00", "aconfirmar")) +
  createCard("02/07", "quinta", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("02/07", "quinta", createGame("aconfirmar", "20:00", "aconfirmar")) +
  createCard("03/07", "sexta", createGame("aconfirmar", "00:00", "aconfirmar")) +
  createCard("03/07", "sexta", createGame("aconfirmar", "15:00", "aconfirmar")) +
  createCard("03/07", "sexta", createGame("aconfirmar", "19:00", "aconfirmar")) +
  createCard("03/07", "sexta", createGame("aconfirmar", "22:30", "aconfirmar")) +
  createCard("04/07", "sábado", createGame("aconfirmar", "14:00", "aconfirmar")) +
  createCard("04/07", "sábado", createGame("aconfirmar", "18:00", "aconfirmar")) +
  createCard("05/07", "domingo", createGame("aconfirmar", "17:00", "aconfirmar")) +
  createCard("05/07", "domingo", createGame("aconfirmar", "21:00", "aconfirmar")) +
  createCard("06/07", "segunda", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("06/07", "segunda", createGame("aconfirmar", "21:00", "aconfirmar")) +
  createCard("07/07", "terça", createGame("aconfirmar", "13:00", "aconfirmar")) +
  createCard("07/07", "terça", createGame("aconfirmar", "17:00", "aconfirmar")) +
  createCard("09/07", "quinta", createGame("aconfirmar", "17:00", "aconfirmar")) +
  createCard("10/07", "sexta", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("11/07", "sábado", createGame("aconfirmar", "18:00", "aconfirmar")) +
  createCard("11/07", "sábado", createGame("aconfirmar", "22:00", "aconfirmar")) +
  createCard("14/07", "terça", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("15/07", "quarta", createGame("aconfirmar", "16:00", "aconfirmar")) +
  createCard("18/07", "sábado", createGame("aconfirmar", "18:00", "aconfirmar")) +
  createCard("19/07", "domingo", createGame("aconfirmar", "16:00", "aconfirmar")) 
