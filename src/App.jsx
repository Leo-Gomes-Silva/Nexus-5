import { useState } from "react";
import Questions from "./components/Question/index";

let resultQuiz = {
  answerA: 0,
  answerB: 0,
  answerC: 0,
  answerD: 0,
  answerE: 0,
};

let winner = "";


export default function App() {
  const [winnerExist, setWinnerExist] = useState(false);
  const [start, setStart] = useState(false);

  function startQuiz() {
    setStart(true);
  }

  function showWinner() {
    let answerWinner = Math.max(
      resultQuiz.answerA,
      resultQuiz.answerB,
      resultQuiz.answerC,
      resultQuiz.answerD,
      resultQuiz.answerE
    );
    if (resultQuiz.answerA === answerWinner) {
      winner = "alathar";
      console.log(winner);
    } else if (resultQuiz.answerB === answerWinner) {
      winner = "lore";
      console.log(winner);
    } else if (resultQuiz.answerC === answerWinner) {
      winner = "maddie";
      console.log(winner);
    } else if (resultQuiz.answerD === answerWinner) {
      winner = "odachi";
      console.log(winner);
    } else {
      winner = "quark";
      console.log(winner);
    }
    setWinnerExist(true);
  }

  function reload() {
    location.reload();
  }

  return (
    <div  className="start-game">
      {!start && (
        <>
          <div data-aos="fade-right" className="logo-image"></div>
          <button data-aos="fade-left" className="start-btn" onClick={startQuiz}>
            Clique e comece
          </button>
        </>
      )}

      {start && (
        <>
          <Questions
            result={resultQuiz}
            question="10. Se você pudesse se descrever em uma palavra, qual seria?"
            optionA=" persistente"
            optionB=" intuitivo"
            optionC=" corajoso"
            optionD=" analítico"
            optionE=" curioso"
            responseA="optionA10"
            responseB="optionB10"
            responseC="optionC10"
            responseD="optionD10"
            responseE="optionE10"
          />
          <Questions
            result={resultQuiz}
            question="9. Diante de um projeto empacado, qual é a sua reação inicial?"
            optionA=" Revejo todo o briefing para garantir que estou seguindo as referências"
            optionB=" procuro saber como outras pessoas resolveram o problema "
            optionC=" revejo os conceitos do projeto e alinho com o cliente"
            optionD=" fico calmo e busco ouvir o cliente para compreender seus pontos"
            optionE=" tento inovar a partir de ideias que estão na minha cabeça para surpreender o cliente"
            responseA="optionA9"
            responseB="optionB9"
            responseC="optionC9"
            responseD="optionD9"
            responseE="optionE9"
          />
          <Questions
            result={resultQuiz}
            question="8. Qual é o seu primeiro pensamento sobre relacionamentos amorosos?"
            optionA=" Me empenhar para dar o melhor para a pessoa em questão"
            optionB=" Preciso conhecer bem essa pessoa antes de qualquer coisa "
            optionC=" Relacionamentos? Me considero um espirito livre "
            optionD=" Tenho que ver como isso vai funcionar e como serão as regras "
            optionE=" Estou aberto à experiência e adoraria tentar"
            responseA="optionA8"
            responseB="optionB8"
            responseC="optionC8"
            responseD="optionD8"
            responseE="optionE8"
          />
          <Questions
            result={resultQuiz}
            question="7. quando de frente com uma situação em que você não tem muito tempo para tomar decisões, como você reage?"
            optionA=" Travo, sinto que preciso de mais tempo para pensar e tento remanejar o tempo para decidir"
            optionB=" Tento fluir de acordo com a situação e me adaptar antes de decidir"
            optionC=" Confio no meu potencial de boas escolhas, mas preciso me afastar primeiro para pensar melhor "
            optionD=" Permaneço calmo e busco a rota mais lógica"
            optionE=" Tomo logo a decisão e depois vejo como se desenrolam os fatos"
            responseA="optionA7"
            responseB="optionB7"
            responseC="optionC7"
            responseD="optionD7"
            responseE="optionE7"
          />
          <Questions
            result={resultQuiz}
            question="6 . Você acabou de descobrir algo novo, qual é a sua reação?"
            optionA=" Tomo nota de tudo o que eu descobri sobre aquilo, pois pode ser útil no futuro "
            optionB=" Investigo sobre o assunto e seu funcionamento "
            optionC=" Tenho plena certeza que também sou capaz de fazer aquilo e tento "
            optionD=" Observo calmamente como se comporta e espero "
            optionE=" Fico curioso e rapidamente me interesso pelo assunto"
            responseA="optionA6"
            responseB="optionB6"
            responseC="optionC6"
            responseD="optionD6"
            responseE="optionE6"
          />
          <Questions
            result={resultQuiz}
            question="5. Seu amigo terminou um relacionamento e está triste, que atitudes você toma?"
            optionA=" Faço o que posso para tirar ele daquele lugar e levá-lo para se distrair"
            optionB=" Vou até a casa dele, crio passatempos para distrai-lo e fazer companhia "
            optionC=" Abraço e o deixo desabafar tudo o que precisar, mas não sei o que dizer "
            optionD=" Procuro passar calma e segurança para ele se sentir confortável"
            optionE=" Tento ver o lado positivo da situação e me coloco a disposição para ele"
            responseA="optionA5"
            responseB="optionB5"
            responseC="optionC5"
            responseD="optionD5"
            responseE="optionE5"
          />
          <Questions
            result={resultQuiz}
            question="4. No trabalho, como é sua iniciativa?"
            optionA=" Garanto dia com o conhecimento adquirido através dos meus estudos"
            optionB=" Organizo meus materiais para ter tudo a mão "
            optionC=" Procuro o que fazer e faço piadinhas para melhorar o dia dos outros"
            optionD=" Analiso quais materiais vou precisar antes de começar"
            optionE=" Procuro novas formas de facilitar meu serviço e otimizar o tempo"
            responseA="optionA4"
            responseB="optionB4"
            responseC="optionC4"
            responseD="optionD4"
            responseE="optionE4"
          />
          <Questions
            result={resultQuiz}
            question="3. Hoje é o seu dia livre, o que você quer fazer?"
            optionA=" Prefiro manter minhas opções em aberto e deixar fluir sem planejar "
            optionB=" Me dedico à alguma atividade artística, como música ou pintura"
            optionC=" Quero sair para passear e curtir o dia "
            optionD=" Acordo devagar, tomo meu café e planejo minhas tarefas da semana"
            optionE=" Quero dormir até tarde e procurar coisas legais na internet"
            responseA="optionA3"
            responseB="optionB3"
            responseC="optionC3"
            responseD="optionD3"
            responseE="optionE3"
          />
          <Questions
            result={resultQuiz}
            question="2. Se um dos seus queridos amigos se fere em combate, qual é a sua reação?"
            optionA=" Uso todo o conhecimento que tenho para ajudá-lo a se estabilizar"
            optionB=" Analiso as falhas do oponente e o ataco no ponto fraco para vingar meu amigo "
            optionC=" Me retiro de combate, esquecendo o próposito de estar ali e cuido dele "
            optionD=" Me coloco entre ele e nossos inimigos para defende-lo "
            optionE=" Tiro ele da zona de batalha cautelosamente e o levo para um lugar à salvo "
            responseA="optionA2"
            responseB="optionB2"
            responseC="optionC2"
            responseD="optionD2"
            responseE="optionE2"
          /> 
          <Questions
            result={resultQuiz}
            question="1. Numa situação de estresse, qual é seu papel?"
            optionA=" Não deixo transparecer que estou abalado e ouço os envolvidos"
            optionB=" Investigo todo o ocorrido antes de tomar qualquer decisão"
            optionC=" confronto a situação e me deixo levar pelas emoções "
            optionD=" Mantenho a calma e analiso a situação "
            optionE=" Tento acalmar os ânimos e ver o lado positivo "
            responseA="optionA1"
            responseB="optionB1"
            responseC="optionC1"
            responseD="optionD1"
            responseE="optionE1"
          />

          <div className={`${winner} bg-geral`}>
            {!winnerExist && (
              <div className="loading">
                <span className="text-result">
                  Espero que esteja pronto para descobrir seu estilo favorito!
                </span>
                <button className="result-btn" onClick={showWinner}>
                  Ver resultado!
                </button>
              </div>
            )}
            {winnerExist && (
              <div className="container">
                <div data-aos="fade-left" className="winner-name"></div>
                <div data-aos="fade-right" className="winner-portrait"></div>
                <div data-aos="fade-up" className="winner-card"></div>
                <button data-aos="zoom-in" className="winner-btn" onClick={reload}>
                  Começar de novo!
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
