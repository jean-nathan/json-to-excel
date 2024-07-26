# JSON to Excel Converter

Este projeto é um script Node.js que converte dados JSON em uma planilha Excel (.xlsx). O script utiliza a biblioteca `xlsx` para manipulação de planilhas Excel.

## Funcionalidades

- **Conversão de JSON para Excel:** Transforma objetos e arrays JSON em uma planilha Excel.
- **Achatar JSON:** Utiliza dot notation para achatar estruturas JSON aninhadas.
- **Geração de Arquivo Excel:** Cria um arquivo `dados.xlsx` com o conteúdo convertido.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/jean-nathan/json-to-excel.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd json-to-excel
    ```

3. Instale as dependências necessárias:

    ```bash
    npm install
    ```

## Uso

1. Modifique o arquivo `index.js` para incluir o seu JSON de entrada. Substitua o conteúdo do objeto `jsonData` pelo seu JSON desejado.

    ```javascript
    const jsonData = {
        // Passe um objeto ou array aqui
    };
    ```

2. Execute o script para gerar a planilha Excel:

    ```bash
    node index.js
    ```

   Isso criará um arquivo chamado `dados.xlsx` no mesmo diretório do script.

## Estrutura do Código

- `index.js`: Script principal que realiza a conversão de JSON para Excel.
- `package-lock.json`: Arquivo gerado automaticamente que lista as versões exatas das dependências instaladas.

### Funções Principais

- `jsonToExcel(jsonData)`: Função que converte o JSON fornecido em uma planilha Excel e a salva como `dados.xlsx`.
- `flattenJson(data, prefix)`: Função auxiliar que achata o JSON, transformando estruturas aninhadas em uma notação dot.

## Exemplo de JSON

Você pode usar o seguinte exemplo de JSON para testar o script:

```json
{
    "nome": "João",
    "idade": 30,
    "endereços": [
        {
            "rua": "Rua A",
            "cidade": "Cidade X"
        },
        {
            "rua": "Rua B",
            "cidade": "Cidade Y"
        }
    ]
}
