var principio = "<div class='imagemPrincipio'> <img src='img/logo2.jpeg'> </div> <h2>O princípio...</h2> <p>No princípio, a deusa da prosperidade Freya com os demais deuses, criaram uma árvore, cujo propósito era sustentar a vida do Mundo. <br><br> Freya designou Seth, deus da guerra e da força para cuidar dela. <br><br> Eras depois, Seth se apaixona por uma humana de seu reino, a mais bela, e desse amor proibido, é gerada uma criança, com cabelos rosas como as flores de cerejeiras, e vermelhos como o magma ardente. Freya foi contra seu nascimento. <br><br> Em uma noite de comemoração, Seth deu uma grande festa, e com exceção de Freya, convidou a todos os deuses para com ele selebrar a grandeza da árvore da vida. <br><br> Freya não aceitou esse tratamento. <br><br> Na mesma noite, após a festa, Freya se passou pela esposa de Seth, e com brutalidade, o assassinou.</p> <button onclick='carregarConteudo(princPartDois)'>Continuar</button> <button onclick='carregarConteudo(arma)'>Carrega o conteudo que eu quiser</button>";

var princPartDois = "<div class='principioPt2'><img src='img/treeLife.jpg' /> </div> <p>Ela, então, rouba o broto da árvore-da-vida e o leva para sua província. Furiosos, os demais deuses decidiram isolar seu território do restante do continente, transformando-o em uma ilha. <br> Com a broto fora de seu lugar de origem, as belezas naturais do reino de Seth começaram a desaparecer, e um processo de desertificação começou. O reino foi mergulhado em uma era de escassez, pobreza e fome. Mesmo 20 anos depois, o povo de Seth nunca esqueceu essa dor.</p> <button onclick='carregarConteudo(carta)'>Continuar</button>";

var carta = " <div class='cartinha'><img src='img/pergaminho.png' /> </div> <h2>A carta</h2>  <p>Querida Maya, Se você está lendo essa carta, com certeza é porque meus dias chegaram ao fim. <br><br> Como sua mãe, não poderia deixar de dizer o quão orgulhosa sou de você, de tudo o que conquistou, do sei jeito simpático, adorável e principalmente de sempre ir atrás do que é certo, de saber as verdades e os fatos. <br><br> Não tive coragem de te contar enquanto viva, porque apesar de mãe, também sou ser humana, com defeitos e imperfeições, sendo uma delas o medo da sua forma de agir comigo, ao descobrir tudo. <br><br> Quero que você vá em busca da verdade, se descubra, se encontre. E para isso preciso que você desbrave esse mundo; você e muito mais do que imagina. Pode parecer confuso, eu sei, mas as coisas vão se esclarecer com o tempo. <br><br> Sim! Você teve uma figura paterna, mesmo que não se recorde. Ele amava você, me amava. E tem um grande motivo de você não ter o conhecido. Vá ao centro da cidade, se prepare com o que der, que a jornada é longa e eu sei muito bem que você é mais que capaz. <br><br> Ouça calmamente o vento desse mundo e saiba que: 'A verdade sempre aparece quando abrimos os olhos'. <br><br> Com amor, <br><br> Afemis</p> <button onclick='carregarConteudo(inicioJornada)'>Continuar</button>";

var inicioJornada = "<div class='imgJornada' ><img src='img/sethRuins.jpg'> <img src='img/desertCity.jpg' </div> <h2>O começo da jornada</h2> <p>Maya, após abrir a carta deixada por sua mãe, monta em seu cavalo e vai em direção ao vilarejo mais próximo. Chegando ao vilarejo após um tempo de viagem ela vai comprar suprimentos e uma espada básica para sua jornada, e conversa com o ferreiro, seu velho conhecido: <br><br> - Não sei se você irá longe só com essa espada, Maya. Conheço uma lenda, mas não sei se é verdadeira: 'Nas montanhas gélidas de skadi, existe uma arma, que dizem ter pertencido a um deus. Dizem que ela é capaz de matar qualquer coisa. Se ela existir, o quanto não poderá te ajudar?' <br><br> O ferreiro então, lhe entrega um mapa, e deseja-lhe boa sorte. Após ouvir seu conselho, Maya decide:</p> <button onclick='carregarConteudo(montanhasSkadi)'> Vou seguir para as montanhas de skadi e procurar pela arma.</button>"; 

