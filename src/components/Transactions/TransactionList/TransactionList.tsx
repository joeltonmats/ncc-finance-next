interface TransactionListProps {
  userId: string;
  balanceId: string;
}

export default function TransactionList(
  {
    //   userId,
    //   balanceId,
  }: TransactionListProps
) {
  //const [user, setUser] = useState(userId);
  //const [balance, setBalance] = useState(balanceId);

  return (
    <>
      <h2 className="text-lg font-semibold">Extrato</h2>
      <div className="text-sm text-[--color-neutral-900]">
        <div className="relative flex-grow">
          <h3 className="text-brand-primary font-medium">Novembro</h3>
          <h4 className="text-brand-primary font-medium">Depósito</h4>
          <div className="flex flex-wrap items-center gap-2">
            <span className="runcate dark:text-dark-5 text-sm font-medium xl:max-w-[8rem]">
              R$ 150
            </span>
            <time className="text-xs" dateTime="18/11/2022"></time>
          </div>
        </div>
        <p className="">Novembro - Depósito - R$ 150 - 18/11/2022</p>
        <p>Novembro - Depósito - R$ 100 - 21/11/2022</p>
        <p>Novembro - Depósito - R$ 50 - 21/11/2022</p>
        <p>Novembro - Transferência - -R$ 500 - 21/11/2022</p>
      </div>
    </>
  );
}
