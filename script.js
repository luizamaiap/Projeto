// =================================================================
// 1. ESTRUTURA BÁSICA DE PROGRAMAÇÃO E OBJETOS (Cardápio)
// =================================================================

const mockProdutos = [
    // Seus produtos completos com categoria, preço e nome de arquivo
    { id: 101, nome: "Morangoláxia (Bolo no Pote)", preco: 18.00, imagem: "morangolaxia.jpg", categoria: "Bolo no Pote", descricao: "Bolo irresistível, com camadas macias, creme de leite Ninho e geleia de morango fresca. Doce e frutado na medida certa." },
    { id: 102, nome: "Cometa Tropical (Bolo no Pote)", preco: 16.00, imagem: "cometa_tropical.jpg", categoria: "Bolo no Pote", descricao: "Camadas de bolo de baunilha, creme de coco e pedaços de abacaxi. Sabor tropical que lembra a casa da vovó." },
    { id: 103, nome: "Prestígio Galático (Bolo no Pote)", preco: 16.00, imagem: "prestigio_galatico.jpg", categoria: "Bolo no Pote", descricao: "Um Clássico Irresistível. Bolo de chocolate, recheio cremoso de coco e cobertura de brigadeiro. O equilíbrio perfeito!" },
    { id: 104, nome: "Cereja Estelar (Bolo no Pote)", preco: 18.00, imagem: "cereja_estelar.jpg", categoria: "Bolo no Pote", descricao: "Floresta Negra no Pote: Massa de chocolate, brigadeiro nobre 50% cacau, cerejas e creme branco. Uma sobremesa refinada." },
    { id: 201, nome: "Cenoura Espacial (Caseirinho)", preco: 16.00, imagem: "cenoura_espacial.jpg", categoria: "Caseirinho", descricao: "Bolo de cenoura fofinho e úmido, coberto por uma camada de chocolate ao leite. Gosto de infância e aconchego." },
    { id: 202, nome: "Brigadeiro Cósmico (Caseirinho)", preco: 16.00, imagem: "brigadeiro_cosmico.jpg", categoria: "Caseirinho", descricao: "Bolo caseiro de chocolate com massa macia, coberto por uma cremosa camada de chocolate ao leite. Irresistível a cada mordida." },
    { id: 203, nome: "Dueto Intergaláctico (Caseirinho)", preco: 16.00, imagem: "dueto_intergalactico.jpg", categoria: "Caseirinho", descricao: "Bolo de Chocolate recheado com creme suave de Leite Ninho e coberto com brigadeiro cremoso. Derrete na boca!" },
    { id: 301, nome: "Eclipse Doce (Brownie Tradicional)", preco: 11.00, imagem: "eclipse_doce.jpg", categoria: "Brownie", descricao: "O clássico que derrete na boca. Textura macia por dentro e casquinha crocante por fora, feito com chocolate nobre." },
    { id: 302, nome: "Brookie Lunar (Brownie + Cookie)", preco: 14.00, imagem: "brookie_lunar.jpg", categoria: "Brownie", descricao: "A união perfeita entre brownie intenso e cookie crocante e doce. Uma explosão de texturas e sabores em uma só mordida!" },
    { id: 401, nome: "Morango Estrelar (Bombom)", preco: 12.00, imagem: "morango_estrelar.jpg", categoria: "Doce", descricao: "Morango fresco envolto em brigadeiro de Leite Ninho, banhado em puro chocolate nobre. Sabor suave, frutado e chocolatudo." },
    { id: 402, nome: "Caixinha Quatro Estrelas", preco: 18.00, imagem: "caixinha_quatro_estrelas.jpg", categoria: "Doce", descricao: "4 Brigadeiros gourmet artesanais: Leite Ninho, Chocolate Belga, Oreo e Beijinho. Cada unidade é uma explosão de sabor." }
];

let carrinho = [];

// =================================================================
// 2. MANIPULAÇÃO DO DOM (Obter Elementos)
// =================================================================
const listaProdutosEl = document.getElementById('lista-produtos');
const totalCarrinhoEl = document.getElementById('total-carrinho');
const finalizarPedidoBtn = document.getElementById('finalizar-pedido');
const obterLocalizacaoBtn = document.getElementById('obter-localizacao');
const filtroCategoriaEl = document.getElementById('filtro-categoria'); // Novo elemento de filtro
const menuToggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav');

// ... [Funções calcularTotal, adicionarAoCarrinho, removerDoCarrinho permanecem as mesmas] ...

// Arrow Function para calcular o total
const calcularTotal = () => carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

