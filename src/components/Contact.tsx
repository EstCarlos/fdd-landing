'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { sendContactForm } from '../app/_actions/contact';
import { Label } from './ui/label';
import { Input } from './ui/input';

const Contact = () => {

    const [errors, actions] = useFormState(sendContactForm, {});

  return (
    <div> 
        <form action={actions}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Product Name"
        />
        <SubmitButton />
        </form>
    </div>
  )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? "Saving" : "Save"}
      </button>
    );
  }

export default Contact