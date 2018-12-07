import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = '';

  constructor(protected http: HttpClient) { }

    /**
   * List / Search resource
   * @param sort
   * @param order
   * @param size
   * @param page
   * @param search
   */
  get(sort?: string, order?: string, size?: number, page?: number, search?: string) {
    let url = this.baseUrl;
    url += `?sort=${sort}&order=${order}&size=${size}&page=${page + 1}`;
    if (search) {
      url += `&search=${search}`;
    }
    return this.http.get(url);
  }

  /**
   * Add resource
   */
  post(data) {
    return this.http.post(this.baseUrl, data);
  }

  /**
   * Update resource
   */
  put(id, data) {
    return this.http.post(this.baseUrl + `${id}/`, data);
  }

  /**
   * Fetch details
   * @param id : resource id
   */
  getDetails(id: number) {
    return this.http.get(this.baseUrl + `${id}/`);
  }

}
