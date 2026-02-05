declare module 'alpinejs' {
  export interface Alpine {
    data(name: string, callback: () => any): void;
    store(name: string, data: any): void;
    start(): void;
  }
  
  const Alpine: Alpine;
  export default Alpine;
}
