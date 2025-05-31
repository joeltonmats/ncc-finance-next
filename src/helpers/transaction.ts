export function translateTransactionType(type: string): string {
  switch (type) {
    case "transfer":
      return "Transferência";
    case "deposit":
      return "Depósito";
    case "withdrawal":
      return "Saque";
    default:
      return type;
  }
}
