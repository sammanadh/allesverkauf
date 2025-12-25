declare function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: any[]) => void;
export default debounce;
