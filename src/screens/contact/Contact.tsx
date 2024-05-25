import {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {socialNetworks} from './utils';

export const Contact = () => {
  const [msg, setMsg] = useState<string>('');

  const contacts = [
    {
      field: 'email',
      component: (
        <input
          type="email"
          className="w-100 border-b-[0.5px] border-dashed border-[#84099c] bg-transparent pl-2 focus-visible:outline-none active:outline-none"
        />
      ),
    },
    {
      field: 'subject',
      component: (
        <input
          type="text"
          className="w-100 border-b-[0.5px] border-dashed border-[#84099c] bg-transparent pl-2 focus-visible:outline-none active:outline-none"
        />
      ),
    },
    {
      field: 'message',
      component: (
        <div className="w-full">
          <TextareaAutosize
            minRows={3}
            className="w-100 resize-none overflow-hidden border-b-[0.5px] border-dashed border-[#84099c] bg-transparent pl-2 text-primaryColor focus-visible:outline-none active:border-none"
            maxRows={10}
            cols={19}
            value={msg}
            onChange={(ev) => setMsg(ev.target.value)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-row items-center pt-4 align-middle">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 pb-2 text-lg font-bold text-primaryColor sm:text-2xl">
          Get in Touch
          <span className="text-lg text-themePrimaryColor sm:text-2xl"> - Contact Me</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>
      <div className="flex flex-col pt-8 lg:flex-row lg:pt-32">
        <div className="flex w-[40%] flex-col">
          <div className="ms-[-20px] flex flex-col">
            <h3 className="ms-[-35px] text-center font-bold text-primaryColor">FIND ME ON</h3>
            <p className=" items-start text-primaryColor">
              Please don`t hesitate to
              <span className="text-lg text-themePrimaryColor"> connect.</span>
            </p>
          </div>
          <div className="grid w-full grid-cols-5 gap-1 p-2 sm:gap-6">{socialNetworks().map((item) => item)}</div>
        </div>
        <div className="line-contact relative w-[60%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-1/3 lg:pt-0">
          <p className="w-full text-xl text-themePrimaryColor">
            .contactMe<span className=" text-xl text-primaryColor">{' {'}</span>
          </p>
          {contacts.map(({field, component}) => (
            <p className="line-contact flex w-full pl-10 text-lg text-primaryColor" key={field}>
              {field}:{component}
            </p>
          ))}
          <p className="line-contact text-xl text-primaryColor">{'}'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
