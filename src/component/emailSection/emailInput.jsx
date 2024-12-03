
// email component
export default function EmailComponent({ value, onChange }) {
  return (
    <input 
      type="email" 
      id="email"
      value={value}
      onChange={onChange} 
      placeholder='email@company.com'
      className='border rounded-md p-2 pl-4 font-robotoRegular text-CharcoalGrey text-mediumSize cursor-pointer w-full xl:text-baseSize'
    />
  )
}
