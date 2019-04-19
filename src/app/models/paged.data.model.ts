export interface PagedData<T> {
  // Tableau data 
  data: T[];
  limit: number;
  offset: number;
}
