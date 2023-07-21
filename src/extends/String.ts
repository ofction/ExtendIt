// extendItString.ts
export function createExtendItString(name: string, func: Function): void {
  (String.prototype as any)[name] = func;
}

createExtendItString('startFrom', function(num: number, options: { noSpace?: boolean } = {}): string {
  if (options.noSpace) return this.slice(num - this.length || 0).noSpace();
  return this.slice(num - this.length || 0);
});

createExtendItString('noSpace', function(): string {
  return this.replace(/ +/g, '');
});
