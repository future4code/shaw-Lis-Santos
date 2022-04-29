import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)


    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(initialState)
    }
    return { form, onChange, cleanFields }
}
export default useForm;