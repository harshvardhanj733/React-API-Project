import React from 'react'
import People from './People';

export default function Peoples(props) {

  const handlePage1 = ()=>{
    props.setLoading(true);
    props.setResult();
    setTimeout(async () => {
      const response = await fetch(`https://reqres.in/api/users?page=1`);
      const response_json = await response.json();
      const res = response_json.data;
      props.setResult(res);
      props.setLoading(false);
    }, 2000);
  }

  const handlePage2 = ()=>{
    props.setLoading(true);
    props.setResult();
    setTimeout(async () => {
      const response = await fetch(`https://reqres.in/api/users?page=2`);
      const response_json = await response.json();
      const res = response_json.data;
      props.setResult(res);
      props.setLoading(false);
    }, 2000);
  }

  return (
    <>
      <div className='grid grid-cols-2 place-items-center'>
        {props.result && (
          <>
            <button type="submit" className='sm:w-1/3 w-1/6 bg-[#D4AF37] text-[#EDF7F6] hover:bg-[#EDF7F6] hover:text-[#D4AF37]' onClick={handlePage1}>1</button>
            <button type="submit" className='sm:w-1/3 w-1/6 bg-[#D4AF37] text-[#EDF7F6] hover:bg-[#EDF7F6] hover:text-[#D4AF37]' onClick={handlePage2}>2</button>
          </>
        )}
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {props.result ? (
          props.result.map((item) => {
            return (
              <>
                <People id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} avatar={item.avatar} key={item.id} />
              </>
            )
          }))

          : !props.loading && <div className='col-span-3 mx-auto font-bold md:text-xl lg:text-3xl'>Click the 'Get User' Button To Get All The Client Details</div>
        }
      </div>
    </>
  )
}
