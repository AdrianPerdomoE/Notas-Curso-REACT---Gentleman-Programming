// El objetivo de este ejemplo es mostrar el uso de useCallback para evitar la creación de funciones en cada renderizado.
//se usa useCallback para memorizar la instancia de una función
// Hace que un hijo, no renderice

import { memo, useCallback, useState } from "react";

//Ejemplo
// Supongamos que tenemos un numero de telefono que llamamos con frecuencia
// En vez de marcarlo continuamente, lo guardamos en los contactos


interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void;

}

const ContactCard = memo(({ onCall, contact }: ContactProps) => {
    console.log(`Renderizando ContactCard ${contact.name}`);
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <button onClick={() => onCall(contact.phone)}>Call</button>
        </div>
    );
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: 'Alice', phone: '123-456-7890' },
        { id: 2, name: 'Bob', phone: '987-654-3210' },
    ]);

    const onCall = useCallback((phone: string) => {
        console.log(`Calling ${phone}`);
    }, []);

    const addContact = () => {
        const newContact: Contact = {
            id: contacts.length + 1,
            name: `New Contact ${contacts.length + 1}`,
            phone: `555-000-${contacts.length + 1}`
        };
        setContacts([...contacts, newContact]);
    }
    return (

        <>
            <h2>Agenda de contactos</h2>

            {contacts.map((contact: Contact) => (

                <ContactCard
                    contact={contact}
                    onCall={onCall}
                    key={contact.id}
                />

            ))}

            <button type="button" onClick={addContact}>Add Contact</button>
        </>
    );
}