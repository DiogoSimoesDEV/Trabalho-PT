// Dados dos produtos (preços em euros)
const produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro Max",
        categoria: "smartphone",
        preco: 1649.99,
        descricao: "O mais avançado iPhone com chip A17 Pro, câmara de 48MP e ecrã Super Retina XDR de 6.7 polegadas.",
        imagem: "📱",
        especificacoes: [
            "Ecrã: 6.7 polegadas Super Retina XDR",
            "Chip: A17 Pro",
            "Câmara: 48MP principal + 12MP ultra-angular",
            "Armazenamento: 256GB",
            "Bateria: Até 29h de vídeo"
        ]
    },
    {
        id: 2,
        nome: "Samsung Galaxy S24 Ultra",
        categoria: "smartphone",
        preco: 1449.99,
        descricao: "Smartphone premium com S Pen integrado, câmara de 200MP e processador Snapdragon 8 Gen 3.",
        imagem: "📱",
        especificacoes: [
            "Ecrã: 6.8 polegadas Dynamic AMOLED 2X",
            "Chip: Snapdragon 8 Gen 3",
            "Câmara: 200MP principal",
            "Armazenamento: 512GB",
            "S Pen incluído"
        ]
    },
    {
        id: 3,
        nome: "MacBook Pro 16\" M3 Max",
        categoria: "notebook",
        preco: 4599.99,
        descricao: "Portátil profissional com chip M3 Max, 36GB de RAM unificada e ecrã Liquid Retina XDR de 16.2 polegadas.",
        imagem: "💻",
        especificacoes: [
            "Chip: M3 Max com 16 núcleos",
            "RAM: 36GB unificada",
            "Armazenamento: 1TB SSD",
            "Ecrã: 16.2 polegadas Liquid Retina XDR",
            "Bateria: Até 22h de uso"
        ]
    },
    {
        id: 4,
        nome: "Dell XPS 15",
        categoria: "notebook",
        preco: 2399.99,
        descricao: "Portátil ultraportátil com Intel Core i9, 32GB RAM e ecrã OLED 4K de 15.6 polegadas.",
        imagem: "💻",
        especificacoes: [
            "Processador: Intel Core i9-13900H",
            "RAM: 32GB DDR5",
            "Armazenamento: 1TB NVMe SSD",
            "Ecrã: 15.6 polegadas OLED 4K",
            "GPU: NVIDIA RTX 4070"
        ]
    },
    {
        id: 5,
        nome: "iPad Pro 12.9\" M2",
        categoria: "tablet",
        preco: 1849.99,
        descricao: "Tablet profissional com chip M2, ecrã Liquid Retina XDR de 12.9 polegadas e suporte para Apple Pencil.",
        imagem: "📱",
        especificacoes: [
            "Chip: M2",
            "Ecrã: 12.9 polegadas Liquid Retina XDR",
            "Armazenamento: 256GB",
            "Câmara: 12MP + 10MP ultra-angular",
            "Suporte para Apple Pencil 2"
        ]
    },
    {
        id: 6,
        nome: "Samsung Galaxy Tab S9 Ultra",
        categoria: "tablet",
        preco: 1649.99,
        descricao: "Tablet premium com ecrã AMOLED de 14.6 polegadas, S Pen incluído e processador Snapdragon 8 Gen 2.",
        imagem: "📱",
        especificacoes: [
            "Ecrã: 14.6 polegadas AMOLED",
            "Chip: Snapdragon 8 Gen 2",
            "Armazenamento: 256GB",
            "S Pen incluído",
            "Bateria: 11200mAh"
        ]
    },
    {
        id: 7,
        nome: "AirPods Pro 2",
        categoria: "acessorio",
        preco: 459.99,
        descricao: "Auscultadores com cancelamento ativo de ruído, áudio espacial e até 30h de bateria com estojo.",
        imagem: "🎧",
        especificacoes: [
            "Cancelamento ativo de ruído",
            "Áudio espacial",
            "Bateria: 6h + 24h com estojo",
            "Resistente a água e suor",
            "Chip H2"
        ]
    },
    {
        id: 8,
        nome: "Apple Watch Ultra 2",
        categoria: "acessorio",
        preco: 1099.99,
        descricao: "Relógio inteligente premium com GPS de precisão, resistente a 100m de profundidade e bateria de até 36h.",
        imagem: "⌚",
        especificacoes: [
            "Ecrã: 49mm sempre ligado",
            "GPS de precisão",
            "Resistente a 100m",
            "Bateria: Até 36h",
            "Chip S9 SiP"
        ]
    },
    {
        id: 9,
        nome: "Magic Keyboard Pro",
        categoria: "acessorio",
        preco: 239.99,
        descricao: "Teclado mecânico sem fios com iluminação RGB, switches Cherry MX e bateria de longa duração.",
        imagem: "⌨️",
        especificacoes: [
            "Switches: Cherry MX Brown",
            "Iluminação RGB",
            "Bateria: Até 200h",
            "Ligação: Bluetooth 5.0",
            "Layout: PT"
        ]
    },
    {
        id: 10,
        nome: "Monitor LG UltraWide 34\"",
        categoria: "acessorio",
        preco: 739.99,
        descricao: "Monitor ultrawide curvo com resolução 3440x1440, 144Hz e tecnologia HDR10.",
        imagem: "🖥️",
        especificacoes: [
            "Ecrã: 34 polegadas ultrawide curvo",
            "Resolução: 3440x1440",
            "Taxa de atualização: 144Hz",
            "HDR10",
            "Ligações: USB-C, HDMI, DisplayPort"
        ]
    },
    {
        id: 11,
        nome: "Xiaomi 14 Pro",
        categoria: "smartphone",
        preco: 1099.99,
        descricao: "Flagship com Snapdragon 8 Gen 3, câmara Leica de 50MP e carregamento rápido de 120W.",
        imagem: "📱",
        especificacoes: [
            "Ecrã: 6.73 polegadas AMOLED",
            "Chip: Snapdragon 8 Gen 3",
            "Câmara: 50MP Leica",
            "Armazenamento: 512GB",
            "Carregamento: 120W"
        ]
    },
    {
        id: 12,
        nome: "ASUS ROG Zephyrus G16",
        categoria: "notebook",
        preco: 2949.99,
        descricao: "Portátil gamer com Intel Core i9, RTX 4080 e ecrã de 16 polegadas 240Hz.",
        imagem: "💻",
        especificacoes: [
            "Processador: Intel Core i9-13900H",
            "GPU: NVIDIA RTX 4080",
            "RAM: 32GB DDR5",
            "Ecrã: 16 polegadas 240Hz",
            "Armazenamento: 2TB NVMe SSD"
        ]
    }
];

