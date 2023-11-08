import useApiData from "../components/useApiData";

const Home = () => {
    const url = "https://fakestoreapi.com/products";
    const { data, isLoading, isError } = useApiData(url);

    return (
        <div className="">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            <div className="grid grid-cols-3 font-sans p-8 gap-8 w-full">
                {data?.map((item) => (
                    <div
                        className=" text-center text-white border-2 border-white/10 hover:border-white  anim rounded-xl drop-shadow-lg p-4"
                        key={item.id}
                    >
                        <img
                            className="w-[10rem] rounded-lg mx-auto"
                            src={item.image}
                            alt={item.title}
                        />
                        <p className="text-xl mt-4 text-blue-100 font-semibold">
                            {item.title.slice(0, 100)}
                        </p>
                        <p className="">{item.price}</p>
                        <p className="opacity-70 text-sm">
                            {item.description.slice(0, 200)}
                            <span className="text-blue-300">... Read more</span>
                        </p>
                        <p className="text-sm w-fit mx-auto mt-4 bg-yellow-200 text-amber-800 p-2 py-1 rounded-full">
                            {item.category}
                        </p>
                        <div className="text-sm justify-center mt-3 flex gap-2">
                            <p>{item.rating.count}</p>
                            <p className="">{item.rating.rate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
