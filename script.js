const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você considera o meio ambiente importante para a vida?",
        alternativas: [
            {
                texto: "O meio ambiente é fundamental para a vida",
                afirmacao: "O meio ambiente desempenha um papel fundamental na sustentação da vida na Terra. Ele fornece recursos essenciais como água, ar puro, alimentos e abrigo para os seres vivos."
            },
            {
                texto: "O meio ambiente não tem relevância para a vida",
                afirmacao: "O meio ambiente não tem importância para a vida, pois os seres vivos conseguiriam se adaptar a qualquer condição, independentemente da qualidade do ambiente ao seu redor."
            }
        ]
    },
    {
        enunciado: "Devemos preservar a natureza aqui existente?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Além disso, os ecossistemas presentes no meio ambiente mantêm um equilíbrio natural, onde cada organismo desempenha um papel importante na cadeia alimentar e na regulação do clima. Portanto, a preservação e o cuidado com o meio ambiente são essenciais para garantir a sobrevivência das espécies e a saúde do planeta como um todo."
            },
            {
                texto: "Não.",
                afirmacao: "Além disso, a degradação ambiental não impacta diretamente na sobrevivência das espécies, pois a natureza é capaz de se regenerar por si só sem a intervenção humana.."
            }
        ]
    },
    {
        enunciado: "As grandes empresas devem ter cuidado com a degradação do meio ambiente?",
        alternativas: [
            {
                texto: "Sim, é essencial para o cuidado do meio ambiente.",
                afirmacao: "as grandes empresas estão tendo muito cuidado com a degradação do meio ambiente. A proteção ambiental é crucial não apenas para a saúde do planeta, mas também para a sustentabilidade a longo prazo dos próprios negócios."
            },
            {
                texto: "Não, mal nenhum pode acontecer.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
