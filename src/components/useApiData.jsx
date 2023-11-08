import { useQuery } from "react-query";

const fetchData = async (apiUrl) => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const useApiData = (apiUrl) => {
    return useQuery("data", () => fetchData(apiUrl), {
        enabled: !!apiUrl,
    });
};

export default useApiData;
