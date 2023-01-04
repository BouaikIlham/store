import create from 'zustand'
import { devtools } from "zustand/middleware"; 

let store = (set) => ({
    isLoading: true,
    products: [],
    cart: [],
    Product: [],
    total : 0,
    count : 0,
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
            .then((res) => res);

        set({ products: res, isLoading: false });
    },
    addToCart: (product) => {
        const { cart , count } = useStore.getState();
        const isFound = cart.some((p) => {
            if (p.id === product.id) {
                return true;
            }
            return false;
        })
        if (isFound) {
            return alert("Aleardy in cart")
        }
        set((state) => ({ cart: [...state.cart, { ...product, number: 1 }]}))
        const { cart: newCart } = useStore.getState();
        let sum = newCart.reduce((acc, value) => acc + value.price, 0)
        sum = sum.toFixed(2)

        set({total: sum, count: count + 1})
    },
    ProductDetails: (p) => {
        set({ Product: p})

    },

    clearCart: () => {
        set({cart: [], total: 0, count: 0})
    },
    removeProductFromCart: (product) => {
        const { cart, count } = useStore.getState()
        const newCart = cart.filter((p) => p.id !== product.id)
        let sum = newCart.reduce((acc, value) => acc + (value.price * value.number), 0)
        sum = sum.toFixed(2)
        set({cart: newCart, total: sum, count: count - 1})
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
    },
     filterProducts: (category) => {
        const {products} = useStore.getState()
        const result = products.filter((p) => {
            return p.category === category
        })
        set({products: result})
        
    }
})

store = devtools(store);
// store = persist(store);


const useStore = create(store);

export default useStore;


