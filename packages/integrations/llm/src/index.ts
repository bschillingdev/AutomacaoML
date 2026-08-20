// ML AutoRespostas - Integração LLM Gateway
// Adapter para providers de LLM (OpenAI, Anthropic, etc.)

export interface LLMConfig {
  provider: string;
  apiKey: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMResponse {
  content: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// Placeholder - implementação real em tarefas futuras
export class MockLLMGateway {
  private _config: LLMConfig;

  constructor(config: LLMConfig) {
    this._config = config;
  }

  async chat(messages: LLMMessage[]): Promise<LLMResponse> {
    console.log(`Mock LLM Gateway: ${messages.length} mensagens`);
    return {
      content: 'Resposta mock do LLM Gateway',
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30,
      },
    };
  }
}
