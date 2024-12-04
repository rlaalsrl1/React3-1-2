'use client'

import { Provider } from "react-redux"
import { store } from "./stroe"

export default function CounterProvider({children}){
    return(
        <Provider store={store}>{children}</Provider>
    )

}