import { Link } from "react-router-dom";
import properties from "../../properties";
import PropertiesList from "../../components/ui/PropertiesList";
function StatisticCard({
    title,
    reviews,
    value,
}: {
    title: string;
    reviews: number;
    value: number;
}) {
    return (
        <div className="bg-zinc-200 px-4 py-12 flex flex-col gap-6 rounded-md">
            <h3 className="text-3xl">{title}</h3>
            <div className="flex items-center justify-between">
                <span className="text-xl">+{reviews} Reviews</span>
                <span className="text-3xl font-bold">{value}</span>
            </div>
        </div>
    );
}

function HomePage() {
    return (
        <div className="p-4 flex flex-col">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] mb-32">
                <div
                    className="col-span-1 md:col-span-2 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <div className="bg-black/90 w-full h-full p-12 flex flex-col justify-center items-start">
                        <h1 className="text-7xl font-bold text-white mb-12">
                            The Best Place to Find Properties
                        </h1>

                        <Link to="/properties" className="btn btn-light">
                            Search Properties
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                    <div className="flex flex-col justify-between h-full gap-12">
                        <StatisticCard title="Google" reviews={108} value={5} />
                        <StatisticCard
                            title="Zillow"
                            reviews={120}
                            value={4.8}
                        />
                        <StatisticCard
                            title="Facebook"
                            reviews={400}
                            value={4.9}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 mb-32">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="text-3xl">Recent Properties Listing</h3>
                    <p>Most recent properties listed, check them out.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <PropertiesList properties={properties.slice(0, 3)} />

                    <Link
                        to="/properties"
                        className="btn btn-primary self-center"
                    >
                        View All Properties
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