var montanhasSkadi = "<div class='caminhoBifurcacao'> <img src='img/bifurcacao.jpg'> </div> <h2>Escolha seu caminho</h2> <p> Maya então sai do vilarejo e se vê a caminho do deserto. Depois de andar pelas grandes dunas de areia, encontra uma estrada e segue por ela. Após mais um tempo, ela encontra uma bifurcação no caminho. <br><br> Ela então decide ir...</p> <button onclick='carregarConteudo(caminhoEsquerda)'>Pela esquerda</button> <button onclick='carregarConteudo(caminhoDireita)'>Pela direita</button>";

var caminhoEsquerda = "<div class='esquerda'> <img src='img/lava.jpg' ></div> <h2>Calor sem precedentes</h2>  <p>O caminho escolhido leva em direção de um grande vulcão, ela não tem escolha a não ser atravessar esse caminho sinuoso. Era um caminho estreito em meio a paredões de pedras e que qualquer barulho mais alto podia causar uma grande avalhanche em cima dela, por isso andou com calma e certa aonde pisava para que não acontecesse o pior.</p> <button onclick='carregarConteudo(vulcao)'>Seguir</button>";

var caminhoDireita = "<div class='emboscada'><img src='img/saqueadores.jpg'></div> <h2>Ataque de saqueadores</h2> <p>No meio do caminho, Maya é emboscada por ladrões saqueadores. Ela luta bravamente, mas mesmo assim tem seu dinheiro levado. Ela ainda tem fôlego, e decide..</p><button onclick='carregarConteudo(naoIrAtras)'>Continuar seu caminho</button> <button onclick='carregarConteudo(irAtras)'>Ir atrás dos saqueadores</button>";

var irAtras = "<div class='final1'><img src='img/final1Gif.gif'></div> <h2>Um fim trágico</h2> <p>Indo atrás dos criminosos, Maya encontra o esconderijo dos ladrões. <br> Observando de longe, descobre que foi roubada por uma gangue muito conhecida na região. Mesmo assim, ela não se abala, e decide ir sorrateiramente até o líder daquela organização.<br> Em uma tentativa de fazer o líder de refém, ela tenta o segurar pelas costas, mas ele era um guerreiro extremamente hábil, e consegui facilmente desviar de seu golpe.<br> Ela então saca sua espada e parte para cima do homem.<br> Travando uma batalha em que estava em desvantagem, não só pela pouca experiência, mas também pelo equipamento simples, seu oponente acaba apunhalando-a no coração.<br> O brilho em seus olhos desaparece, e ela cai sem vida no chão.<br> O líder da organização, reconhece sua coragem e diz: </p><button onclick='carregarConteudo(final)'>- É Um triste fim para uma guerreira promissora.</button>"; 

var naoIrAtras = "<div class='aceitacao'><img src='img/maya.jpg'></div> <h2>Aceitação</h2> <p>Maya sabia que naquela região havia um grupo grande de ladrões, e não conseguiria lidar com vários deles. Ela então aceita que perdeu seu dinheiro e se sente conformada por ainda restar seus equipamentos, e segue em frente.</p><button onclick='carregarConteudo(vulcao)'>Seguir</button>";

