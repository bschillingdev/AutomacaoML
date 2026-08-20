// ML AutoRespostas - Knowledge Base Module
// Módulo de base de conhecimento com RAG

export interface KnowledgeDocument {
  id: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
}

export interface KnowledgeChunk {
  id: string;
  documentId: string;
  content: string;
  embedding?: number[];
  metadata: Record<string, unknown>;
}

export interface SearchQuery {
  query: string;
  limit?: number;
  threshold?: number;
}

export interface SearchResult {
  chunk: KnowledgeChunk;
  similarity: number;
}

// Placeholder - implementação real em tarefas futuras
export class MockKnowledgeBase {
  async indexDocument(doc: KnowledgeDocument): Promise<void> {
    console.log(`Mock KB: Indexando documento ${doc.id}`);
  }

  async search(query: SearchQuery): Promise<SearchResult[]> {
    console.log(`Mock KB: Buscando por "${query.query}"`);
    return [];
  }

  async deleteDocument(documentId: string): Promise<void> {
    console.log(`Mock KB: Removendo documento ${documentId}`);
  }
}
