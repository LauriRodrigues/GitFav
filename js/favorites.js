export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'LauriRodrigues',
        name: 'Lauri Rodrigues',
        public_repos: '23',
        followers: '76'
      },

      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '10900'
      },

      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '48',
        followers: '22503'
      },
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de perfil do Github de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user a p').textContent = user.name
      row.querySelector('.user a span').textContent = `/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    })

  }

  createRow () {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de perfil do Github de Mayk Brito ">
        <a href="https://github.com/maykbrito/" target="_blank">
          <p>Mayk Brito</p>
          <span>/maykbrito</span>
        </a>
      </td>
      <td class="repositories">93</td>
      <td class="followers">10900</td>
      <td>
        <button class="remove">Remover</button>
      </td>
    
    `

    return tr
  }

  removeAllTr () {
    this.tbody.querySelectorAll('tr')
      .forEach( (tr) => {
        tr.remove()
      })
  }
}