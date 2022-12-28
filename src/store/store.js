import create from 'zustand'

let store = (set) => ({
products: [],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => res);

        set({ products: res });
        console.log(res)
    },

})

const useStore = create(store);

export default useStore;


