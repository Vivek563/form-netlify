"use client";

import React, { useState } from "react";

const Form: React.FC = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");

     const handleSubmit = (event: React.FormEvent) => {
          event.preventDefault();
     };

     return (
          <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
               <input type="hidden" name="form-name" value="contact" />
               <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
               </div>
               <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>
               <button type="submit">Submit</button>
          </form>
     );
};

export default Form;
