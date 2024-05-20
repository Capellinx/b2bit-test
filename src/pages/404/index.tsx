

export const NotFound = () => {
   return(
      <section className="flex items-center justify-center flex-col h-screen">
         <img src="/public/404-computer.svg" alt="" />
         <div>
            <p className="text-blue_b2bit text-2xl font-bold text-center">404 Not Found</p>
            <h2 className="text-4xl font-medium my-8">Whoops! That page doesn't exits</h2>
            <p className="text-center text-xl my-6">Here are some helpful links instead:</p>
            <p>
               <a href="/" className="underline text-center block ">Login</a>
            </p>
         </div>
      </section>
   )
}