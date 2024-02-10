const perguntas = [
    {
      pergunta: "Qual tag HTML é usada para definir uma folha de estilo interna?",
      resposta: [
        "<style>",
        "<css>",
        "<script>",
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade CSS é usada para alterar a cor de fundo?",
      resposta: [
        "color",
        "bgcolor",
        "background-color",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode fazer um comentário em HTML?",
      resposta: [
        "// isso é um comentário",
        "/* isso é um comentário */",
        "<!-- isso é um comentário -->",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para se referir a uma folha de estilo externa?",
      resposta: [
        "<stylesheet>mystyle.css</stylesheet>",
        "<style src='mystyle.css'>",
        "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
      ],
      correta: 2
    },
    {
      pergunta: "Qual tag HTML é usada para definir um título grande para um documento?",
      resposta: [
        "<head>",
        "<title>",
        "<h1>",
      ],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS você usaria para alterar a fonte de um elemento?",
      resposta: [
        "text-style",
        "font-style",
        "font-family",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode criar um link para abrir um novo site em uma nova janela?",
      resposta: [
        "<a href='url' new>",
        "<a href='url' target='_blank'>",
        "<a href='url' target='_new'>",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a propriedade CSS correta para alterar a cor do texto?",
      resposta: [
        "text-color",
        "color",
        "font-color",
      ],
      correta: 1
    },
    {
      pergunta: "Qual tag HTML é usada para definir uma lista não ordenada?",
      resposta: [
        "<ul>",
        "<ol>",
        "<li>",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para adicionar um background-color em CSS?",
      resposta: [
        "body:background-color=yellow;",
        "{body;color:yellow;}",
        "body {background-color: yellow;}",
      ],
      correta: 2
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) { 
    const quizItem = template.content.cloneNode(true) 
    
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
         
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }
  