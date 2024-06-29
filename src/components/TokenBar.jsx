function TokenBar() {
    return ( 
      <>
        <div>
            <div className="flex justify-around text-blue-500 text-sm		">
                <div className="p-9">Token</div>
                <div className="p-9">Balance</div>
            </div>
        </div>
            <div className="flex justify-around hover:bg-blue-500 p-3 hover:text-whitE divide-y divide-slate-700">
                <div>BAT</div>
                <div>2.6$</div>
            </div>
        <div className="flex justify-around hover:bg-blue-500 p-3 hover:text-whitE">
          <div>THETA</div>
          <div>2.6$</div>
        </div>
      </>
    );
}

export default TokenBar;