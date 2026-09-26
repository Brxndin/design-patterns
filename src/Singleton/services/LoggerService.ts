type Nivel = 'INFO' | 'WARN' | 'ERROR';

interface Log {
    nivel: Nivel;
    texto: string;
    horario: string;
}

export class LoggerService {
    private static instancia: LoggerService | null;
    
    private historico: Log[];
    private maxLogs: number;

    private constructor() {
        this.historico = [];
        this.maxLogs = 5;
    }

    public static getInstancia(): LoggerService {
        if (!LoggerService.instancia) {
            LoggerService.instancia = new LoggerService();
        }

        return LoggerService.instancia;
    }

    public log(nivel: Nivel, texto: string): void {
        let data = new Date();

        this.historico.push({
            nivel: nivel,
            texto: texto,
            horario: data.toLocaleString(),
        });

        if (this.historico.length > this.maxLogs) {
            this.historico = this.historico.slice(1);
        }
    }

    public limparLogs(): void {
        this.historico = [];
    }

    public imprimirHistorico(): void {
        console.log(this.historico);
    }
}