// Função para atualizar o DOM do Carrinho
const atualizarCarrinhoDOM = () => {
    // ... (Implementação idêntica da função)
    const itensCarrinhoEl = document.getElementById('itens-carrinho');
    const contadorCarrinhoEl = document.getElementById('contador-carrinho');
    
    itensCarrinhoEl.innerHTML = '';
    
    if (carrinho.length === 0) {
        itensCarrinhoEl.innerHTML = '<p class="empty-message">Seu carrinho está ansioso por um chocolate!</p>';
        totalCarrinhoEl.textContent = '0.00';
        contadorCarrinhoEl.textContent = '0';
        return;
    }

    carrinho.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('carrinho-item');
        itemEl.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            <button data-id="${item.id}" class="remover-item">Remover 1</button>
        `;
        itensCarrinhoEl.appendChild(itemEl);
    });

    totalCarrinhoEl.textContent = calcularTotal().toFixed(2);
    
    const numItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    contadorCarrinhoEl.textContent = numItens;

    document.querySelectorAll('.remover-item').forEach(button => {
        button.addEventListener('click', removerDoCarrinho);
    });
};

const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(item => item.id === produto.id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinhoDOM();
};

const removerDoCarrinho = (event) => {
    const produtoId = parseInt(event.target.dataset.id);
    const item = carrinho.find(i => i.id === produtoId);

    if (item) {
        if (item.quantidade > 1) {
            item.quantidade -= 1;
        } else {
            carrinho = carrinho.filter(i => i.id !== produtoId);
        }
    }
    
    atualizarCarrinhoDOM();
};

// =================================================================
// 3. FUNÇÃO DE FILTRAGEM (Manipulação de Arrays e DOM)
// =================================================================

/**
 * Filtra os produtos e recarrega o DOM.
 * @param {string} categoria - A categoria a ser filtrada (ou 'todos').
 */
const carregarProdutos = async (categoria = 'todos') => {
    listaProdutosEl.innerHTML = '<p>Carregando delícias...</p>';
    
    // Simulação assíncrona com Promise e await
    await new Promise(resolve => setTimeout(resolve, 500)); 
    let produtosExibidos = mockProdutos;

    // Lógica de Filtragem com Array.filter()
    if (categoria !== 'todos') {
        produtosExibidos = mockProdutos.filter(produto => produto.categoria === categoria);
    }
    
    listaProdutosEl.innerHTML = ''; // Limpa antes de inserir

    if (produtosExibidos.length === 0) {
        listaProdutosEl.innerHTML = `<p style="text-align: center; font-size: 1.2em;">Nenhum produto encontrado na categoria "${categoria}".</p>`;
        return;
    }

    // Inserção no DOM
    produtosExibidos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');
        card.innerHTML = `
            <img 
                src="imagens/${produto.imagem}" 
                alt="${produto.nome}" 
                onerror="this.onerror=null;this.src='imagens/placeholder.png';" 
                title="${produto.descricao}"
            >
            <h3>${produto.nome}</h3>
            <p><small>${produto.categoria}</small></p>
            <p class="preco-tag">R$ ${produto.preco.toFixed(2)}</p>
            <button data-id="${produto.id}" class="adicionar-carrinho btn-primary">Quero!</button>
        `;
        listaProdutosEl.appendChild(card);
    });

    // Adiciona o event listener para os novos botões de adicionar
    document.querySelectorAll('.adicionar-carrinho').forEach(button => {
        button.addEventListener('click', (event) => {
            const produtoId = parseInt(event.target.dataset.id);
            const produtoSelecionado = mockProdutos.find(p => p.id === produtoId);
            if (produtoSelecionado) {
                adicionarAoCarrinho(produtoSelecionado);
            }
        });
    });
};


// ... [Função obterLocalizacaoUsuario permanece a mesma, usando API HTML5] ...
const obterLocalizacaoUsuario = () => {
    // ... (Implementação idêntica da função)
    const statusLocalizacaoEl = document.getElementById('status-localizacao');
    
    if ("geolocation" in navigator) {
        statusLocalizacaoEl.textContent = "Buscando sua localização para estimar o frete...";

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const frete = (Math.random() * 15 + 5).toFixed(2); 
                statusLocalizacaoEl.innerHTML = `Localização obtida. Frete estimado: <span style="font-weight: bold; color: var(--color-chocolate-mid);">R$ ${frete}</span>.<br> Preparando sua rota de chocolate!`;
            },
            (error) => {
                let msg = "Não foi possível obter a localização. Verifique as configurações do navegador.";
                if (error.code === error.PERMISSION_DENIED) {
                    msg = "Permissão de localização negada. Habilite para calcular o frete!";
                }
                statusLocalizacaoEl.textContent = msg;
            }
        );
    } else {
        statusLocalizacaoEl.textContent = "Geolocalização não é suportada pelo seu navegador.";
    }
};

// =================================================================
// 4. INICIALIZAÇÃO E LISTENERS (DOM Events)
// =================================================================

// 1. Carrega os produtos iniciais
carregarProdutos();

// 2. Listener para o filtro de categoria
filtroCategoriaEl.addEventListener('change', (event) => {
    carregarProdutos(event.target.value); // Passa o valor selecionado
});

// 3. Listener para o menu responsivo
menuToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 4. Listener para obter a localização
obterLocalizacaoBtn.addEventListener('click', obterLocalizacaoUsuario);

// 5. Listener para finalizar o pedido
finalizarPedidoBtn.addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert(`Pedido da CHOCOLÁXIA finalizado! Total: R$ ${calcularTotal().toFixed(2)}. Em breve, sua dose de sabor!`);
        carrinho = []; // Limpa o carrinho
        atualizarCarrinhoDOM();
    } else {
        alert("Seu carrinho de chocolate está vazio. Que tal um brownie?");
    }
});