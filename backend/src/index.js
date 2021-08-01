const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


app.get('/projects', (request, response) => {
  return response.json({
    Projetos: {
      LetMeAsk: {
        name: 'LetMeAsk',
        date: '21/08/2021',
        nota: 9,
      },
      IgNews: {
        name: 'IgNews',
        date: '06/02/2020',
        nota: 10,
      },
      DtMoney: {
        name: 'DtMoney',
        date: '30/11/2021',
        nota: 8,
      },
      FlexBlog: {
        name: 'FlexBlog',
        date: '21/04/2020',
        nota: 7,
      }
    }
  })
})

app.post('/projects/:id', (request, response) => {
  return response.json({
    Projetos: {
      LetMeAsk: {
        id: 1,
        name: 'LetMeAsk',
        date: '21/08/2021',
        nota: 9,
      },
      IgNews: {
        id: 2,
        name: 'IgNews',
        date: '06/02/2020',
        nota: 10,
      },
      DtMoney: {
        id: 3,
        name: 'DtMoney',
        date: '30/11/2021',
        nota: 8,
      },
      FlexBlog: {
        id: 4,
        name: 'FlexBlog',
        date: '21/04/2020',
        nota: 7,
      },
      WildBeast: {
        id: 5,
        name: 'WildBeast',
        date: '31/05/2020',
        nota: 10,
      }
    }
  })
})

app.put('/projects', (request, response) => {
  return response.json({
    Projetos: {
      LetMeAsk: {
        name: 'LetMeAsk',
        date: '21/08/2021',
        nota: 10,
      },
      IgNews: {
        name: 'IgNews',
        date: '06/02/2020',
        nota: 10,
      },
      DtMoney: {
        name: 'DtMoney',
        date: '30/11/2021',
        nota: 8,
      },
      FlexBlog: {
        name: 'FlexBlog',
        date: '21/04/2020',
        nota: 7,
      },
      WildBeast: {
        name: 'WildBeast',
        date: '31/05/2020',
        nota: 10,
      }
    }
  })
})

app.delete('/projects/:id', (request, response) => {
  return response.json({
    Projetos: {
      LetMeAsk: {
        name: 'LetMeAsk',
        date: '21/08/2021',
        nota: 9,
      },
      DtMoney: {
        name: 'DtMoney',
        date: '30/11/2021',
        nota: 8,
      },
      FlexBlog: {
        name: 'FlexBlog',
        date: '21/04/2020',
        nota: 7,
      },
      WildBeast: {
        name: 'WildBeast',
        date: '31/05/2020',
        nota: 10,
      }
    }
  })
})

app.listen(3333, () => {
  return console.log('🚀 Back-end started!')
});

