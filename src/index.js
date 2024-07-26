const XLSX = require('xlsx');

// Exemplo de JSON de entrada
const jsonData = {
    // Passe um obj ou array..
};

// Função para converter JSON para planilha Excel
function jsonToExcel(jsonData) {
    const wb = XLSX.utils.book_new();
    const wsName = 'Dados';
    const wsData = [];

    // Transforma o JSON usando dot notation
    const flattenedData = flattenJson(jsonData);

    // Cabeçalho da planilha
    const headers = ['propriedade', 'valor'];
    wsData.push(headers);

    // Conteúdo da planilha
    Object.keys(flattenedData).forEach(prop => {
        const row = [prop, JSON.stringify(flattenedData[prop])];
        wsData.push(row);
    });

    // Criação da planilha
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, wsName);

    // Salva o arquivo
    const excelFileName = 'dados.xlsx';
    XLSX.writeFile(wb, excelFileName);
    console.log(`Planilha "${excelFileName}" gerada com sucesso.`);
}

// Função para achatar o JSON usando dot notation
function flattenJson(data, prefix = '') {
    let flattened = {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                if (Array.isArray(data[key])) {
                    // Caso seja um array, iteramos pelos elementos
                    data[key].forEach((item, index) => {
                        if (typeof item === 'object' && item !== null) {
                            // Se o item do array é um objeto, achata também
                            Object.assign(flattened, flattenJson(item, `${prefix}${key}[${index}].`));
                        } else {
                            // Caso contrário, adiciona diretamente
                            flattened[`${prefix}${key}[${index}]`] = item;
                        }
                    });
                } else {
                    // Caso seja um objeto, continuamos a recursão
                    Object.assign(flattened, flattenJson(data[key], `${prefix}${key}.`));
                }
            } else {
                flattened[`${prefix}${key}`] = data[key];
            }
        }
    }
    return flattened;
}

// Chama a função com o JSON de exemplo
jsonToExcel(jsonData);
