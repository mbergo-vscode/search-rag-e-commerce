import { 
  ShoppingBag, Smartphone, Store, Database, Server, 
  Cpu, Search, BarChart3, Workflow, Boxes, 
  Zap, BrainCircuit, Globe, Filter, Sparkles,
  Users, Briefcase, Settings, HardDrive
} from 'lucide-react';
import { PipelineNodeDef, PipelineEdgeDef, NodeDetail } from './types';

export const NODES: PipelineNodeDef[] = [
  // --- Frontend (Top) ---
  { id: 'storefront_ui', label: 'Web Storefront', x: 100, y: 50, icon: Globe, description: 'Next.js App. Barra de busca com Typeahead preditivo e resultados instantâneos.', category: 'frontend' },
  { id: 'mobile_app', label: 'iOS/Android App', x: 400, y: 50, icon: Smartphone, description: 'Busca por voz e visual (Image Search) integrada.', category: 'frontend' },
  { id: 'merchant_dashboard', label: 'Painel Lojista', x: 900, y: 50, icon: Store, description: 'Analytics de termos sem resultado e gestão de catálogo.', category: 'frontend' },

  // --- Search Intelligence (Middle) ---
  { id: 'search_api', label: 'Search API', x: 250, y: 220, icon: Search, description: 'Orquestrador de Consultas. Expansão de queries e filtros.', category: 'search_core' },
  { id: 'reranker', label: 'Semantic Reranker', x: 500, y: 220, icon: Filter, description: 'Learning to Rank (LTR). Reordena Top-N resultados por relevância semântica.', category: 'search_core' },
  { id: 'genai_gateway', label: 'RAG Service', x: 750, y: 22