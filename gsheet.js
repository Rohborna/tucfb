import { google } from 'googleapis';

import credentials from './credentials.json' assert { type: "json" };

const SHEET_ID = '1VBTeNnmWbacUyouSZz7f5h8j6ixRFPKhseG0gWBSuPw';



// Função para adicionar dados a uma planilha do Google Sheets
export async function appendDataToSheet() {
  try {
    // Configurar o cliente JWT (JSON Web Token) para autenticação
    const client = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Autorizar o cliente
    await client.authorize();

    // Criar uma instância do Google Sheets
    const sheets = google.sheets({ version: 'v4', auth: client });
    var dateTime=new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}).replace(/,/, '');
    // Dados que você deseja adicionar
    const request = {
      spreadsheetId: SHEET_ID,
      range: 'raw', // Intervalo onde deseja adicionar os dados
      valueInputOption: 'RAW',
      resource: {
        values: [[ dateTime, 'Inicio Abertura']], // Os dados que você deseja adicionar
      },
    };

    // Fazer a solicitação para adicionar os dados
    const response = await sheets.spreadsheets.values.append(request);

    console.log('Dados adicionados com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao adicionar dados à planilha:', error.message);
  }
}

// Chamar a função para adicionar dados à planilha
// appendDataToSheet();
