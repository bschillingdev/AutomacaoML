// ML AutoRespostas AI Module
// Módulo de IA com providers LLM e Embedding (adapters)

export interface LLMProvider {
  generateResponse(prompt: string): Promise<string>;
}

export interface EmbeddingProvider {
  generateEmbedding(text: string): Promise<number[]>;
}

// Placeholder - implementação real em tarefas futuras
export class MockLLMProvider implements LLMProvider {
  async generateResponse(prompt: string): Promise<string> {
    return `Resposta mock para: ${prompt.substring(0, 50)}...`;
  }
}

export class MockEmbeddingProvider implements EmbeddingProvider {
  async generateEmbedding(_text: string): Promise<number[]> {
    // Retorna vetor mock de 1536 dimensões (compatível com text-embedding-ada-002)
    return new Array(1536).fill(0).map(() => Math.random());
  }
}
