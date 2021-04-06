import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>('http://localhost:8080/produto')
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.httpClient.get<Produto>(`http://localhost:8080/produto/${id}`)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(`http://localhost:8080/produto/nomeProduto/${nome}`)
  }

  getByIdBrechoProdutos(id: number): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(`http://localhost:8080/produto/brecho/${id}`)
  }

  postProduto(produto:Produto): Observable<Produto>{
    return this.httpClient.post<Produto>('http://localhost:8080/produto', produto, this.token)
  }

  putProduto(produto:Produto): Observable<Produto>{
    return this.httpClient.put<Produto>('http://localhost:8080/produto', produto, this.token)
  }

  deleteTema(id:number){
    return this.httpClient.delete (`http://localhost:8080/produto/brecho/${id}`, this.token)
  }


}
