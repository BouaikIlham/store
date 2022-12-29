import create from 'zustand'
import { devtools } from "zustand/middleware"; 

let store = (set) => ({
    isLoading: true,
    products: [],
    cart: [],
    Product: [],
    total : 0,
    ProductBycategories: [],
    categories: [ "electronics" ],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
            .then((res) => res);

        set({ products: res, isLoading: false });
    },
    addToCart: (product) => {
        const { cart } = useStore.getState();
        console.log(cart.length)
        const isFound = cart.some((p) => {
            if (p.id === product.id) {
                return true;
            }
            return false;
        })
        if (isFound) {
            return alert("Aleardy in cart")
        }
        let sum = cart.reduce((acc, value) => acc + value.price, 0)
        sum = sum.toFixed(2)
        set((state) => ({ cart: [...state.cart, { ...product, number: 1 }], total: sum }))

    },
    ProductDetails: (p) => {
        set({ Product: p})

    },

    clearCart: () => {
        set({cart: []})
    },
    removeProductFromCart: (product) => {
        const { cart } = useStore.getState()
        const newCart = cart.filter((p) => p.id !== product.id)
        let sum = newCart.reduce((acc, value) => acc + (value.price * value.number), 0)
        sum = sum.toFixed(2)
        set({cart: newCart, total: sum})
    },

    updateTotalCart: () => {
        const { cart } = useStore.getState();
        console.log(cart.length)
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
    // filterProductByCategory: async () => {
    //     const category = await fetch('https://fakestoreapi.com/products/category/electronics')
    //         .then(category => category.json())
    //         .then(category => category)
    //     set({category: category, isLoading: false})
    // }
    filterProductByCategory: () => {
        const {products} = useStore.getState()
        const { categories } = useStore.getState()
        const productsByCategory = products.filter((p) => {
            return p.category === categories[0]
        })
        set({ ProductBycategories: productsByCategory})
    }



})

store = devtools(store);

const useStore = create(store);

export default useStore;


