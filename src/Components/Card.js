import {React} from 'react'
import { FcLike , FcLikePlaceholder } from 'react-icons/fc';
import {toast} from "react-toastify"
        

function Card({course,liked,setLiked}) {

  function clickHandler()
  {
      if(liked.includes(course.id))
      {
          // alreday liked
          setLiked((prev)=> prev.filter((cid)=>cid!==course.id))
          toast.warning("Liked Removed");
      }
      else
      {
        // no likes 
        if(liked.length===0)
        {
           setLiked([course.id]);
        }// likes exists
        else
        {
           setLiked(prev=>[...prev,course.id]);
        }
        toast.success("Liked Successfully!..")
      }
  }

  let sub=course.description.substring(0,100);

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden opacity-85 hover:scale-100'>
        <div className='relative'>
            <img src={course.image.url} alt=''></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-15px] absolute grid place-items-center'>
              <button onClick={clickHandler}>
                 {
                   liked.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem"/>)

                 }
              </button>
            </div>
        </div>
        <div className='p-4'>
          <h3 className='text-white font-semibold text-lg leading-6'>{course.title}</h3>
          <p className='text-white mt-2 '>{sub}...</p>
        </div>
        
        
    </div>
  )
}

export default Card