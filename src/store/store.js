import create from 'zustand'

let store = (set) => ({
products: [],
cart: [],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => res);

        set({ products: res });
    },
    addToCart: (product) => {
        const { cart } = useStore.getState();
        const isFound = cart.some((p) => {
            if (p.id === product.id) {
                return true;
            }
            return false;
        })
        if (isFound) {
            return alert("Aleardy in cart")
        }

        set((state) => ({ cart: [...state.cart, { ...product }] }))

    }

})

const useStore = create(store);

export default useStore;


