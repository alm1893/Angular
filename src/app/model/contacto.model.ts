export class Contacto {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumple: string;
    private _colorFav: string;
    private _sexo: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: string, colorFav: string, sexo: string) {
        this._nombre= nombre;
        this._apellidos= apellidos;
        this._edad= edad;
        this._dni= dni;
        this._cumple= cumple;
        this._colorFav= colorFav;
        this._sexo= sexo;
    }
    public get nombre() : string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre= value;
    }
    public get apellidos() : string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos= value;
    }
    public get edad() : number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad= value;
    }
    public get dni() : string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni= value;
    }
    public get cumple() : string {
        return this._cumple;
    }
    public set cumple(value: string) {
        this._cumple= value;
    }
    public get colorFav() : string {
        return this._colorFav;
    }
    public set colorFav(value: string) {
        this._colorFav= value;
    }
    public get sexo() : string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo= value;
    }
    public LiteralP(): string{
        return this._nombre+" "+ this._apellidos+", "+ this._edad+", "+ this._dni+", "+ this._cumple+", "+ this._colorFav+", "+ this._sexo;
    }
}

