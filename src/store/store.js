import create from 'zustand'

let store = (set) => ({
products: [],
    fetchProducts: async () => {
        const res = await fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((res) => res);

        set({ products: res });
    },

})

const useStore = create(store);

export default useStore;