var vulcao = "<div class='monstro'><img src='img/lavaBorn.jpg'></div> <h2>Um ser de lava</h2>  <p>Seguindo o seu caminho ela se depara com a entrada de uma caverna que se encontrava a baixo de um enorme vulcão e então lá decide entrar para que com sorte encontrasse suprimentos restantes das pessoas que trabalhavam nas ravinas. Ao adentrar no vulcão, então, ela encontra uma longa ravina e ouve gritos. Ela então desce com cautela para verificar o que era, mas lá em baixo não encontra nada. <br><br> Quando então percebe estar perto de um grande lago de lava e então um grande e incandescente ser começa a surgir de dentro da lava. <div class='monstro'><img src='img/lavaMonster.png'> </div> <p>Vendo-se presa, ela então pega a sua espada e parte para cima do monstro. Travando uma luta de força bruta, mas logo Maya percebeu que não poderia matar a criatura de maneira convencional. Em um dos momentos críticos, ela acaba sendo atingida por respingos de lava. <br><br> Apesar de danificar a armadura, ela não se queimou, no que parou para pensar, calor algum surtia efeito nela. Em contrapartida, quanto mais o tempo passava mais lava se fundia ao corpo da criatura, ela estava ficando mais forte. Maya enfim começou a tomar gosto pela luta. <br><br> Enquanto desferia os golpes, notou que a criatura estava mais lenta... Ou era ela mesma que estava mais rápida? Pouco importava, ela estava focada em aniquilar aquela monstruosidade. Quente, mais quente, literalmente ela estava em chamas. Mas não se machucava, o fogo era acolhedor, como uma mão amiga. <br><br> O ser de lava começa a arremessar pedras em Maya, que desvia e as grandes rochas acertam uma parede próxima e dessa parede começou a vazar... Água? <br><br> - Como pode? - pensou Maya, que ao refletir, lembrou estar não só próxima de um vulcão, mas também do oceano. - a BAIXO do nível do oceano! <br><br> Maya provoca mais e mais a criatura, que corre com o ombro voltado em sua direção. <br><br> Em um movimento arriscado, ela desvia do ser de lava, e o usa como apoio para sair da ravina. Ao mesmo tempo, ele atinge a parede em cheio, fazendo começa a jorrar litros de água salgada sobre ele, que rapidamente, se petrificou. Uma nova estátua de um gigante havia se formado,  deixando ali mais uma lenda para quem passasse. <br><br> Maya sabia que a mistura de lava com água do mar, causava um vapor tóxico, então saiu de lá o mais rápido que pode, e conforme saia da região de lava, suas chamas foram se apagando.</p> <button onclick='carregarConteudo(fronteiraHefesto)'>Seguir para a fronteira de Hefesto</button>";

var fronteiraHefesto = "<div class='fronteiraHefesto'><img src='img/city.jpg'></div> <h2>Fronteiras de Hefesto</h2>  <p>Após a batalha, Maya chega as fronteiras de Hefesto. Caminhando por mais um tempo, encontra um pequeno vilarejo. Ela então decide vender algumas peles que juntou durante a viagem para conseguir dinheiro, e usa-o para pagar por um quarto. <br> No dia seguinte, com o dinheiro que sobrou das vendas ela compra mais suprimentos e segue seu caminho para as montanhas gélidas.</p> <button onclick='carregarConteudo(subindoMontanhasSkadi)'>Seguir</button>";

var subindoMontanhasSkadi = "<div class='skadiCave'> <img src='img/skadi6.jpg'> <img src='img/skadi3.jpg'> </div> <h2>Montanhas de Skadi</h2>   <p>Maya atravessa Hefesto e chega às montanhas gélidas de Skadi. <br> Observando uma delas de longe, recorda na memória já ter visto uma figura parecida em algum lugar e então decide olhar sua bolsa. Olhando o mapa que o ferreiro lhe entregou, ela percebe a imagem da montanha desenhada e que o caminho se encaixava com uma trilha mais a sua frente.<br> Seguindo-o, ela encontra uma entrada escondida que levava a mais uma caverna em meio a sua aventura e pensou<br> -O que pode dar errado depois de um monstro enorme de fogo?.</p> <button onclick='carregarConteudo(arma)'>Seguir</button>";

