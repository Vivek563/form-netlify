export default function Home() {
     return (
          <>
               <div className="flex items-center justify-center min-h-screen gap-10">
                    <div className="flex gap-10">
                         <form className="flex gap-10 flex-col" name="contact" method="POST" data-netlify="true">
                              <input type="hidden" name="form-name" value="contact" />
                              <p>
                                   <label htmlFor="name">Name</label>
                                   <input type="text" id="name" name="name" />
                              </p>
                              <p>
                                   <label htmlFor="email">Email</label>
                                   <input type="text" id="email" name="email" />
                              </p>
                              <p>
                                   <label htmlFor="message">Message</label>
                                   <textarea id="message" name="message"></textarea>
                              </p>
                              <p>
                                   <button type="submit">Send</button>
                              </p>
                         </form>
                    </div>
               </div>
          </>
     );
}
