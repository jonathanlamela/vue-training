import { ref, type Ref, type UnwrapRef } from "vue";

type FetchResponse<T> = {
    data: Ref<UnwrapRef<T> | null>;
    error: Ref<UnwrapRef<Error> | null>;
    loading: Ref<boolean>;
}

export function useFetch<T>(url: string): FetchResponse<T> {
    const data = ref<UnwrapRef<T> | null>(null);
    const error = ref<UnwrapRef<Error> | null>(null);
    const loading = ref<boolean>(true);

    const fetchData = async () => {
        try {
            loading.value = true;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            data.value = await response.json();
        } catch (err) {
            error.value = err as Error;
        } finally {
            console.log("Fetch completed");
            loading.value = false;
        }
    };

    fetchData();

    return { data, error, loading };
}
