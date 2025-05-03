
const PricePoolCard = () => {
    return (
        <div className="bg-slate-50">
            <div className="flex flex-col items-center bg-yellow-400 py-2 mb-2">
                <h3 className="font-bold ">
                    PRICE POOL
                </h3>
                <p>Solo Time | Mobile | 22301</p>
            </div>
            <ul className="font-semibold">
                <li>
                    👑 Winner - 90 Taka
                </li>
                <li>
                    🥈 2nd Position - 70 Taka
                </li>
                <li>
                    🥉 3rd Position - 40 Taka
                </li>
                <li>
                    🏅 4th Position - 30 Taka
                </li>
                <li>
                    🏅 5th Position - 20 Taka
                </li>
                <li>
                    🔥 Per Kill : 10 Taka
                </li>
                <li>
                    🏆 Total Prize : 800 Taka
                </li>

            </ul>
        </div>
    );
};

export default PricePoolCard;