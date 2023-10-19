

const Card = ({card}) => {
   
    return (
        <div> 

     
     
          <div>
              <div class="flex justify-center items-center mb-4   rounded-full bg-primary-100  dark:bg-primary-900">
                  <img className="h-[250px] w-96" src={card.img} /> 
                 
             </div>
              <h3 class="mb-2 text-xl font-extrabold text-white text-center">{card.brand}</h3>
              <p class=" dark:text-gray-400 text-white text-center">{card.slogan}</p>
          </div>
         
          
      
  </div>



    
    );
};

export default Card;