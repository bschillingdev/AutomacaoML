// ML AutoRespostas - Integração Mercado Livre
// Adapter para API oficial do Mercado Livre

export interface MLConnection {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface MLQuestion {
  id: string;
  itemId: string;
  text: string;
  createdAt: Date;
  fromUserId: string;
}

export interface MLAnswer {
  questionId: string;
  text: string;
}

// Placeholder - implementação real em tarefas futuras
export class MockMLAdapter {
  async getQuestions(sellerId: string): Promise<MLQuestion[]> {
    console.log(`Mock: Buscando perguntas para seller ${sellerId}`);
    return [];
  }

  async sendAnswer(answer: MLAnswer, connection: MLConnection): Promise<boolean> {
    console.log(`Mock: Enviando resposta para pergunta ${answer.questionId}`);
    return true;
  }

  async refreshToken(connection: MLConnection): Promise<MLConnection> {
    console.log('Mock: Refreshing token');
    return connection;
  }
}
