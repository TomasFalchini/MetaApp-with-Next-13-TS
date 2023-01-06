export default interface DB {
  connect: () => Promise<boolean>;
  disconnect: () => Promise<boolean>;
}
