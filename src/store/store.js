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
        let sum = newCart.reduce((acc, value) => acc + (value.price * value.number), 0)
        sum = sum.toFixed(2)
        set({cart: newCart, total: sum})
    },

    updateTotalCart: () => {
        const { cart } = useStore.getState();
            let sum = cart.reduce((acc, value) => acc + value.price, 0)
            sum = sum.toFixed(2)
            set({ total: sum })

      
    },

    incrementProductNumber: (product) => {
        const { cart } = useStore.getState();
        const newNumber = product.number + 1
        const newProduct = { ...product, number: newNumber }
        const indexOfProduct = cart.findIndex((p) => p.id  === product.id)
        cart[indexOfProduct] = newProduct
        let sum = cart.reduce((acc, value) => acc + (value.price * value.number), 0)
        sum = sum.toFixed(2)

        set({cart: cart, total: sum})

    },

    decrementProductNumber: (product) => {
        const newNumber = product.number - 1

        if (newNumber > 0 ) {
            const { cart } = useStore.getState();
            const newNumber = product.number - 1
            const newProduct = { ...product, number: newNumber }
            const indexOfProduct = cart.findIndex((p) => p.id === product.id)
            cart[indexOfProduct] = newProduct
            let sum = cart.reduce((acc, value) => acc + (value.price * value.number), 0)
            sum = sum.toFixed(2)
            set({ cart: cart, total: sum })
        }
        
    }

})

const useStore = create(store);

export default useStore;


