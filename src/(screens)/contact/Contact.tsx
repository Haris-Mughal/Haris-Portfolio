import {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {socialNetworks} from './utils';

export const Contact = () => {
  const [msg, setMsg] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = () => {
    setEmail('');
    setSubject('');
    setMsg('');

    setStatus('Message sent successfully!');

    setTimeout(() => setStatus(''), 3000);
  };

  // const handleSubmit = async () => {
  //   const scriptURL =
  //     'https://script.google.com/macros/s/AKfycbwlxeQ13C14n8p3SRV8rDRJ9WkzpeH45JpS0xCSua9-w0j6VvYn7G9avyrez924RNwE/exec';

  //   if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     setStatus('⚠️Please enter a valid email address.');
  //     return;
  //   }

  //   if (!subject || subject.trim().length === 0) {
  //     setStatus('⚠️Please enter a subject.');
  //     return;
  //   }

  //   if (!msg || msg.trim().length === 0) {
  //     setStatus('⚠️Please enter a message.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch(scriptURL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //         subject,
  //         message: msg,
  //       }),
  //     });

  //     if (response.ok) {
  //       setStatus('✅Message sent successfully!');
  //       setMsg('');
  //       setEmail('');
  //       setSubject('');
  //     } else {
  //       const err = await response.json();
  //       setStatus(`⚠️${err} ||⚠️Error sending message.`);
  //     }
  //   } catch (error) {
  //     setStatus('⚠️Something went wrong. Please try again later.');
  //     console.error('Error:', error);
  //   }
  // };

  const contacts = [
    {
      field: 'email',
      component: (
        <input
          title="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-[0.5px] border-dashed border-themePrimaryColor bg-transparent pl-2 focus-visible:outline-none active:outline-none"
        />
      ),
    },
    {
      field: 'subject',
      component: (
        <input
          title="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border-b-[0.5px] border-dashed border-themePrimaryColor bg-transparent pl-2 focus-visible:outline-none active:outline-none"
        />
      ),
    },
    {
      field: 'message',
      component: (
        <div className="w-full">
          <TextareaAutosize
            minRows={3}
            className="resize-none overflow-hidden border-b-[0.5px] border-dashed border-themePrimaryColor bg-transparent pl-2 text-primaryColor focus-visible:outline-none active:border-none"
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
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-primaryColor">FIND ME ON</h3>
            <p className="text-primaryColor">
              Please don`t hesitate to reach out to me{' '}
              <span className="text-lg text-themePrimaryColor">and connect.</span>
            </p>
          </div>
          <div className="grid w-full grid-cols-4 items-center gap-1 p-2 sm:gap-6">
            {socialNetworks().map((item) => item)}
          </div>
        </div>
        <div className="line-contact relative w-[50%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-1/3 lg:pt-0">
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className=" text-xl text-primaryColor">{' {'}</span>
          </p>
          {contacts.map(({field, component}) => (
            <p className="line-contact flex pl-10 text-lg text-primaryColor" key={field}>
              {field}:{component}
            </p>
          ))}
          <button
            type="submit"
            className="btn hover:bg-themeSecondaryColor rounded bg-themePrimaryColor p-2 px-2 text-lg text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p className="line-contact text-xl text-primaryColor">{'}'}</p>
          {status && <p className="pt-4 text-primaryColor">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
