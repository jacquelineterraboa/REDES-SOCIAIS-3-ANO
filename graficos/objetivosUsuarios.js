async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUsuarios = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    console.log(dados)
  
  const data = [
    {
      labels: objetivosUsuarios,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  
  const layout = 
    {
      height: 600,
      width: 1038,
    }
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
  
  }
  
  objetivosUsuarios()