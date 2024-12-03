
// button component
export default function ButtonComponent({ onClick }) {
  return (
    <>
      <button
        onClick={onClick} 
        className='bg-DarkSlateGrey text-white text-belowSize font-robotoBold py-3 rounded w-full hover:bg-Tomato xl:text-baseSize hover:shadow-colorShadow'>
        Subscribe to monthly newsletter
      </button>
    </>
  )
}