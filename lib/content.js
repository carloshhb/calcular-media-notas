let painelRef = null;
let btnFloatRef = null;

// Inicializa a UI assim que a página carrega
window.addEventListener('load', () => {
    // Verifica se estamos na página certa (se tem a tabela)
    const tabela = document.getElementById('statusAluno');
    if (tabela) {
        criarPainel();
    }
});

function criarPainel() {
    if (document.getElementById('painel-falcao')) return;

    painelRef = document.createElement('div');
    painelRef.id = 'painel-falcao';
    painelRef.innerHTML = `
        <button id="btn-fechar-painel" class="btn-close" title="Minimizar">×</button>
        <h3>Média</h3>
        <div id="display-media" class="valor-destaque">--</div>
        <div id="display-detalhe" class="status">Aguardando comando...</div>
        <button id="btn-calcular" class="btn-acao">Calcular</button>
    `;

    document.body.appendChild(painelRef);
    
    btnFloatRef = document.createElement('button');
    btnFloatRef.id = 'btn-float-falcao';
    btnFloatRef.innerHTML = '🦅'; // Ícone da águia/falcão
    btnFloatRef.title = "Abrir Calculadora";

    document.body.appendChild(btnFloatRef);
    
    document.getElementById('btn-calcular').addEventListener('click', executarAutomacao);
    document.getElementById('btn-fechar-painel').addEventListener('click', minimizarPainel);
    
    btnFloatRef.addEventListener('click', restaurarPainel);
}

function minimizarPainel() {
    if (painelRef && btnFloatRef) {
        painelRef.style.display = 'none';
        btnFloatRef.style.display = 'flex';
    }
}

function restaurarPainel() {
    if (painelRef && btnFloatRef) {
        btnFloatRef.style.display = 'none';
        painelRef.style.display = 'block';
    }
}

function executarAutomacao() {
    const btn = document.getElementById('btn-calcular');
    const status = document.getElementById('display-detalhe');
    
    // 1. Bloqueia o botão para evitar cliques duplos
    btn.disabled = true;
    btn.innerText = "⏳ PROCESSANDO...";
    status.innerText = "Expandindo tabela para 100 itens...";

    // 2. Tenta expandir a tabela
    const expandiu = forcarExibicao100();

    // 3. Define o tempo de espera (se expandiu, precisa esperar carregar. Se já estava em 100, é rápido)
    const tempoEspera = expandiu ? 1500 : 300; 

    setTimeout(() => {
        calcularMedia();
        btn.disabled = false;
        btn.innerText = "Recalcular";
    }, tempoEspera);
}

function forcarExibicao100() {
    // O DataTables cria um select com name="ID_DA_TABELA_length"
    const seletor = document.querySelector('select[name="statusAluno_length"]');
    
    if (seletor && seletor.value !== "100") {
        console.log("Extensão: Forçando exibição de 100 itens...");
        seletor.value = "100";
        // Dispara o evento 'change' para o DataTables perceber a mudança
        seletor.dispatchEvent(new Event('change', { bubbles: true }));
        return true; // Retorna true indicando que houve mudança
    }
    return false; // Já estava em 100 ou não achou
}

function calcularMedia() {
    const tabela = document.getElementById('statusAluno');
    if (!tabela) return console.error("❌ Tabela #statusAluno não encontrada!");
    const status = document.getElementById('display-detalhe');
    const display = document.getElementById('display-media');

    // Descobre coluna NOTA
    const headers = Array.from(tabela.querySelectorAll('thead th'));
    const indexNota = headers.findIndex(th => th.innerText.trim().toUpperCase() === 'NOTA');

    if (indexNota === -1) {
        status.innerText = "Erro: Coluna NOTA não achada.";
        return;
    }

    const linhas = tabela.querySelectorAll('tbody tr');
    let soma = 0;
    let contador = 0;
    let notasProcessadas = [];

    linhas.forEach(linha => {
        const colunas = linha.querySelectorAll('td');
        if (colunas.length <= indexNota) return;

        const textoCelula = colunas[indexNota].innerText;
        
        const valorLimpo = textoCelula.replace(',', '.').replace('%', '').trim();
        const nota = parseFloat(valorLimpo);

        if (!isNaN(nota) && nota !== 0) {
            soma += nota;
            contador++;
            
            const nomeMateria = colunas[0].innerText.split('\n')[0].trim();
            notasProcessadas.push(`${nomeMateria}: ${nota}`);
        }
    });

    // Resultado
    const media = contador > 0 ? (soma / contador) : 0;
    if (contador === 0) {
        display.innerText = "0.0";
        status.innerText = "Nenhuma nota lançada encontrada.";
        display.style.color = "#ecf0f1";
    } else {
        display.innerText = media.toFixed(3);
        status.innerText = `Baseada em ${contador} disciplinas`;
        
        // Feedback Visual de Cor
        if (media >= 9) display.style.color = "#2ecc71"; // Verde Top
        else if (media >= 8) display.style.color = "#f1c40f"; // Amarelo Atenção
        else display.style.color = "#e74c3c"; // Vermelho
    }
}