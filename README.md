# 🎓 Calculadora de Média - Acadepol (Turma Falcão)

![Version](https://img.shields.io/badge/version-2.1-blue.svg) ![Chrome](https://img.shields.io/badge/platform-Google%20Chrome-red.svg) ![Privacy](https://img.shields.io/badge/privacy-local%20only-green.svg)

Uma extensão para Google Chrome desenvolvida para auxiliar os alunos da **Turma Falcão** a calcularem sua média real no portal da Acadepol/RN (Não oficial).

A ferramenta automatiza a expansão da tabela de notas, filtra disciplinas não cursadas (notas zeradas) e apresenta a média aritmética em um painel visual flutuante.

---

## 🚀 Funcionalidades

* **Automação:** Expande automaticamente a lista de disciplinas para exibir até 100 itens (evitando erros de cálculo por paginação).
* **Filtro Inteligente:** Ignora notas `0.0` ou disciplinas sem lançamento, calculando a média apenas do que foi efetivamente cursado.
* **Painel Flutuante:** Dashboard não intrusivo com botão de minimizar/maximizar.
* **Feedback Visual:** Indicadores de cor (Verde/Amarelo/Vermelho) baseados no desempenho.
* **Privacidade Total:** Nenhum dado sai do seu computador. Tudo roda localmente.

---

## 📦 Como Instalar

Como esta é uma ferramenta de uso interno e não está listada publicamente na Chrome Web Store, a instalação é feita no modo de desenvolvedor. É simples e leva menos de 1 minuto:

### Passo 1: Baixar
1.  Baixe o arquivo `.zip` deste projeto (ou clone o repositório).
2.  **IMPORTANTE:** Extraia (descompacte) o conteúdo do ZIP para uma pasta comum (ex: na sua Área de Trabalho).
    * *Não funciona se você tentar carregar direto de dentro do ZIP.*

### Passo 2: Ativar no Chrome
1.  Abra o Google Chrome.
2.  Na barra de endereços, digite: `chrome://extensions` e aperte Enter.
3.  No canto superior direito, ative a chave **"Modo do desenvolvedor"** (Developer mode).

### Passo 3: Carregar
1.  Clique no botão **"Carregar sem compactação"** (Load unpacked) que apareceu no canto superior esquerdo.
2.  Selecione a pasta que você extraiu no Passo 1.
3.  Pronto! O ícone da extensão deve aparecer na sua barra de tarefas.

---

## 🖥️ Como Usar

1.  Acesse o portal do aluno da Acadepol na página de notas:
    * `https://acadepol.policiacivil.rn.gov.br/AcadSis/Home/NotaFrequencia`
2.  Assim que a página carregar, você verá o **Painel Falcão** no canto superior direito.
3.  Clique no botão **"📊 EXPANDIR & CALCULAR"**.
4.  Aguarde alguns segundos enquanto a extensão carrega todas as disciplinas e processa as notas.
5.  Sua média real aparecerá no painel.

> **Dica:** O painel está cobrindo algo? Clique no "X" para minimizá-lo. Um ícone flutuante aparecerá para você restaurá-lo quando quiser.

---

## 🔒 Privacidade e Segurança

Levamos a segurança a sério, especialmente considerando o ambiente institucional.

* **Processamento Local:** Esta extensão **NÃO** possui servidores. Ela não envia seus dados, notas ou senhas para lugar nenhum. O código roda 100% no seu navegador.
* **Permissões Restritas:** A extensão só tem permissão para ser executada na URL específica do sistema da Acadepol. Ela não funciona e não tem acesso a nenhum outro site (bancos, redes sociais, e-mails, etc.).
* **Código Aberto:** O código é Javascript puro e transparente, podendo ser auditado por qualquer pessoa com conhecimento técnico.

---

## ⚠️ Isenção de Responsabilidade (Disclaimer)

Esta é uma ferramenta **não oficial**, desenvolvida por alunos para fins de produtividade e estudo de programação.

* Esta extensão não possui vínculo oficial com a Polícia Civil do Rio Grande do Norte (PCRN) ou com a Acadepol.
* O cálculo apresentado é uma estimativa baseada nos dados visíveis em tela. Sempre confira seus resultados oficiais junto à secretaria.

---

## 🛠️ Tecnologias Utilizadas

* HTML5 / CSS3
* JavaScript (ES6+)
* Manifest V3 (Padrão atual do Google Chrome)

---

**Desenvolvido pela Turma Falcão 🦅**