// Estado do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para formatar preço em euros
function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR'
    }).format(preco);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('produtosGrid')) {
        renderizarProdutos();
    }
    atualizarCarrinho();
    setupEventListeners();
});

// Renderizar produtos
function renderizarProdutos(categoria = 'all') {
    const produtosGrid = document.getElementById('produtosGrid');
    if (!produtosGrid) return;
    
    const produtosFiltrados = categoria === 'all' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoria);

    produtosGrid.innerHTML = produtosFiltrados.map(produto => `
        <div class="produto-card" data-id="${produto.id}">
            <div class="produto-image">${produto.imagem}</div>
            <div class="produto-info">
                <div class="produto-categoria">${getCategoriaNome(produto.categoria)}</div>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-footer">
                    <div class="produto-preco">${formatarPreco(produto.preco)}</div>
                    <button class="btn-add-cart" onclick="adicionarAoCarrinho(${produto.id})">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Adicionar evento de clique para ver detalhes
    document.querySelectorAll('.produto-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-add-cart')) {
                const produtoId = parseInt(card.dataset.id);
                mostrarDetalhesProduto(produtoId);
            }
        });
    });
}

// Obter nome da categoria
function getCategoriaNome(categoria) {
    const categorias = {
        'smartphone': 'Smartphone',
        'notebook': 'Portátil',
        'tablet': 'Tablet',
        'acessorio': 'Acessório'
    };
    return categorias[categoria] || categoria;
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemExistente = carrinho.find(item => item.id === produtoId);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho();
    atualizarCarrinho();
    if (document.getElementById('carrinhoItems')) {
        renderizarCarrinho();
    }
}

// Atualizar quantidade
function atualizarQuantidade(produtoId, delta) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            salvarCarrinho();
            atualizarCarrinho();
            if (document.getElementById('carrinhoItems')) {
                renderizarCarrinho();
            }
        }
    }
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Atualizar contador do carrinho
function atualizarCarrinho() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
        cartCountEl.textContent = totalItens;
    }
}

// Renderizar carrinho
function renderizarCarrinho() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems) return;

    if (carrinho.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>O seu carrinho está vazio</p>
            </div>
        `;
        if (cartTotal) {
            cartTotal.textContent = '0,00 €';
        }
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);

    cartItems.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.imagem}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">${formatarPreco(item.preco * item.quantidade)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantidade}</span>
                <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        </div>
    `).join('');

    if (cartTotal) {
        cartTotal.textContent = formatarPreco(total);
    }
    const checkoutTotal = document.getElementById('checkoutTotal');
    if (checkoutTotal) {
        checkoutTotal.textContent = formatarPreco(total);
    }
}

// Renderizar carrinho completo (página do carrinho)
function renderizarCarrinhoCompleto() {
    const carrinhoItems = document.getElementById('carrinhoItems');
    const subtotalEl = document.getElementById('subtotal');
    const portesEl = document.getElementById('portes');
    const totalEl = document.getElementById('totalCarrinho');

    if (!carrinhoItems) return;

    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>O seu carrinho está vazio</h3>
                <p>Adicione produtos ao carrinho para continuar</p>
                <a href="produtos.html" class="btn btn-primary" style="margin-top: 2rem;">Ver Produtos</a>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = '0,00 €';
        if (portesEl) portesEl.textContent = '0,00 €';
        if (totalEl) totalEl.textContent = '0,00 €';
        return;
    }

    const subtotal = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const portes = subtotal >= 50 ? 0 : 5.99;
    const total = subtotal + portes;

    carrinhoItems.innerHTML = carrinho.map(item => `
        <div class="cart-item-full">
            <div class="cart-item-image">${item.imagem}</div>
            <div class="cart-item-info-full">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">${formatarPreco(item.preco)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, -1); renderizarCarrinhoCompleto();">-</button>
                <span class="quantity">${item.quantidade}</span>
                <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, 1); renderizarCarrinhoCompleto();">+</button>
            </div>
            <div class="cart-item-total">
                ${formatarPreco(item.preco * item.quantidade)}
            </div>
            <button class="remove-btn" onclick="removerDoCarrinho(${item.id}); renderizarCarrinhoCompleto();">Remover</button>
        </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = formatarPreco(subtotal);
    if (portesEl) portesEl.textContent = formatarPreco(portes);
    if (totalEl) totalEl.textContent = formatarPreco(total);
}

// Mostrar detalhes do produto
function mostrarDetalhesProduto(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    const modalTitle = document.getElementById('productModalTitle');

    if (!modal || !modalBody || !modalTitle) return;

    modalTitle.textContent = produto.nome;
    modalBody.innerHTML = `
        <div class="product-details">
            <div class="product-details-image">${produto.imagem}</div>
            <div class="product-details-info">
                <div class="produto-categoria">${getCategoriaNome(produto.categoria)}</div>
                <div class="product-details-price">${formatarPreco(produto.preco)}</div>
                <p class="product-details-desc">${produto.descricao}</p>
                <div class="product-specs">
                    <h4>Especificações Técnicas</h4>
                    <ul>
                        ${produto.especificacoes.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id}); fecharModal('productModal');" style="width: 100%; margin-top: 1rem;">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// Setup event listeners
function setupEventListeners() {
    // Modal de produto
    const closeProduct = document.getElementById('closeProduct');
    if (closeProduct) {
        closeProduct.addEventListener('click', () => {
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Fechar modais ao clicar fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// Fechar modal
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--accent), var(--accent-light));
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s;
    `;
    notification.textContent = mensagem;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
