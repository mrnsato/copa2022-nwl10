function createGame(player1, hour, player2) {
  return `
  <liv>
         <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
         <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" atl="Bandeira da ${player2}" />
  </liv>
  `
}

function createCard(date, day,games) {
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
  createCard("20/11", "domindo", createGame("qatar", "16:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("unitedstates", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudiarab") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morroco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("stwizerland", "07:00", "cameroon") +
      createGame("urugay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "unitedstates")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudiarab") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costarica") +
      createGame("belgium", "10:00", "morroco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "stwizerland") +
      createGame("portugal", "16:00", "urugay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "unitedstates") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudiarab", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morroco") +
      createGame("japan", "16:00", "spain") +
      createGame("costarica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "urugay") +
      createGame("serbia", "16:00", "stwizerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "13/12",
    "terça",
    createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "17/12",
    "sábado",
    createGame("aconfirmar", "12:00", "aconfirmar")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("aconfirmar", "12:00", "aconfirmar")
  )
