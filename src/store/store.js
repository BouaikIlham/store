import create from 'zustand'

let store = (set) => ({
products: [],
cart: [],
Product: [],
total : 0,
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

        set((state) => ({ cart: [...state.cart, { ...product, number: 1 }] }))

    },
    ProductDetails: (p) => {
        set({ Product: p})

    },

    clearCart: () => {
        set({cart: []})
    },
    removeProductFromCart: (product) => {
        const { cart } = useStore.getState();
        const newCart = cart.filter((p) => p.id !== product.id)
        console.log(newCart)
        set({cart: newCart})
    },

    updateTotalCart: () => {
        const { cart } = useStore.getState();
        const sum = cart.reduce((acc, value) => acc + value.price , 0)
        set({total: sum})
    },

    incrementProductNumber: (product) => {
        const { cart } = useStore.getState();
        const newNumber = product.number + 1
        const newProduct = { ...product, number: newNumber }
        console.log(newNumber)
        const indexOfProduct = cart.findIndex((p) => p.id  === product.id)
        cart[indexOfProduct] = newProduct

        set({cart: cart})

    }

})

const useStore = create(store);

export default useStore;


