import { LinkedinIcon, PhoneCall } from 'lucide-react';
import { Input, Textarea, Button } from '@nextui-org/react';


const Contact = () =>{
    return(
        <div id='contact' className='mt-10'>
            <div className='flex justify-center'>
                <h1 className='text-white p-2 font-bold bg-violet-900 w-44 rounded text-center text-2xl'>Contact Me</h1>
                </div>
            <h1 className='text-center font-semibold text-slate-400 py-10'>Let's connect! Feel free to reach out via email or phone for any inquiries or collaborations.</h1>
            <div className='grid grid-cols-3 px-64'>
                <div className='col-span-1'>
                <div className='flex gap-4 mb-10'>
                    <div className='bg-violet-900 p-3 rounded-lg shadow-xl'>
                        <PhoneCall size={32} color='white'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-slate-500'>Call me</h1>
                        <p className='text-blue-800 font-bold'>+233 246 4141 97</p>
                    </div>
                </div>
                <div className='flex gap-4 mb-10'>
                    <div className='bg-violet-900 p-3 rounded-lg shadow-xl'>
                        <PhoneCall size={32} color='white'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-slate-500'>WhatsApp</h1>
                        <p className='text-blue-800 font-bold'>+233 246 4141 97</p>
                    </div>
                </div>
                <div className='flex gap-4 mb-10'>
                    <div className='bg-violet-900 p-3 rounded-lg shadow-xl'>
                        <LinkedinIcon size={32} color='white'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-slate-500'>Linkedin</h1>
                        <p className='text-blue-800 font-bold'>Linkedin</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='bg-violet-900 p-3 rounded-lg shadow-xl'>
                        <PhoneCall size={32} color='white'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-slate-500'>Github</h1>
                        <p className='text-blue-800 font-bold'>Gitgub</p>
                    </div>
                </div>
               
            </div>
            <form className='col-span-2'>
                <Input
                className='mb-10' type='text' label='Name' color='secondary'/>
                <div className='flex gap-12'>
                <Input
                className='mb-10' type='email' label='Email' color='secondary'/>
                <Input
                className='mb-10' type='phone' label='Phone' color='secondary'/>
                </div>
                <Textarea
                className='mb-5'
                label="Description"
                color='secondary'
                />
                <Button className='p-6' color='secondary'>Submit Message</Button>
            </form>
            </div>
        </div>
    )
}

export default Contact;