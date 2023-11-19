import { useState } from "react";
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="contenedorForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre
                    <input 
                    type="text" 
                    required
                    value={name}
                    onChange={({target}) => setName(target.value)}
                
               
                    /> 
                </label>
                <label>
                    Telefono
                    <input 
                    type="tel" 
                    required
                    value={phone} 
                    onChange={({target}) => setPhone(target.value)}
              
                 
                    />
                </label>
                <label>
                    Email
                    <input 
                    required
                    type="email" 
                    value={email} 
            
                    onChange={({target}) => setEmail(target.value)}
                 
                    />
                </label>
                <div>
                    <button type="submit">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm