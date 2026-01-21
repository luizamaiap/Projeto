 Chocoláxia - Web App de Confeitaria

Aplicação web desenvolvida como projeto final da disciplina de Desenvolvimento Web. O sistema simula um e-commerce de confeitaria, permitindo navegação por categorias, gestão de carrinho de compras e simulação de checkout com persistência de dados.

  Tecnologias Utilizadas

* React (Vite)
* TypeScript
* Tailwind CSS (Estilização)
* Web Storage API (Persistência Local)
* Vibration API (HTML5 Nativo)

---

  Checklist de Conformidade

Conforme solicitado, abaixo estão os requisitos atendidos no projeto:

- [✓] Estruturas básicas (condicionais, laços, funções).
- [✓] Objetos + Arrays com map/filter/reduce (≥ 3 métodos).
- [✓] Arrow functions (incluindo eventos).
- [✓] DOM dinâmico (criação/remoção/atualização; formulários e eventos).
- [✓] Requisição assíncrona com fetch + loading/erros.
- [✓] Promises (.then/.catch) e async/await (try/catch).
- [✓] Web Storage para persistência.
- [✓] +1 API HTML5 opcional (File/Geolocation/History/Canvas/Audio/Video/Clipboard). *(Implementado: Vibration API)*
- [✓] Responsivo + semântica + acessibilidade básica.
- [✓] Organização de arquivos e README completo.

---

  Detalhes da Implementação Técnica

 1. Hooks e Estruturas
* Gerenciamento de estado complexo com `useState`, `useEffect` e `useMemo`.
* Uso de arrow functions em todos os componentes e eventos (`onClick`).

 2. Manipulação de Arrays
* Filter: Filtragem dinâmica de produtos por categoria.
* Map: Renderização das listas de produtos e itens do carrinho.
* Reduce: Cálculo matemático do valor total da compra.

 3. Requisição Assíncrona e Fetch
* Implementado um `useEffect` que simula uma chamada de API (`fetch`) com `Promise` e delay artificial na inicialização, exibindo feedback visual de **Loading**.

 4. Async/Await e Try/Catch
* O fluxo de checkout é assíncrono. Utiliza `async/await` dentro de um bloco `try/catch/finally` para gerenciar o envio do pedido e tratar possíveis erros de conexão.

 5. Web Storage (Persistência)
* O Carrinho e o Histórico de Pedidos são salvos automaticamente no `localStorage`. Os dados persistem mesmo após recarregar a página.

 6. API HTML5 Extra
* Uso da Vibration API (`navigator.vibrate`) para fornecer feedback tátil ao usuário na confirmação do pedido (dispositivos móveis).

---

  Declaração de Autoria e Uso de IA

Conforme exigido nas diretrizes do trabalho, declaro o uso de ferramentas de Inteligência Artificial para apoio no desenvolvimento:

* Ferramenta utilizada: Google Gemini.
* Partes apoiadas pela IA:
    * Refatoração do componente `App.tsx` para inclusão de lógica assíncrona (`async/await`) e simulação de API.
    * Implementação da lógica de persistência de dados (`localStorage`) e correção de erros de renderização em Hooks (`useMemo`).
    * Geração de estrutura base para este arquivo README.
* Decisões mantidas (Autoria):
    * Toda a concepção visual, design UI/UX e escolha da paleta de cores.
    * A estrutura de componentes (Header, Cards, Navegação) e a arquitetura de arquivos.
    * A lógica de negócio (produtos, categorias e fluxo de navegação) foi definida pelo aluno e mantida integralmente, utilizando a IA apenas para aprimoramento técnico do código (Clean Code).

---

  Como rodar o projeto

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3.  Acesse no navegador:
    Verifique no terminal o endereço local indicado (geralmente `http://localhost:5173`) e abra-o em seu navegador.

---

Desenvolvido por Luiza Palma Almeida Maia.