var arma = "<div class='iceCave'><img src='img/iceCave.jpg'></div> <h2>O Guerreiro caído</h2> <p>Caminhando pelos túneis da caverna, ela escuta uma repentina súplica: <br><br> - Por favor... Me ajude... <br><br> Maya pensou ser outra armadilha, então seguiu com mais cautela. <br><br> Mais ao longe, viu uma luz que pensou ser a saída, quando se aproximou viu um gigante, um velho gigante preso no gelo e com uma espada fincada em meio ao seu peio. O ser era tão enorme que mal cabia na abertura que estava aprisionado.<br> Ele então ao perceber a presença da garota começa a dizer: <br><br> - Garota, sinto em você um poder especial, um poder que não vejo a eras... Meu nome é Jotun, sei que é repentino, mas você é um dos únicos seres que pode me ajudar... <br> Maya fica confusa, mas responde: <br><br> - Mas como eu poderia? <br><br> - Fui aprisionado aqui por decadas, já até perdi a conta de quantas, depois que me coloquei contra os deuses... Já faz tanto tempo... Não aguento mais viver assim... Mas você, você tem o que é necessário para acabar com meu sofrimento... Retire essa espada do meu peito, se o fizer, eu lhe presentearei com meu bem mais precioso! <br><br> Maya sentiu o sofrimento em suas palavras, mas não podia simplesmente matá-lo a sangue-frio. Ela então decide fazer uma oração em seu nome, assim como sua mãe havia lhe ensinado, e em um ato de misericórdia rapidamente retira a espada, que subtamente desaparece. <br><br> O velho gigante lentamente vai desaparecendo, se tornando um brilho amarelo e quente porém acolhedor mas antes de partir, fala pela última vez: <br> - Obrigado! Sinto em você uma grande compaixão... Mas também um poder sombrio querendo sair... Pelo seu bem, aprenda a canalizá-lo, antes que ele te consuma... Pegue meu presente e siga seu destino! <br> Terminando essas palavras ele segue para seu eterno descanso. <br> Atrás dele, ela encontra uma ossada de um humano e ao lado caido restos do que parecia já ter sido o mais belo dos vestidos, e junto dela, um arco. <br><div class='arco'><img src='img/mayaArco.png'></div> Maya ao tocar a arma sente uma afinidade indescritível com ele como se tivesse sido feito para ela. Ela então faz novamente uma oração para a pessoa que se tornou aquela ossada, pega o arco novamente e segue seu caminho, deixando para trás o tumulo de um antigo guerreiro que a muito tinha travado uma batalha por aquilo que ele mais acreditava, o amor.</p> <button onclick='carregarConteudo(temploSkadi)'>Seguir</button>";


var temploSkadi = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Uma pausa para orar</h2> <p>Ao sair da caverna, Maya já está em Skadi. Ela avista um templo, mas não tem certeza se deve entrar nele...</p> <button onclick='carregarConteudo(entrarTemploSkadi)'>Entrar no templo</button> <button onclick='carregarConteudo(naoEntrar)'>Seguir seu caminho.</button>";

var entrarTemploSkadi = "<div class='imagemtopo'> <img src='/img/'> </div>> <h2>Uma deusa no caminho</h2> <p>Maya encontra com a Deusa Skadi, que usa um feitiço para converter Maya, ela agora é uma servidora fervorosa da Deusa Skadia. Todos saudem Skadia</p> <button onclick='carregarConteudo(final)'>Continuar</button>"; //completar o final aqui

var naoEntrar = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Rumo a Hefesto</h2> <p>Maya segue seu caminho para a capital de Hefesto.</p> <button onclick='carregarConteudo(CapitalHefesto)'>Continuar</button>";

var CapitalHefesto = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Uma capital tecnológica</h2>  <p>Depois de muito tempo de caminhada, maya chega a capital, ela então avista uma taberna. Ela então ve alguns jogadores e lembra de seu tempo de apostas em Seth. Ela se pergunta se deve jogar algumas partidas...</p> <button onclick='carregarConteudo(jogou)'>Jogar</button> <button onclick='carregarConteudo(naoJogou)'>Não Jogar</button>";

var jogou = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>A sorte favorece os corajosos</h2>  <p>Maya, como eximio jogadora que era, vence todas as partidas e consegue um bom dinheiro. Ela o usa para fazer um bom aprimoramento em seus equipamentos</p> <button onclick='carregarConteudo(portoFreya)'>Continuar</button>";

var naoJogou = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Upgrade</h2> <p>Maya vai fazer um upgrade em suas armas. Como o dinheiro era curto, ela faz apenas o básico</p> <button onclick='carregarConteudo(portoFreya)'>Continuar</button>";

