
(() => {
  'use strict';

  const STORAGE = {
    pets: 'matchpet.pets.v1',
    favorites: 'matchpet.favorites.v1',
    requests: 'matchpet.requests.v1'
  };

  const photos = {
    tobias: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=82',
    luna: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=82',
    kiko: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=82',
    mel: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=82',
    nina: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=82',
    fred: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=82',
    bela: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=82',
    theo: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=82',
    pipoca: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=82',
    kiwi: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=82'
  };

  const seedPets = [
    {
      id: 'tobias',
      name: 'Tobias',
      species: 'Cachorro',
      breed: 'Vira-lata caramelo',
      age: 2,
      ageGroup: 'adulto',
      size: 'Médio',
      sex: 'Macho',
      city: 'São Paulo',
      state: 'SP',
      image: photos.tobias,
      description: 'Um grandão carinhoso que adora passeios e colo. Já está vacinado e prontinho para conhecer a família dele.',
      traits: ['Carinhoso', 'Vacinado', 'Gosta de passear'],
      shelter: 'Amigos de Patas',
      status: 'Pronto para adoção'
    },
    {
      id: 'luna',
      name: 'Luna',
      species: 'Gato',
      breed: 'Sem raça definida',
      age: 1,
      ageGroup: 'adulto',
      size: 'Pequeno',
      sex: 'Fêmea',
      city: 'Campinas',
      state: 'SP',
      image: photos.luna,
      description: 'Curiosa e tranquila, Luna ama uma janela ensolarada e companhia para suas sonecas.',
      traits: ['Tranquila', 'Castrada', 'Ama carinho'],
      shelter: 'Casa Mia',
      status: 'Pronta para adoção'
    },
    {
      id: 'kiko',
      name: 'Kiko',
      species: 'Cachorro',
      breed: 'Beagle',
      age: 4,
      ageGroup: 'adulto',
      size: 'Médio',
      sex: 'Macho',
      city: 'São Paulo',
      state: 'SP',
      image: photos.kiko,
      description: 'Cheio de energia e com o rabinho sempre abanando. Kiko é o parceiro ideal para aventuras.',
      traits: ['Brincalhão', 'Sociável', 'Vacinado'],
      shelter: 'Amigos de Patas',
      status: 'Pronto para adoção'
    },
    {
      id: 'mel',
      name: 'Mel',
      species: 'Gato',
      breed: 'Sem raça definida',
      age: 3,
      ageGroup: 'adulto',
      size: 'Pequeno',
      sex: 'Fêmea',
      city: 'Santos',
      state: 'SP',
      image: photos.mel,
      description: 'Uma gatinha doce que transforma qualquer cantinho em lugar favorito. Convive bem com outros gatos.',
      traits: ['Dócil', 'Castrada', 'Sociável'],
      shelter: 'Bigodes & Cia',
      status: 'Pronta para adoção'
    },
    {
      id: 'nina',
      name: 'Nina',
      species: 'Cachorro',
      breed: 'Vira-lata',
      age: 5,
      ageGroup: 'adulto',
      size: 'Pequeno',
      sex: 'Fêmea',
      city: 'Sorocaba',
      state: 'SP',
      image: photos.nina,
      description: 'Pequena no tamanho e enorme no amor. Nina gosta de passeios curtinhos e bons cochilos.',
      traits: ['Calma', 'Vacinada', 'Adora pessoas'],
      shelter: 'Lar da Nina',
      status: 'Pronta para adoção'
    },
    {
      id: 'fred',
      name: 'Fred',
      species: 'Cachorro',
      breed: 'Vira-lata',
      age: 0,
      ageGroup: 'filhote',
      size: 'Pequeno',
      sex: 'Macho',
      city: 'Campinas',
      state: 'SP',
      image: photos.fred,
      description: 'Filhote arteiro aprendendo a descobrir o mundo. Procura uma família com muito carinho para dar.',
      traits: ['Filhote', 'Vacinado', 'Brincalhão'],
      shelter: 'Casa Mia',
      status: 'Pronto para adoção'
    },
    {
      id: 'bela',
      name: 'Bela',
      species: 'Gato',
      breed: 'Sem raça definida',
      age: 8,
      ageGroup: 'idoso',
      size: 'Pequeno',
      sex: 'Fêmea',
      city: 'São Paulo',
      state: 'SP',
      image: photos.bela,
      description: 'Uma senhora elegante que só precisa de uma caminha macia e alguém para dividir o sofá.',
      traits: ['Tranquila', 'Castrada', 'Companheira'],
      shelter: 'Bigodes & Cia',
      status: 'Pronta para adoção'
    },
    {
      id: 'theo',
      name: 'Theo',
      species: 'Cachorro',
      breed: 'Vira-lata',
      age: 1,
      ageGroup: 'adulto',
      size: 'Grande',
      sex: 'Macho',
      city: 'Santos',
      state: 'SP',
      image: photos.theo,
      description: 'Um gigante gentil que ama fazer novos amigos. Está ansioso para encontrar um lar com quintal.',
      traits: ['Dócil', 'Vacinado', 'Sociável'],
      shelter: 'Lar da Nina',
      status: 'Pronto para adoção'
    },
    {
      id: 'pipoca',
      name: 'Pipoca',
      species: 'Outros',
      breed: 'Coelho mini lop',
      age: 1,
      ageGroup: 'adulto',
      size: 'Pequeno',
      sex: 'Fêmea',
      city: 'Campinas',
      state: 'SP',
      image: photos.pipoca,
      description: 'Uma coelhinha curiosa e tranquila, que adora explorar e beliscar um pedacinho de cenoura.',
      traits: ['Tranquila', 'Curiosa', 'Adora cenoura'],
      shelter: 'Casa Mia',
      status: 'Pronta para adoção'
    },
    {
      id: 'kiwi',
      name: 'Kiwi',
      species: 'Outros',
      breed: 'Calopsita',
      age: 2,
      ageGroup: 'adulto',
      size: 'Pequeno',
      sex: 'Macho',
      city: 'São Paulo',
      state: 'SP',
      image: photos.kiwi,
      description: 'Uma calopsita companheira que gosta de cantarolar e ficar pertinho de quem já conhece.',
      traits: ['Companheiro', 'Sociável', 'Gosta de cantar'],
      shelter: 'Amigos de Patas',
      status: 'Pronto para adoção'
    }
  ];

  const read = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  };

  let pets = read(STORAGE.pets, null);

  if (!Array.isArray(pets)) {
    pets = seedPets;
    localStorage.setItem(STORAGE.pets, JSON.stringify(pets));
  }

  if (!read('matchpet.other-animals.v1', false)) {
    ['pipoca', 'kiwi'].forEach(id => {
      const sample = seedPets.find(pet => pet.id === id);

      if (sample && !pets.some(pet => pet.id === id)) {
        pets.push(sample);
      }
    });

    localStorage.setItem(STORAGE.pets, JSON.stringify(pets));
    localStorage.setItem('matchpet.other-animals.v1', 'true');
  }

  let favorites = read(STORAGE.favorites, []);
  if (!Array.isArray(favorites)) favorites = [];

  let requests = read(STORAGE.requests, []);
  if (!Array.isArray(requests)) requests = [];

  const state = {
    species: 'Todos',
    onlyFavorites: false,
    location: '',
    visibleCount: 8,
    toastTimer: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const petGrid = $('#petGrid');
  const petModal = $('#petModal');
  const formModal = $('#formModal');

  const escapeHtml = value =>
    String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);

  const photoStyle = image =>
    `background-image:url("${escapeHtml(image || photos.tobias)}")`;

  function savePets() {
    localStorage.setItem(STORAGE.pets, JSON.stringify(pets));
  }

  function showToast(message) {
    const toast = $('#toast');

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(state.toastTimer);

    state.toastTimer = setTimeout(
      () => toast.classList.remove('show'),
      2600
    );
  }

  function updateFavoriteCount() {
    $('#favoriteCount').textContent = favorites.length;
  }

  function populateCities() {
    const select = $('#cityFilter');
    const current = select.value;

    const cities = [
      ...new Set(pets.map(pet => pet.city).filter(Boolean))
    ].sort((a, b) => a.localeCompare(b, 'pt-BR'));

    select.innerHTML =
      '<option value="">Qualquer cidade</option>' +
      cities.map(city =>
        `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`
      ).join('');

    if (cities.includes(current)) {
      select.value = current;
    }
  }

  function matchingPets() {
    const query = $('#nameSearch').value.trim().toLocaleLowerCase('pt-BR');
    const size = $('#sizeFilter').value;
    const age = $('#ageFilter').value;
    const city = $('#cityFilter').value;

    const location = state.location.trim().toLocaleLowerCase('pt-BR');

    return pets.filter(pet => {
      const searchable =
        `${pet.name} ${pet.breed} ${pet.city} ${pet.state}`
          .toLocaleLowerCase('pt-BR');

      return (
        (state.species === 'Todos' || pet.species === state.species) &&
        (!query || searchable.includes(query)) &&
        (!location ||
          `${pet.city} ${pet.state}`.toLocaleLowerCase('pt-BR').includes(location)) &&
        (!size || pet.size === size) &&
        (!age || pet.ageGroup === age) &&
        (!city || pet.city === city) &&
        (!state.onlyFavorites || favorites.includes(pet.id))
      );
    });
  }

  function renderPets() {
    const results = matchingPets();
    const visible = results.slice(0, state.visibleCount);

    petGrid.innerHTML = visible.map(pet => `
      <article class="pet-card">
        <div class="pet-photo" style="${photoStyle(pet.image)}">
          <span class="pet-status">
            ${escapeHtml(pet.status || 'Pronto para adoção')}
          </span>

          <button
            class="favorite-button ${favorites.includes(pet.id) ? 'active' : ''}"
            data-favorite="${escapeHtml(pet.id)}"
            aria-label="${favorites.includes(pet.id) ? 'Remover dos' : 'Adicionar aos'} favoritos"
            aria-pressed="${favorites.includes(pet.id)}"
          >
            ${favorites.includes(pet.id) ? '♥' : '♡'}
          </button>
        </div>

        <div class="pet-card-body">
          <div class="pet-title-row">
            <h3>${escapeHtml(pet.name)}</h3>
            <span class="pet-gender">
              ${pet.sex === 'Macho' ? '♂' : '♀'}
            </span>
          </div>

          <div class="pet-meta">
            ${escapeHtml(pet.breed)} ·
            ${pet.age ? `${pet.age} ${pet.age === 1 ? 'ano' : 'anos'}` : 'menos de 1 ano'}
            · Porte ${escapeHtml(pet.size || 'Médio')}
          </div>

          <p class="pet-description">
            ${escapeHtml(pet.description)}
          </p>

          <div class="pet-card-footer">
            <span class="pet-location">
              <span>⌖</span>
              ${escapeHtml(pet.city)}${pet.state ? `, ${escapeHtml(pet.state)}` : ''}
            </span>

            <button class="pet-details" data-details="${escapeHtml(pet.id)}">
              Conhecer <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    $('#emptyState').classList.toggle('hidden', results.length > 0);
    petGrid.classList.toggle('hidden', results.length === 0);

    $('#resultsCount').textContent = state.onlyFavorites
      ? `${results.length} ${results.length === 1 ? 'favorito' : 'favoritos'}`
      : `${results.length} ${results.length === 1 ? 'pet esperando' : 'pets esperando'} por você`;

    $('#loadMore').classList.toggle(
      'hidden',
      results.length <= state.visibleCount
    );

    $('#favoritesOnly').classList.toggle('active', state.onlyFavorites);

    updateFavoriteCount();
  }

  function closeDialogs() {
    petModal.close();
    formModal.close();
  }

  function openPet(petId) {
    const pet = pets.find(item => item.id === petId);

    if (!pet) return;

    $('#petModalContent').innerHTML = `
      <div class="pet-modal-photo" style="${photoStyle(pet.image)}"></div>

      <div class="pet-modal-body">
        <p class="eyebrow">
          ${escapeHtml(pet.status || 'Pronto para adoção')}
        </p>

        <h2 id="petModalTitle">
          Oi, eu sou ${escapeHtml(pet.name)}
          <span aria-hidden="true">${pet.sex === 'Macho' ? '♂' : '♀'}</span>
        </h2>

        <div class="modal-meta">
          ${escapeHtml(pet.breed)} ·
          ${pet.age ? `${pet.age} ${pet.age === 1 ? 'ano' : 'anos'}` : 'menos de 1 ano'}
          · Porte ${escapeHtml(pet.size || 'Médio')}
          · ${escapeHtml(pet.city)}${pet.state ? `, ${escapeHtml(pet.state)}` : ''}
        </div>

        <p class="modal-description">
          ${escapeHtml(pet.description)}
        </p>

        <div class="modal-tags">
          ${(pet.traits || []).map(trait =>
            `<span>${escapeHtml(trait)}</span>`
          ).join('')}
        </div>

        <div class="shelter-box">
          <span>
            <strong>${escapeHtml(pet.shelter || 'ONG parceira')}</strong>
            Responsável pelo acolhimento
          </span>
          <span aria-hidden="true">♡</span>
        </div>

        <button class="button button-orange modal-cta" data-adopt="${escapeHtml(pet.id)}">
          Tenho interesse em conhecer
          <span aria-hidden="true">→</span>
        </button>

        ${pet.isMine ? `
          <div class="owner-actions">
            <button class="text-link" data-edit="${escapeHtml(pet.id)}">
              Editar cadastro
            </button>

            <button class="text-link" data-delete="${escapeHtml(pet.id)}">
              Remover pet
            </button>
          </div>
        ` : ''}

        <p class="form-hint">
          Protótipo demonstrativo: seu interesse fica salvo apenas neste navegador.
        </p>
      </div>
    `;

    petModal.showModal();
  }

  function petFormMarkup(pet = {}) {
    const editing = Boolean(pet.id);

    return `
      <div class="form-content">
        <p class="eyebrow">
          ${editing ? 'Atualizar perfil' : 'Uma nova história começa aqui'}
        </p>

        <h2 id="formModalTitle">
          ${editing ? `Editar ${escapeHtml(pet.name)}` : 'Cadastre um pet para adoção'}
        </h2>

        <p>
          Preencha os dados do pet. Neste protótipo, o cadastro fica salvo localmente neste navegador.
        </p>

        <form id="petForm" data-pet-id="${escapeHtml(pet.id || '')}">
          <div class="form-grid">

            <label class="form-field">
              <span>Nome do pet *</span>
              <input
                name="name"
                required
                maxlength="40"
                value="${escapeHtml(pet.name || '')}"
                placeholder="Ex.: Amora"
              >
            </label>

            <label class="form-field">
              <span>Espécie *</span>
              <select name="species" required>
                <option value="Cachorro" ${pet.species === 'Cachorro' ? 'selected' : ''}>Cachorro</option>
                <option value="Gato" ${pet.species === 'Gato' ? 'selected' : ''}>Gato</option>
                <option value="Outros" ${pet.species === 'Outros' ? 'selected' : ''}>Outros animais</option>
              </select>
            </label>

            <label class="form-field">
              <span>Raça</span>
              <input
                name="breed"
                maxlength="50"
                value="${escapeHtml(pet.breed || '')}"
                placeholder="Sem raça definida"
              >
            </label>

            <label class="form-field">
              <span>Idade em anos</span>
              <input
                name="age"
                type="number"
                min="0"
                max="30"
                value="${escapeHtml(pet.age ?? 1)}"
              >
            </label>

            <label class="form-field">
              <span>Porte</span>
              <select name="size">
                <option ${pet.size === 'Pequeno' ? 'selected' : ''}>Pequeno</option>
                <option ${!pet.size || pet.size === 'Médio' ? 'selected' : ''}>Médio</option>
                <option ${pet.size === 'Grande' ? 'selected' : ''}>Grande</option>
              </select>
            </label>

            <label class="form-field">
              <span>Sexo</span>
              <select name="sex">
                <option ${pet.sex === 'Fêmea' ? 'selected' : ''}>Fêmea</option>
                <option ${!pet.sex || pet.sex === 'Macho' ? 'selected' : ''}>Macho</option>
              </select>
            </label>

            <label class="form-field">
              <span>Cidade *</span>
              <input
                name="city"
                required
                maxlength="50"
                value="${escapeHtml(pet.city || '')}"
                placeholder="Sua cidade"
              >
            </label>

            <label class="form-field">
              <span>Estado</span>
              <input
                name="state"
                maxlength="2"
                value="${escapeHtml(pet.state || '')}"
                placeholder="SP"
              >
            </label>

            <label class="form-field full">
              <span>Link de uma foto (opcional)</span>
              <input
                name="image"
                type="url"
                value="${escapeHtml(pet.image || '')}"
                placeholder="https://..."
              >
            </label>

            <label class="form-field full">
              <span>Conte um pouco sobre ele</span>
              <textarea
                name="description"
                maxlength="300"
                placeholder="Personalidade, rotina, o que ele gosta..."
              >${escapeHtml(pet.description || '')}</textarea>
            </label>

            <label class="form-field full">
              <span>ONG ou responsável</span>
              <input
                name="shelter"
                maxlength="60"
                value="${escapeHtml(pet.shelter || '')}"
                placeholder="Nome da ONG"
              >
            </label>

          </div>

          <button class="button button-orange" type="submit">
            ${editing ? 'Salvar alterações' : 'Cadastrar pet'}
            <span aria-hidden="true">→</span>
          </button>

          <p class="form-hint">
            Os dados ficam no armazenamento local do navegador e não são enviados para nenhum servidor.
          </p>
        </form>
      </div>
    `;
  }

  function openPetForm(pet = null) {
    $('#formModalContent').innerHTML = petFormMarkup(pet || {});
    petModal.close();
    formModal.showModal();
  }

  function safeImageUrl(value) {
    if (!value) return photos.tobias;

    try {
      const url = new URL(value);

      return ['https:', 'http:'].includes(url.protocol)
        ? url.href
        : photos.tobias;
    } catch {
      return photos.tobias;
    }
  }

  function adoptionForm(pet) {
    $('#formModalContent').innerHTML = `
      <div class="form-content">
        <p class="eyebrow">Um primeiro oi</p>

        <h2 id="formModalTitle">
          Quero conhecer ${escapeHtml(pet.name)}
        </h2>

        <p>
          Conte como podemos entrar em contato. Este formulário é demonstrativo e salva os dados somente neste navegador.
        </p>

        <form id="interestForm" data-pet-id="${escapeHtml(pet.id)}">
          <div class="form-grid">

            <label class="form-field full">
              <span>Seu nome *</span>
              <input
                name="name"
                required
                maxlength="80"
                autocomplete="name"
                placeholder="Como podemos te chamar?"
              >
            </label>

            <label class="form-field full">
              <span>Seu e-mail *</span>
              <input
                name="email"
                type="email"
                required
                maxlength="120"
                autocomplete="email"
                placeholder="voce@email.com"
              >
            </label>

            <label class="form-field full">
              <span>Sua cidade *</span>
              <input
                name="city"
                required
                maxlength="60"
                placeholder="Cidade onde mora"
              >
            </label>

            <label class="form-field full">
              <span>Uma mensagem para a ONG</span>
              <textarea
                name="message"
                maxlength="400"
                placeholder="Conte um pouquinho sobre você e seu futuro companheiro"
              ></textarea>
            </label>

          </div>

          <button class="button button-orange" type="submit">
            Enviar meu interesse
            <span aria-hidden="true">→</span>
          </button>

          <p class="form-hint">
            Nenhum e-mail será enviado no protótipo.
          </p>
        </form>
      </div>
    `;

    petModal.close();
    formModal.showModal();
  }

  petGrid.addEventListener('click', event => {
    const favoriteButton = event.target.closest('[data-favorite]');

    if (favoriteButton) {
      const id = favoriteButton.dataset.favorite;

      favorites = favorites.includes(id)
        ? favorites.filter(item => item !== id)
        : [...favorites, id];

      localStorage.setItem(
        STORAGE.favorites,
        JSON.stringify(favorites)
      );

      renderPets();
      return;
    }

    const details = event.target.closest('[data-details]');

    if (details) {
      openPet(details.dataset.details);
    }
  });

  document.addEventListener('click', event => {
    const featured = event.target.closest('[data-pet]');

    if (featured) {
      openPet(featured.dataset.pet);
    }

    const adopt = event.target.closest('[data-adopt]');

    if (adopt) {
      const pet = pets.find(item => item.id === adopt.dataset.adopt);

      if (pet) adoptionForm(pet);
    }

    const close = event.target.closest('[data-close]');

    if (close) {
      close.closest('dialog').close();
    }

    const edit = event.target.closest('[data-edit]');

    if (edit) {
      const pet = pets.find(item => item.id === edit.dataset.edit);

      if (pet) openPetForm(pet);
    }

    const remove = event.target.closest('[data-delete]');

    if (remove) {
      pets = pets.filter(pet => pet.id !== remove.dataset.delete);
      favorites = favorites.filter(id => id !== remove.dataset.delete);

      savePets();

      localStorage.setItem(
        STORAGE.favorites,
        JSON.stringify(favorites)
      );

      petModal.close();
      populateCities();
      renderPets();

      showToast('Cadastro removido deste navegador.');
    }
  });

  [petModal, formModal].forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });


  $$('.filter-tab').forEach(button => {
    button.addEventListener('click', () => {
      state.species = button.dataset.species;
      state.visibleCount = 8;

      $$('.filter-tab').forEach(tab => {
        tab.classList.toggle('selected', tab === button);
      });

      renderPets();
    });
  });

  ['nameSearch', 'sizeFilter', 'ageFilter', 'cityFilter'].forEach(id => {
    $(`#${id}`).addEventListener('input', () => {
      state.visibleCount = 8;
      renderPets();
    });
  });

  $('#heroSearch').addEventListener('submit', event => {
    event.preventDefault();

    state.location = $('#locationSearch').value.trim();

    $('#nameSearch').value = '';
    $('#cityFilter').value = '';

    $('#encontrar').scrollIntoView({
      behavior: 'smooth'
    });

    renderPets();
  });

  $('#clearFilters').addEventListener('click', () => resetFilters());
  $('#emptyReset').addEventListener('click', () => resetFilters());

  function resetFilters() {
    state.species = 'Todos';
    state.onlyFavorites = false;
    state.location = '';
    state.visibleCount = 8;

    $('#nameSearch').value = '';
    $('#locationSearch').value = '';
    $('#sizeFilter').value = '';
    $('#ageFilter').value = '';
    $('#cityFilter').value = '';

    $$('.filter-tab').forEach(tab => {
      tab.classList.toggle(
        'selected',
        tab.dataset.species === 'Todos'
      );
    });

    renderPets();
  }

  $('#favoritesOnly').addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;
    renderPets();
  });

  $('#showFavorites').addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;

    $('#encontrar').scrollIntoView({
      behavior: 'smooth'
    });

    renderPets();
  });

  $('#loadMore').addEventListener('click', () => {
    state.visibleCount += 8;
    renderPets();
  });

  [
    'openPetForm',
    'ctaPetForm',
    'footerPetForm',
    'navPetForm'
  ].forEach(id => {
    $(`#${id}`).addEventListener('click', () => {
      $('#mainNav').classList.remove('open');

      $('#menuToggle').setAttribute(
        'aria-expanded',
        'false'
      );

      openPetForm();
    });
  });

  $('#formModalContent').addEventListener('submit', event => {
    if (event.target.id === 'petForm') {
      event.preventDefault();

      const form = event.target;

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const existingId = form.dataset.petId;

      const old = pets.find(pet => pet.id === existingId);

      const age = Math.max(
        0,
        Number.parseInt(data.get('age') || '0', 10) || 0
      );

      const pet = {
        ...(old || {}),

        id: existingId ||
          `pet-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,

        name: data.get('name').trim(),
        species: data.get('species'),
        breed: data.get('breed').trim() || 'Sem raça definida',
        age,

        ageGroup: age === 0
          ? 'filhote'
          : age < 7
            ? 'adulto'
            : 'idoso',

        size: data.get('size'),
        sex: data.get('sex'),
        city: data.get('city').trim(),
        state: data.get('state').trim().toUpperCase(),
        image: safeImageUrl(data.get('image').trim()),

        description: data.get('description').trim() ||
          'Um novo amigo procurando um lar cheio de carinho.',

        traits: old?.traits || ['Pronto para conhecer você'],
        shelter: data.get('shelter').trim() || 'Comunidade MatchPet',
        status: 'Pronto para adoção',
        isMine: true
      };

      pets = old
        ? pets.map(item => item.id === existingId ? pet : item)
        : [pet, ...pets];

      savePets();
      populateCities();
      formModal.close();
      resetFilters();

      showToast(
        old
          ? 'Cadastro atualizado com carinho!'
          : `${pet.name} agora está no MatchPet!`
      );
    }

    if (event.target.id === 'interestForm') {
      event.preventDefault();

      const form = event.target;

      if (!form.reportValidity()) return;

      const data = new FormData(form);

      const pet = pets.find(
        item => item.id === form.dataset.petId
      );

      requests.push({
        id: `interest-${Date.now()}`,
        petId: form.dataset.petId,
        petName: pet?.name || '',
        name: data.get('name').trim(),
        email: data.get('email').trim(),
        city: data.get('city').trim(),
        message: data.get('message').trim(),
        createdAt: new Date().toISOString()
      });

      localStorage.setItem(
        STORAGE.requests,
        JSON.stringify(requests)
      );

      formModal.close();

      showToast('Seu interesse ficou salvo neste navegador.');
    }
  });

  $('#menuToggle').addEventListener('click', () => {
    const nav = $('#mainNav');
    const open = nav.classList.toggle('open');

    $('#menuToggle').setAttribute(
      'aria-expanded',
      String(open)
    );
  });

  $$('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
      $('#mainNav').classList.remove('open');

      $('#menuToggle').setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });

  populateCities();
  renderPets();

})();
