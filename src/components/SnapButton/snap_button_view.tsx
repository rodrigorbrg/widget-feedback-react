import { Dispatch, SetStateAction, useState } from 'react';
import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import Loading from '../Loading';

interface SnapButtonProps {
  screenShot?: string | null,
  setScreenShot: Dispatch<SetStateAction<string | null>>
}

function SnapButton({
  screenShot,
  setScreenShot,
  }: SnapButtonProps
  ) {
  const [loading, setLoading] = useState<boolean>(false);
  
  const snapShot = async () => {
    setLoading(true);
    
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    setScreenShot(base64Image);
    setLoading(false);
  }

  const clearImage = () => {
    setScreenShot(null);
  }

  if(screenShot) {
    return (
      <button 
        type="button"
        onClick={clearImage}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100  transition-colors"
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
      >
        <Trash weight='fill'></Trash>
      </button>
    )
  }
  
  return (
    <button 
        type="button"
        className="bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  focus:ring-brand-500 transition-colors duration-300" 
        onClick={snapShot}
      >
        {
          loading ? 
            <Loading/>
          :
            <Camera className="w-6 h-6 text-zinc-100"/>
        }
    </button>
  )
}

export default SnapButton;