var portoFreya = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Porto pra Freya</h2> <p>Maya chega no porto para freya. Ela pega um barco clandestino e desembarca em Freya.</p> <button onclick='carregarConteudo(magoElfo)'>Continuar</button>";

var magoElfo = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Um senhor mago elfo</h2> <p>Maya conversa com um mago elfo, que diz sobre um templo onde contem as memorias de freya. Ela então decide...</p> <button onclick='carregarConteudo(buscarMemorias)'>Ir ao templo das memórias secretas</button> <button onclick='carregarConteudo(irCastelo)'>Ir direto para o castelo de Freya</button>";

var buscarMemorias = "<div class='imagemtopo'> <img src='/img/'> </div>> <h2>O guardião das memórias</h2> <p>Depois de muito caminhar, maya encontra o templo de Freya. Ao adentrar, encontra o guardião das memórias de freya. Eles lutam, ela vence, e adquire então as memórias de freya. Descobre o segredo de Freya.</p> <button onclick='carregarConteudo(vasculharMemorias)'>Vasculhar memórias</button>";

var vasculharMemorias = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Um amor não compreendido</h2> <p>Maya descobre a dor de freya, por ter seu amor por Seth negado por eras a fio. Essa dor culminou em ódio, quando ele prefere se casar com uma mortal a aceitar seu amor. E a gota d'agua foi Seth ter negado Freya em sua comemoração a arvore da vida.</p> <button onclick='carregarConteudo(casteloFreya)'>Continuar</button>";

var irCastelo = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Uma vegetação densa</h2> <p>Maya segue seu caminho rumo ao castelo de Freya. No caminho, encontra diversas criaturas exóticas, e alguns saqueadores. Mais forte, ela vence os confrontos.</p> <button onclick='carregarConteudo(casteloFreya)'>Continuar</button>";

var casteloFreya = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>O castelo</h2> <p>Maya chega aos portões do castelo de Freya, ela já a esperava. O comfronto tem início</p> <button onclick='carregarConteudo(decisaoDificil)'>Iniciar comfronto</button>";

var decisaoDificil = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Ódio ou benevolência?</h2> <p>Com seu poder de fogo despertado, e a arma ancestral, Maya derrota Freya. Ela está caida na sua frente, você tem o poder para matá-la de uma vez por todas...</p> <button onclick='carregarConteudo(matarFreya)'>Matar Freya</button> <button onclick='carregarConteudo(pouparFreya)'>Poupar Freya</button>";

var matarFreya = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Sangue frio</h2> <p>Maya, por fim, atira uma flexa em freya, e termina o que começou. Ela então, usa um receptáculo para levar a árore da vida de volta para seu território.</p> \n<p>Os demais deuses, levam isso como um acerto de contas. Maya então, traz novamente a glória antiga de seth, e é coroada Rainha do reino. E a paz prosperou.</p> \n<p>Por enquanto...</p><button onclick='carregarConteudo(final)'>Continuar</button>"; //completar o final aqui

var pouparFreya = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Deusa da benevolência</h2> <p>Maya, percebe que a amargura de Freya por sí só já a consumia, ela então não dá o golpe final, vai até árvore da vida, pega um pequeno broto que crescia a parte, e vai embora, retornando a Seth.</p> \n<p>Os demais deuses, a denominam deusa da benevolencia, e ela se torna a nova deusa de Seth.</p><button onclick='carregarConteudo(final)'>Continuar</button>";

var final = "<div class='imagemtopo'> <img src='/img/'> </div> <h2>Obrigado por jogar</h2> <p>Agradecemos por jogar nosso jogo, ainda há mais finais para desbravar.</p><button onclick='carregarConteudo(inicioJornada)'>Continuar</button>";


var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
}

function modoEscuro() {
    var corpo = document.getElementById('corpo');
    var mudarBotao = document.getElementById('apagavel');
    corpo.classList.toggle('black');
    mudarBotao.classList.toggle('black-bnt');
}

function modobranco () {
    var corpo = document.getElementById('corpo');
    corpo.classList.remove('black');
}   

carregarConteudo(principio);
