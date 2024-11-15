/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2024-11-15 12:22:54.

export interface AuditedEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Comodidade extends NotAuditedEntity {
    nome: string;
}

export interface CompanhiaArea extends AuditedEntity {
    nome: string;
    avaliacao: number;
    logotipoUrl: string;
    usuario: Usuario;
}

export interface CompraPassagem extends AuditedEntity {
    passagem: Passagem;
    cliente: Usuario;
    quantidade: number;
    checkIn: boolean;
    total: number;
}

export interface Endereco extends NotAuditedEntity {
    localizacao: Localidade;
    bairro: string;
    logradouro: string;
    numero: string;
    cep: string;
}

export interface Hotel extends AuditedEntity {
    nome: string;
    descricao: string;
    estrelas: number;
    quartos: number;
    banheiros: number;
    localizacao: Localidade;
}

export interface HotelComodidades extends NotAuditedEntity {
    hotel: Hotel;
    comodidade: Comodidade;
}

export interface Localidade extends NotAuditedEntity {
    pais: string;
    estado: string;
    cidade: string;
}

export interface NotAuditedEntity {
    id: number;
}

export interface Passagem extends AuditedEntity {
    origem: Localidade;
    destino: Localidade;
    preco: number;
    dataIda: Date;
    dataVolta: Date;
    companhiaAerea: CompanhiaArea;
    hotel: Hotel;
}

export interface Role extends NotAuditedEntity {
    nome: string;
}

export interface Usuario extends AuditedEntity {
    username: string;
    email: string;
    cpf: string;
    password: string;
}

export interface UsuarioRoles extends AuditedEntity {
    usuario: Usuario;
    role: Role;
}

export interface JwtTokenResponse {
    token: string;
    data: UsuarioResponseDTO;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UsuarioResponseDTO {
    username: string;
    email: string;
    roles: string[];
}
