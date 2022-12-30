import create from 'zustand'
import { persist, devtools } from "zustand/middleware"; 

let store = (set) => ({
    isLoading: true,
    products: [],
    cart: [],
    Product: [],
    total : 0,
    ProductBycategories: [],
    categories: [],
    electronics: [],
    men: [],
    jewelery: [],
    women: [],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
            .then((res) => res);

        set({ products: res, isLoading: false });
    },
    addToCart: (product) => {
        const { cart } = useStore.getState();
        console.log(cart)
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
        console.log(cart)
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
    fetchCategories: async () => {
         const category = await fetch('https://fakestoreapi.com/products/categories/')
            .then(category => category.json())
            .then(category => category)
        set({ categories: category})
     },


    filterProdctsByCategory: () => {
        const { products } = useStore.getState()
        const { categories } = useStore.getState()
        const filteredProducts = categories.map(category => products.filter(product => product.category === category));
        let arr = filteredProducts
        let [electronics, jewelery, men, women] = arr
        set({ electronics: electronics, jewelery: jewelery, women: women, men: men })

    }




})

store = devtools(store);
store = persist(store);


const useStore = create(store);

export default useStore;


