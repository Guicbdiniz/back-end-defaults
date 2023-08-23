interface Model<T> {
  getOne: (id: string) => Promise<T>;
  getAll: () => Promise<T[]>;
  delete: (id: string) => Promise<T>;
  update: (id: string, updates: Partial<T>) => Promise<T>;
}
