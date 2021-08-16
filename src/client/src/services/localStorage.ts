export class LocalStorageService {
    public set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get<T>(key: string): T | null {
        const str = localStorage.getItem(key);
        if (str) return JSON.parse(str) as T;
        else return null
    }

    clearAll(): void {
        localStorage.clear();
    }


}