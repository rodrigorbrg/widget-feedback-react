import { FormEvent, SVGProps, useCallback, useState } from 'react';
import { Popover } from '@headlessui/react';
import { ArrowLeft, X } from 'phosphor-react';

import Card from "../Card";
import Bug from "../../assets/Bug";
import Idea from "../../assets/Idea";
import Thought from "../../assets/Thought";
import Button from '../Button';
import SnapButton from '../SnapButton';
import Success from '../../assets/Success';
import Api from '../../service/Api';

type TypeFeedback =  'BUG' | 'IDEA' | 'THOUGHT';

const types = {
  'BUG': {
    label: 'Problema',
    icon: (props: SVGProps<SVGSVGElement>) => <Bug {...props} />,

  },
  'IDEA': {
    label: 'Ideia',
    icon: (props: SVGProps<SVGSVGElement>) => <Idea {...props} />,
  },
  'THOUGHT': {
    label: 'Outro',
    icon: (props?: SVGProps<SVGSVGElement>) => <Thought {...props} />,
  },
}
function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<null | TypeFeedback>(null);
  const [feedBack, setFeedBack] = useState< string>('');
  const [screenShot, setScreenShot] = useState<null | string>(null);
  const [done, setDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const send = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      comment: feedBack,
      type: feedBackType,
      screenshot: screenShot,
    };
    setLoading(true);
    await Api().createFeedback(body);
    setLoading(false);
    setDone(true);
  }

  const getStep = useCallback(() => {
    if (!feedBackType) {
      return (
        <>
          <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>
            <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-inc-100"  title={"Fechar formulário"}>
              <X weight='bold' className="w-4 h-4"/>
            </Popover.Button>
          </header>
          <div className="flex py-8 gap-2 w-full">
            <Card icon={<Bug />} label={"Problema"} onClick={() => setFeedBackType('BUG')}/>
            <Card icon={<Idea/>} label={"Ideia"} onClick={() => setFeedBackType('IDEA')}/>
            <Card icon={<Thought/>} label={"Outro"} onClick={() => setFeedBackType('THOUGHT')}/>
          </div>
        </>
      )
    } else if (!done) {
      return (
        <>
          <header>
            <button type="button" onClick={() =>setFeedBackType(null) } className="absolute text-zinc-400 hover:text-inc-100 top-5 left-5">
              <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2" >
              { types[feedBackType].icon({className: "w-6 h-6"}) }
              { types[feedBackType].label }
            </span>
            <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-inc-100"  title="Fechar formulário">
              <X weight='bold' className="w-4 h-4"/>
            </Popover.Button>
          </header>
          <form className="my-4 w-full">
            <textarea
              value={feedBack} 
              onChange={(event) => {setFeedBack(event.target.value)}} 
              className="min-w-[304px] py-3 px-2 w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none focus:outline-none bg-transparent rounded-md" 
              placeholder='Conte com detalhes'/>
            <footer className="flex gap-2 mt-2">
              <SnapButton screenShot={screenShot} setScreenShot={setScreenShot}  />
              <Button text="Enviar feedback" onPress={send} loading={loading} disabled={!feedBack} />
            </footer>
          </form>
        </>
      )
    } else {
      return (
        <>
          <header>
            <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-inc-100"  title="Fechar formulário">
              <X weight='bold' className="w-4 h-4"/>
            </Popover.Button>
          </header>
          <div className="flex flex-col items-center py-10 w-[304px]">
            <Success />
            <span className="text-[#FFFFFF] mt-2 text-md">Agradecemos o feedback!</span>
            <button
              type="submit"
              className="bg-zinc-800 text-white text-sm py-2 px-6 mt-6 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  focus:ring-zinc-700 transition-colors duration-300" 
              onClick={() => { setFeedBackType(null), setFeedBack(''), setScreenShot(null), setDone(false) }}
            >Quero enviar outro</button>
          </div>
        </>
      )
    }
  }, [feedBackType, setFeedBackType, feedBack, setFeedBack, screenShot, setScreenShot, done, setDone]);

  return (
    <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 
      {
        getStep()
      }
    </div>
  )
}

export default WidgetForm;
