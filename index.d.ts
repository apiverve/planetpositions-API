declare module '@apiverve/planetpositions' {
  export interface planetpositionsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface planetpositionsResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class planetpositionsWrapper {
    constructor(options: planetpositionsOptions);

    execute(callback: (error: any, data: planetpositionsResponse | null) => void): Promise<planetpositionsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: planetpositionsResponse | null) => void): Promise<planetpositionsResponse>;
    execute(query?: Record<string, any>): Promise<planetpositionsResponse>;
  }
}
